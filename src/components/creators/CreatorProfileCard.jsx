import React from 'react';

export default function CreatorProfileCard({ creator }) {
  return (
    <div className="flex-shrink-0 w-48 text-center">
      <div className="relative">
        <img
          src={creator.image}
          alt={creator.name}
          className="w-48 h-48 object-cover rounded-2xl mb-4"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded text-sm">
          <p className="font-semibold text-xs">CURATED BY {creator.name.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}