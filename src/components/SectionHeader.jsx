import React from 'react';

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-4 font-sans">
          {eyebrow}
        </p>
      )}
      <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black mb-6 leading-tight font-serif">
        {title}
      </h2>
      {description && (
        <p className="text-lg font-medium text-black/70 max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}">
          {description}
        </p>
      )}
    </div>
  );
}