import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import PhotoUpload from './PhotoUpload';

export default function Gallery({ session }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPhotos() {
    try {
      console.log('Fetching photos...');
      const { data: files, error } = await supabase.storage
        .from('photos')
        .list(session.user.id + '/', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
        });

      if (error) {
        console.error('Error listing photos:', error);
        return;
      }

      const photoUrls = await Promise.all(
        files.map(async (file) => {
          const { data, error } = await supabase.storage
            .from('photos')
            .getPublicUrl(session.user.id + '/' + file.name);

          if (error) {
            console.error('Error getting public URL:', error);
            return null;
          }

          return { name: file.name, url: data.publicUrl };
        })
      );

      setPhotos(photoUrls.filter((photo) => photo !== null));
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-primary mb-4 text-center">
        Your Photo Gallery
      </h1>
      <PhotoUpload session={session} onUpload={fetchPhotos} />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        {photos.map((photo) => (
          <div key={photo.name} className="relative">
            <img
              src={photo.url}
              alt={photo.name}
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => supabase.auth.signOut()}
          className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-4 rounded-lg cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}