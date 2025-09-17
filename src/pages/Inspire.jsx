import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Mouse, ArrowDown } from 'lucide-react';

const videos = [
  '1119178474', '1119178602', '1119178612', '1119178625',
  '1119178637', '1119178657', '1119178676', '1119178701',
  '1119188746', '1119262167', '1119262177', '1119262187',
  '1119262196', '1119262200', '1119262208'
];

const IntroSlide = () => (
  <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center text-center p-8 bg-gray-100">
    <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 tracking-tighter mb-4">
      Visual Journeys
    </h1>
    <p className="text-xl text-gray-600 font-sans tracking-wide mb-12">
      A collection of moments from around the world.
    </p>
    <motion.div 
      className="flex flex-col items-center space-y-4 text-gray-500"
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Mouse className="w-6 h-6" />
      <span className="font-sans text-sm uppercase tracking-widest">Scroll to Explore</span>
      <ArrowDown className="w-6 h-6" />
    </motion.div>
  </div>
);

const VideoSlide = ({ videoId }) => (
  <div className="w-screen h-screen flex-shrink-0 relative bg-black">
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1`}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      loading="lazy"
      className="w-full h-full object-cover"
    ></iframe>
  </div>
);

export default function InspirePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white fixed inset-0">
      <Navigation />
      
      <div 
        ref={containerRef} 
        className="w-full h-full overflow-y-auto overflow-x-hidden"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        <div style={{ scrollSnapAlign: 'start' }}><IntroSlide /></div>
        {videos.map(videoId => (
          <div key={videoId} style={{ scrollSnapAlign: 'start' }}>
            <VideoSlide videoId={videoId} />
          </div>
        ))}
      </div>
      
      <motion.div 
        className="fixed top-0 left-0 bottom-0 w-1.5 bg-black origin-top" 
        style={{ scaleY, zIndex: 100 }} 
      />
    </div>
  );
}