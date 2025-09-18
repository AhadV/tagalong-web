
import React from 'react';
import Navigation from '../components/Navigation';
import { logError } from '@/utils/errorHandler';
// Removed: import FeaturedGrid from '../components/FeaturedGrid'; // FeaturedGrid content is now inlined
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const featuredDestinations = [
  {
    gridTitle: 'BELMOND CARUSO',
    location: 'Amalfi Coast, Italy',
    images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/de/c9/de/belmond-hotel-caruso.jpg?w=1400&h=-1&s=1'],
    link: 'https://tinyurl.com/tagalongamalfi',
    review: 'Belmond Caruso exceeded every expectation from the moment we arrived. The property is stunning, with breathtaking views over Ravello, immaculate gardens, and an infinity pool that feels like it touches the sky.',
    reviewer: 'Nicholas',
    creatorCount: Math.floor(Math.random() * (98 - 20 + 1)) + 20,
  },
  {
    gridTitle: 'CONRAD MALDIVES',
    location: 'Rangali Island, Maldives',
    images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/8f/31/a9/main-island.jpg?w=2000&h=-1&s=1'],
    link: 'https://tinyurl.com/tagalongmaldives',
    review: 'We chose the Conrad Maldives Rangali Island to celebrate our anniversary, and it turned out to be the most unforgettable trip we\'ve ever taken. From the moment we arrived, everything felt magical.',
    reviewer: 'Becky',
    creatorCount: Math.floor(Math.random() * (98 - 20 + 1)) + 20,
  },
   {
    gridTitle: 'HOSHINOYA KARUIZAWA',
    location: 'Nagano, Japan',
    images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/1b/b4/d6/hoshinoya-karuizawa.jpg?w=2000&h=-1&s=1'],
    link: 'https://tinyurl.com/tagalongjapan',
    review: 'It is arranged around a vast waterfront garden. The room was sophisticated Japanese modern with a lush garden seen from the window. Dinner was delicate using local ingredients from Nagano, and all dishes were beautiful and delicious.',
    reviewer: 'Kouji',
    creatorCount: Math.floor(Math.random() * (98 - 20 + 1)) + 20,
  },
  {
    gridTitle: 'SIX SENSES',
    location: 'Ibiza, Spain',
    images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3d/7f/11/sea-scape-one-bedroom.jpg?w=1400&h=-1&s=1'],
    link: 'https://tinyurl.com/tagalongibiza',
    review: 'It\'s probably the best hotel in Ibiza - the facilities are superb, well taken care of and complete. The staff is very friendly and forthcoming. Breakfast is outstanding.',
    reviewer: 'Victorino',
    creatorCount: Math.floor(Math.random() * (98 - 20 + 1)) + 20,
  },
  {
    gridTitle: 'CASA CAMILLA',
    location: 'Padova, Italy',
    images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/35/7e/af/the-best-history-experts.jpg?w=1100&h=-1&s=1'],
    link: 'https://tinyurl.com/tagalongacasa',
    review: 'The room (suite) was huge, and very cozy. The hotel is run by Filipo and family and they made us feel right at home. They even have a dog (Daizy) that my children fell in love with.',
    reviewer: 'Christos',
    creatorCount: Math.floor(Math.random() * (98 - 20 + 1)) + 20,
  },
  {
    gridTitle: 'KONZELMANN WINERY',
    location: 'Niagara, Canada',
    images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/74/68/ab/exterior-of-konzelmann.jpg?w=800&h=-1&s=1'],
    link: 'https://tinyurl.com/tagalongicewine',
    review: 'Wanted to try a few dessert wines after our Junk Food pairing. Gabriela was so knowledgeable and explained the ice wine vs dessert wine. She also had some good recommendations in the area. Great experience!',
    reviewer: 'Shelly',
    creatorCount: Math.floor(Math.random() * (98 - 20 + 1)) + 20,
  },
  {
    gridTitle: 'TOKYO RECORD BAR',
    location: 'New York City, USA',
    images: ['https://i.imgur.com/S2OxiuH.png'],
    link: 'https://tinyurl.com/tagalongtokyo',
    review: 'What an experience! I went to Tokyo Record Bar for my birthday and we were greeted by Benny upstairs. The restaurant has such a cool vibe. Once seated, the concept was explained and the DJ Jess kept the vibe going.',
    reviewer: 'Hovig',
    creatorCount: Math.floor(Math.random() * (98 - 20 + 1)) + 20,
  },
  {
    gridTitle: 'LA CUISINE PARIS',
    location: 'Paris, France',
    images: ['https://i.imgur.com/bp73DTL.png'],
    link: 'https://lacuisineparis.com/paris-cooking-classes',
    review: 'From the moment we walked through the door, the staff at La Cuisine Paris were incredibly friendly and welcoming. We took the French Pâtisserie class with Chef Naima, who was a fantastic teacher.',
    reviewer: 'Liam',
    creatorCount: Math.floor(Math.random() * (98 - 20 + 1)) + 20,
  }
];

