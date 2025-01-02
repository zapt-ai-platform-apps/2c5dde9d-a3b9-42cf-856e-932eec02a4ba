import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function PhotoUpload({ session, onUpload }) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(event) {
    setUploading(true);
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      const filePath = `${session.user.id}/${file.name}`;

      let { error: uploadError } = await supabase.storage
        .from('photos')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
      } else {
        console.log(`Uploaded ${file.name}`);
      }
    }
    setUploading(false);
    onUpload();
  }

  return (
    <div className="mb-4">
      <label className="block text-center">
        <span className="sr-only">Choose photos</span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="block w-full text-sm text-neutral-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-primary file:text-white
            hover:file:bg-primary-dark
            cursor-pointer"
          onChange={handleUpload}
          disabled={uploading}
        />
      </label>
      {uploading && (
        <p className="text-center text-neutral-700 mt-2">
          Uploading...
        </p>
      )}
    </div>
  );
}