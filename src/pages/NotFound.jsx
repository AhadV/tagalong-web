import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { createPageUrl } from '@/utils';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[var(--deep-black)] flex flex-col">
      <Navigation />

      <main className="flex-grow flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-serif font-bold tracking-tighter mb-4">404</h1>
          <h2 className="text-3xl font-serif mb-6">Lost in Paradise?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have taken an unexpected detour.
            Let's get you back to discovering amazing travel experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={createPageUrl('Home')}>
              <Button className="bg-[var(--deep-black)] text-white hover:bg-gray-800 px-8 py-6 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>

            <Link to={createPageUrl('Explore')}>
              <Button variant="outline" className="border-[var(--deep-black)] text-[var(--deep-black)] hover:bg-gray-50 px-8 py-6 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
                Explore Destinations
              </Button>
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Popular pages you might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to={createPageUrl('Creators')} className="text-[var(--deep-black)] hover:underline">
                Creators
              </Link>
              <span className="text-gray-400">•</span>
              <Link to={createPageUrl('About')} className="text-[var(--deep-black)] hover:underline">
                About Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link to={createPageUrl('Blog')} className="text-[var(--deep-black)] hover:underline">
                Blog
              </Link>
              <span className="text-gray-400">•</span>
              <Link to={createPageUrl('Careers')} className="text-[var(--deep-black)] hover:underline">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}