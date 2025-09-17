import React from 'react';
import GridTile from './GridTile';

export default function FeaturedGrid({ eyebrow, title, items, avatars }) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-8 grid grid-cols-1 md:grid-cols-3 items-start gap-8">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold tracking-wide uppercase text-black/60 mb-3 font-sans">{eyebrow}</p>
            <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tighter text-black">{title}</h2>
          </div>
        </header>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {items.slice(0, 4).map((item, index) => (
            <GridTile
              key={index}
              {...item}
              avatars={avatars}
            />
          ))}
        </div>
        
        {/* Off the Beaten Path section */}
        <div className="mt-12">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold tracking-wide uppercase text-black/60 mb-3 font-sans">Off the Beaten Path</p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-black">Hidden Gems</h3>
            <p className="text-base text-black/70 leading-relaxed mt-4 max-w-2xl mx-auto font-sans">
              Discover secret spots and authentic experiences that only locals know about.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {items.slice(4).map((item, index) => (
              <GridTile
                key={index + 4}
                {...item}
                avatars={avatars}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}