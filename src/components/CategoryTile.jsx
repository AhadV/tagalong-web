import React from 'react';

export default function CategoryTile({ title, image }) {
  return (
    <a href="#" className="group relative block w-64 flex-shrink-0 overflow-hidden rounded-2xl">
      <div className="aspect-[4/5]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <h3 className="text-2xl font-black tracking-tight text-white">{title}</h3>
        </div>
      </div>
    </a>
  );
}