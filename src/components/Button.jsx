import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg cursor-pointer"
    >
      {children}
    </button>
  );
}