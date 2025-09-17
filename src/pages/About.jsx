import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';

const Section = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=80"
            alt="Misty mountains representing dreams and exploration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-sans text-sm uppercase tracking-widest text-white/80 mb-4"
          >
            About Us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight"
          >
            Built for dreamers, explorers, and storytellers.
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-24 md:py-32 font-sans text-lg text-gray-800 leading-relaxed">
        <div className="max-w-3xl mx-auto px-6 space-y-20">
          
          <Section>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Why TagAlong Exists</h2>
            <div className="border-l-4 border-gray-200 pl-8 py-4 space-y-6 italic text-gray-700">
              <p>My name is Bailey, and I built TagAlong for people like me.</p>
              <p>I’ve always been obsessed with travel—not just the places themselves, but the moments. The smell of a night market in Bangkok. The quiet hum of a sunrise hike. The laughter over a shared meal in a tucked-away café you’d never find on a travel site.</p>
              <p>But here’s the thing: when I wanted to plan my own trips, I wasn’t inspired by booking websites. I didn’t want stock photos or lists of “Top 10 Things to Do.” I wanted real stories, from real people.</p>
            </div>
            <p className="mt-8">So like so many of us do now, I turned to TikTok, Instagram, and YouTube. That’s where I found creators who felt like friends—people sharing their honest experiences and hidden gems. The ones whose recommendations I trusted more than any glossy travel ad.</p>
            <p className="mt-6">I built TagAlong because I wanted a place where that magic could live. A place where you can not only discover authentic travel recommendations, but also book them directly, effortlessly, and with confidence. A place where creators—the very people who inspire us—can earn a living by sharing the experiences that shaped them.</p>
          </Section>

          <Section className="py-12">
            <div className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=800&fit=crop&q=80" alt="Scenic lake and mountains" className="w-full h-full object-cover" />
            </div>
          </Section>

          <Section>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p>TagAlong isn’t just another travel platform. It’s a movement.</p>
            <p className="mt-6">We believe the future of travel is personal and human, not dictated by algorithms or generic guidebooks. Every destination, every tour, every recommendation on TagAlong comes from someone who’s actually been there, someone whose story adds depth to your journey.</p>
            <p className="mt-6">For the creators who share their experiences, this isn’t just about inspiration—it’s about sustainable income. Creators deserve to earn more than likes and follows. With TagAlong, every recommendation has the power to create memories for others and generate revenue for them.</p>
          </Section>
          
          <Section className="text-center py-16 bg-gray-50 rounded-2xl">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto leading-snug">
              Travel is more than a transaction. It’s connection, growth, and adventure.
            </h3>
            <p className="mt-6 max-w-xl mx-auto">It’s the ability to see the world not just through your own eyes, but through the lens of someone you admire.</p>
            <p className="mt-6 font-bold">When you TagAlong, you’re not just booking a trip. You’re stepping into someone else’s story while writing your own.</p>
          </Section>

          <Section>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p>We keep our focus simple: build the platform we always wished existed.</p>
            <ul className="mt-6 space-y-4 list-disc list-inside">
              <li>A place where creators can turn their journeys into careers.</li>
              <li>A place where travelers can trust that every recommendation comes from lived experience, not marketing spin.</li>
              <li>A place that celebrates the messy, beautiful, real side of exploration.</li>
            </ul>
            <p className="mt-6 font-bold text-xl">We’re not here to be the biggest or the loudest. We’re here to be the most authentic.</p>
            <p className="mt-6">This isn’t about us—it’s about you, and the unforgettable journeys we’ll take together.</p>
          </Section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join the Movement</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you’re a creator ready to share your world, or a traveler searching for your next adventure, TagAlong is here to bring your vision to life.
          </p>
          <Link to={createPageUrl('Explore')}>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-4 text-lg">
              Start Exploring
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}