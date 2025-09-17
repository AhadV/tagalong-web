
import React from 'react';
import { Star } from 'lucide-react';

export default function ListingCard({ listing, avatars, index }) {
  // Generate a consistent random creator count for each card on its first render.
  // The empty dependency array [] ensures this runs only once per component instance.
  const creatorCount = React.useMemo(() => Math.floor(Math.random() * (115 - 21 + 1)) + 21, []);

  // Select a rotating set of 3 avatars, memoized for performance.
  const selectedAvatars = React.useMemo(() => {
    if (!avatars || avatars.length === 0) return [];
    const selected = [];
    const startIndex = (index * 3) % avatars.length;
    for (let i = 0; i < 3; i++) {
      selected.push(avatars[(startIndex + i) % avatars.length]);
    }
    return selected;
  }, [avatars, index]);

  return (
    <a href={listing.link} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
        <img src={listing.image_url} alt={listing.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {listing.rating && (
          <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2.5 py-1 text-sm font-semibold flex items-center space-x-1 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            <span>{listing.rating.toFixed(1)}</span>
          </div>
        )}
      </div>
      <div className="pt-3">
        <h3 className="font-semibold text-gray-800 leading-tight truncate">{listing.title}</h3>
        <p className="text-sm text-gray-500">{listing.location}</p>
        <p className="font-semibold text-gray-900 mt-1">
          ${listing.price} <span className="font-normal text-gray-600">{listing.price_label || 'per night'}</span>
        </p>
        <div className="flex items-center space-x-2 mt-2">
            <div className="flex -space-x-2">
              {selectedAvatars.map((avatar, i) => (
                <img 
                  key={i}
                  src={avatar}
                  alt={`Creator ${i+1}`}
                  className="h-6 w-6 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">{creatorCount} creators</span>
        </div>
      </div>
    </a>
  );
}
