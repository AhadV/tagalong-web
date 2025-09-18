
import React, { useState, useEffect } from 'react';
import { db } from '@/lib/supabase';
import { logError } from '@/utils/errorHandler';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ListingCard from '../components/explore/ListingCard';

const creatorAvatars = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&q=80',
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&q=80',
  'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=50&h=50&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&q=80',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&q=80',
  'https://images.unsplash.com/photo-1557862921-37829c790f19?w=50&h=50&fit=crop&q=80'
];

export default function Explore() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const { data: allListings, error } = await db.getListings();
        if (error) {
          logError('Error fetching listings', error);
          setListings([]);
        } else {
          // Shuffle the array to mix hotels and experiences
          const shuffledListings = (allListings || []).sort(() => Math.random() - 0.5);
          setListings(shuffledListings);
        }
      } catch (error) {
        logError('Error fetching listings', error);
        setListings([]);
      }
      setLoading(false);
    };
    fetchListings();
  }, []);

  return (
    <div className="bg-white text-[var(--deep-black)]">
      <Navigation />
      
      <main className="max-w-screen-2xl mx-auto px-6 sm:px-8 pb-24">
        <header className="pt-32 pb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 tracking-tight">Explore Stays & Experiences</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handpicked hotels, unique villas, and unforgettable experiences from around the world.
          </p>
        </header>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-gray-500">Loading inspiring destinations...</p>
          </div>
        ) : (
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
              {listings.map((listing, index) => (
                <ListingCard key={listing.id} listing={listing} avatars={creatorAvatars} index={index} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