const creatorAvatars = [
  'https://images.pexels.com/photos/1334945/pexels-photo-1334945.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/1085517/pexels-photo-1085517.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/1310524/pexels-photo-1310524.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/3030332/pexels-photo-3030332.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/2499175/pexels-photo-2499175.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/728842/pexels-photo-728842.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/1853557/pexels-photo-1853557.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/3379282/pexels-photo-3379282.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/3377827/pexels-photo-3377827.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/4935595/pexels-photo-4935595.jpeg?w=100&h=100&fit=crop',
  'https://images.pexels.com/photos/7235552/pexels-photo-7235552.jpeg?w=100&h=100&fit=crop'
];

const column1 = [
  'https://i.imgur.com/9qXov5l.jpeg',
  'https://i.imgur.com/3e6p7VR.jpeg',
  'https://i.imgur.com/ZvKJZhd.jpeg',
  'https://i.imgur.com/yJDlVAP.jpeg',
];
const column2 = [
  'https://i.imgur.com/GwWWlNd.jpeg',
  'https://i.imgur.com/Huihd4F.jpeg',
  'https://i.imgur.com/Sn6p4mA.jpeg',
  'https://i.imgur.com/f6AqpHn.jpeg',
];
const column3 = [
  'https://i.imgur.com/qJa7mxZ.jpeg',
  'https://i.imgur.com/5OBOcoE.jpeg',
  'https://i.imgur.com/YGH5MMk.jpeg',
  'https://i.imgur.com/bYFTnqa.jpeg',
];
const column4 = [
  'https://i.imgur.com/MtEBqgp.jpeg',
  'https://i.imgur.com/FQCOYXV.jpeg',
  'https://i.imgur.com/qJa7mxZ.jpeg',
  'https://i.imgur.com/GwWWlNd.jpeg',
];

const categories = [
    { title: 'Hotels', video: 'https://player.vimeo.com/video/1119178474?background=1&autoplay=1&loop=1&muted=1', description: 'Luxury stays and boutique hotels', isHorizontal: true },
    { title: 'Food & Wine', video: 'https://player.vimeo.com/video/1119178657?background=1&autoplay=1&loop=1&muted=1', description: 'Culinary journeys and tastings', isHorizontal: false },
    { title: 'Adventure', video: 'https://player.vimeo.com/video/1119178701?background=1&autoplay=1&loop=1&muted=1', description: 'Thrilling outdoor activities', isHorizontal: true },
    { title: 'Stays', video: 'https://player.vimeo.com/video/1119178676?background=1&autoplay=1&loop=1&muted=1', description: 'Unique villas and vacation rentals', isHorizontal: true },
    { title: 'Experiences', video: 'https://player.vimeo.com/video/1119178637?background=1&autoplay=1&loop=1&muted=1', description: 'Once-in-a-lifetime memories', isHorizontal: false },
    { title: 'Beaches', video: 'https://player.vimeo.com/video/1119178625?background=1&autoplay=1&loop=1&muted=1', description: 'Paradise coastal destinations', isHorizontal: true },
    { title: 'Cities', video: 'https://player.vimeo.com/video/1119178612?background=1&autoplay=1&loop=1&muted=1', description: 'Urban exploration and culture', isHorizontal: true },
    { title: 'Wellness', video: 'https://player.vimeo.com/video/1119178602?background=1&autoplay=1&loop=1&muted=1', description: 'Rejuvenating spa retreats', isHorizontal: true }
];

