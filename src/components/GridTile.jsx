
import React from 'react';
import { Link } from 'react-router-dom';

const GridTile = ({ gridTitle, location, images, link, creatorCount, avatars }) => (
  <Link to={link} target="_blank" rel="noopener noreferrer" className="block relative group">
    <div className="relative overflow-hidden aspect-[3/4] shadow-lg">
      <img src={images[0]} alt={gridTitle} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-xl font-serif font-bold leading-tight mb-1">{gridTitle}</h3>
        <p className="text-sm font-sans font-medium">{location}</p>
      </div>
    </div>
    <div className="absolute bottom-4 right-4 flex items-center -space-x-2 overflow-hidden">
      {avatars.map((avatar, i) => (
        <img key={i} className="inline-block h-8 w-8 ring-2 ring-white object-cover" src={avatar} alt={`Creator avatar ${i+1}`} />
      ))}
      {/* Ensure creatorCount is only shown if > 0 or a number */}
      {creatorCount > 0 && (
        <span className="flex items-center justify-center h-8 w-8 bg-white text-black text-xs font-semibold ring-2 ring-white ml-2">
          +{creatorCount}
        </span>
      )}
    </div>
  </Link>
);

export default GridTile;
