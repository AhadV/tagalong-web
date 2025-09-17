
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden">
      {/* Background Vimeo Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/1118435000?background=1&autoplay=1&loop=1&muted=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute w-full h-full"
          style={{
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.77vh', // 16:9 aspect ratio for portrait
            transform: 'translate(-50%, -50%)',
          }}
          title="Background travel montage"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto px-6 flex-grow flex flex-col items-center justify-center">
          <h1 className="text-8xl md:text-9xl font-serif font-bold tracking-tighter text-white leading-tight mb-8">
            Curated Travel,<br />
            Just For You
          </h1>
          <p className="text-xl md:text-2xl font-sans font-medium text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover and book handpicked hotels, villas, and experiences from your favorite creators.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to={createPageUrl('Explore')}>
              <Button className="bg-[var(--pure-white)] text-[var(--deep-black)] hover:bg-[var(--soft-beige)] px-10 py-6 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
                <Play className="w-6 h-6 mr-3" />
                Explore Now
              </Button>
            </Link>
            <Link to={createPageUrl('CreatorApplication')}>
              <Button variant="outline" className="text-black border-white/80 hover:bg-white/10 hover:text-black px-10 py-6 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
                Join as Creator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