const GridTile = ({ gridTitle, location, images, link, creatorCount, avatars, index }) => {
  // Select 3 unique avatars based on the index to ensure variety and avoid repetition
  const selectedAvatars = React.useMemo(() => {
    if (!avatars || avatars.length === 0) return [];
    const selected = [];
    const startIndex = (index * 2) % avatars.length; // Use *2 to reduce repetition
    for (let i = 0; i < 3; i++) {
      const avatarIndex = (startIndex + i) % avatars.length;
      selected.push(avatars[avatarIndex]);
    }
    return selected;
  }, [avatars, index]);

  return (
    <Link to={link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="relative overflow-hidden aspect-[3/4] shadow-lg mb-2">
        <img src={images[0]} alt={gridTitle} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-serif font-bold leading-tight mb-1">{gridTitle}</h3>
          <p className="text-sm font-sans font-medium">{location}</p>
        </div>
      </div>
      <div className="flex items-center -space-x-2 overflow-hidden px-1 mt-2">
        {selectedAvatars.map((avatar, i) => (
          <img 
            key={`${index}-${i}`} 
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" 
            src={avatar} 
            alt={`Creator ${i+1}`}
            onError={(e) => {
              logError('Avatar failed to load', null, { avatar });
              e.target.style.display = 'none'; // Hide broken images
            }}
          />
        ))}
        <span className="flex items-center justify-center h-8 w-8 bg-white text-black text-xs font-semibold ring-2 ring-white ml-2 rounded-full">
          +{creatorCount}
        </span>
      </div>
    </Link>
  );
};


export default function Home() {
  return (
    <div className="bg-[var(--pure-white)]">
      <Navigation />
      <Hero />

      {/* Inlined FeaturedGrid content */}
      <section className="py-12 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <header className="mb-8 grid grid-cols-1 md:grid-cols-3 items-start gap-8">
            <div className="md:col-span-2">
              <p className="text-sm font-semibold tracking-wide uppercase text-black/60 mb-3 font-sans">Curated for you</p>
              <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tighter text-black">Featured Destinations</h2>
            </div>
          </header>
          {/* Spacing tightened from mb-16 to mb-12 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-6 mb-8">
            {featuredDestinations.slice(0, 4).map((item, index) => (
              <GridTile
                key={index}
                {...item}
                avatars={creatorAvatars}
                index={index} // Pass index for avatar selection
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-6">
              {featuredDestinations.slice(4).map((item, index) => (
                <GridTile
                  key={index + 4}
                  {...item}
                  avatars={creatorAvatars}
                  index={index + 4} // Pass index for avatar selection
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] bg-black text-white my-16 md:my-20">
        <img
          src="https://i.imgur.com/EgZzuSh.jpeg"
          alt="Handpicked travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold max-w-4xl leading-tight">
            Discover travel destinations from your favorite creators.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to={createPageUrl('Explore')}>
              <button className="border-2 border-white text-white px-8 py-3 font-sans font-semibold hover:bg-white hover:text-black transition-colors">
                Explore Now
              </button>
            </Link>
            <Link to={createPageUrl('CreatorApplication')}>
              <button className="border-2 border-white/80 text-white/90 px-8 py-3 font-sans font-semibold hover:bg-white hover:text-black transition-colors">
                Join as Creator
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SWAPPED SECTION 1: Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-4 font-sans">
              Browse By
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black mb-6 leading-tight font-serif">
              Categories
            </h2>
            <p className="text-lg font-medium text-black/70 max-w-2xl mx-auto leading-relaxed font-sans">
              Discover your perfect travel style and find experiences tailored to your passions
            </p>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group relative block overflow-hidden bg-black aspect-[9/16] cursor-default"
                >
                  <iframe
                    src={category.video}
                    title={category.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className={`
                      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      transition-transform duration-700 ease-out
                      ${category.isHorizontal
                        ? 'h-full w-auto'
                        : 'w-full h-auto min-h-full min-w-full'
                      }
                    `}
                    style={category.isHorizontal ? { width: '332%' } : {}}
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white text-xl md:text-2xl font-bold font-serif tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SWAPPED SECTION 2: A World of Experiences */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10"/>
        <div className="relative z-20 max-w-4xl mx-auto px-6 mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-4 font-sans">
              Travel Experiences
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-black mb-6 leading-tight">
              A World of Experiences
            </h2>
            <p className="text-lg font-medium text-black/70 max-w-2xl mx-auto leading-relaxed">
              From spontaneous bites to once-in-a-lifetime stays, find what inspires your next journey.
            </p>
        </div>

        <div className="relative flex gap-4 px-4" style={{ height: '150vh' }}>
          <div className="w-1/4 space-y-4 animate-scroll-up">
            {[...column1, ...column1].map((src, index) => (
              <div key={`col1-${index}`} className="h-auto w-full overflow-hidden shadow-lg">
                <img src={src} className="w-full h-full object-cover aspect-[3/4]" alt={`Experience ${index+1}`} />
              </div>
            ))}
          </div>
          <div className="w-1/4 space-y-4 animate-scroll-down">
            {[...column2, ...column2].map((src, index) => (
              <div key={`col2-${index}`} className="h-auto w-full overflow-hidden shadow-lg">
                <img src={src} className="w-full h-full object-cover aspect-[3/4]" alt={`Experience ${index+5}`} />
              </div>
            ))}
          </div>
          <div className="w-1/4 space-y-4 animate-scroll-up">
            {[...column3, ...column3].map((src, index) => (
              <div key={`col3-${index}`} className="h-auto w-full overflow-hidden shadow-lg">
                <img src={src} className="w-full h-full object-cover aspect-[3/4]" alt={`Experience ${index+9}`} />
              </div>
            ))}
          </div>
          <div className="w-1/4 space-y-4 animate-scroll-down">
            {[...column4, ...column4].map((src, index) => (
              <div key={`col4-${index}`} className="h-auto w-full overflow-hidden shadow-lg">
                <img src={src} className="w-full h-full object-cover aspect-[3/4]" alt={`Experience ${index+13}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </section>

      {/* New Video Text Fill Section - Simplified */}
      <section className="relative h-[80vh] bg-black text-white overflow-hidden">
        <img
          src="https://i.imgur.com/qxaAhRF.jpeg"
          alt="Premium travel"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <div className="relative w-full max-w-6xl mx-auto mb-12">
            {/* Simple white text */}
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-tight text-white">
              Book hotels, stays, and experiences with us.
            </h2>
          </div>

          {/* Regular button now properly linked */}
          <Link to={createPageUrl('Explore')}>
            <button className="border-2 border-white text-white px-12 py-6 font-sans font-semibold hover:bg-white hover:text-black transition-colors text-xl">
              Discover Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
