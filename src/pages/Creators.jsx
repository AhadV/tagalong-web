
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQItem from '../components/creators/FAQItem';
import { Button } from '@/components/ui/button';
import { MapPin, Share2, DollarSign, Star, Users, TrendingUp, Zap, Globe } from 'lucide-react';
import { createPageUrl } from '@/utils';

const creators = [
  {
    name: 'Emma Rodriguez',
    specialty: 'Travel Blogger',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'James Chen',
    specialty: 'Adventure Vlogger',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Sofia Martinez',
    specialty: 'Luxury Travel',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Michael Thompson',
    specialty: 'Food & Culture',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Isabella Kumar',
    specialty: 'Solo Travel',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'David Park',
    specialty: 'Digital Nomad',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Zara Ahmed',
    specialty: 'Wellness Travel',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Lucas Brennan',
    specialty: 'Adventure Travel',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Aria Patel',
    specialty: 'Cultural Explorer',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Marcus Johnson',
    specialty: 'Photography Travel',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Nina Volkov',
    specialty: 'Eco Travel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Carlos Rivera',
    specialty: 'Food & Wine',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Amelia Foster',
    specialty: 'Luxury Escapes',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Kai Nakamura',
    specialty: 'Urban Explorer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Lily Harrison',
    specialty: 'Beach & Islands',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Diego Santos',
    specialty: 'Backpacker Guide',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&q=80',
  },
  {
    name: 'Grace Kim',
    specialty: 'Boutique Hotels',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&q=80',
  },
];

const faqs = [
  {
    question: 'Why do I need to apply?',
    answer: 'TagAlong maintains a high-quality network of creators. Applications help us ensure a perfect fit for you and your audience, leading to better partnerships and more authentic recommendations.',
  },
  {
    question: 'When do I get paid?',
    answer: 'Payouts are sent within 30 days after we receive affiliate payment from our travel partners. You can track all your earnings and payment statuses in your creator dashboard.',
  },
  {
    question: 'What if a booking isn\'t tracked correctly?',
    answer: 'If a partner fails to track a booking, unfortunately, TagAlong can\'t cover those losses — but we work closely with affiliates to ensure accuracy and resolve any issues that arise.',
  },
  {
    question: 'What if my audience books directly with the provider?',
    answer: 'Only bookings made through your unique TagAlong links are eligible for commissions. This is why it\'s important to guide your audience to book through your TagAlong page.',
  },
];

export default function CreatorsPage() {
  return (
    <div className="bg-white text-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop&q=80"
            alt="Travel creator background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight mb-6">
            Your adventures, made bookable.
          </h1>
          <p className="text-lg md:text-xl font-sans max-w-2xl mx-auto mb-8">
            Turn your travel passion into effortless income.
          </p>
          {/* Apply Now button now links to the application page */}
          <Link to={createPageUrl('CreatorApplication')}>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-10 py-4 font-semibold">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Three Core Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Curate. Share. Earn.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Transform your travel experiences into a sustainable income stream by sharing the places you love with your audience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Curate your travel experiences</h3>
              <p className="text-gray-600">Add the hotels, villas, restaurants, and activities you've personally experienced and loved.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Share with your audience</h3>
              <p className="text-gray-600">Your personal TagAlong page showcases all your recommendations in one beautiful, bookable destination.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Earn commissions</h3>
              <p className="text-gray-600">Get paid every time someone books a stay or experience from your TagAlong page — it's that simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Trusted by world-class travel brands.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We partner with leading booking platforms and experience providers so your audience can seamlessly book the adventures you love.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-2xl font-serif font-semibold text-gray-400">Expedia</div>
            <div className="text-2xl font-serif font-semibold text-gray-400">Booking.com</div>
            <div className="text-2xl font-serif font-semibold text-gray-400">Viator</div>
            <div className="text-2xl font-serif font-semibold text-gray-400">TrovaTrip</div>
            <div className="text-2xl font-serif font-semibold text-gray-400">Airbnb</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Turn your trips into bookings in three easy steps.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start earning from your travel recommendations with our simple, three-step process.
            </p>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">1</div>
                  <h3 className="text-3xl font-serif font-bold">Create Your Travel Shop</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Add your favorite destinations, hotels, restaurants, and activities. Only include places you've personally stayed at or experiences you've actually done — authenticity is key.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    Hotels & Villas
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-1 text-blue-500" />
                    Tours & Experiences
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-green-500" />
                    Restaurants & Cafes
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <p className="text-indigo-800 font-semibold">Add Your Experiences</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">2</div>
                  <h3 className="text-3xl font-serif font-bold">Share With Your Audience</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Use custom links in bios, posts, and stories to drive bookings. Your TagAlong page becomes your personal travel recommendation hub that your audience can easily browse and book from.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Share2 className="w-4 h-4 mr-1 text-blue-500" />
                    Social Media
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-purple-500" />
                    Email Lists
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                    Blog Posts
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <Share2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <p className="text-emerald-800 font-semibold">Share Your Page</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">3</div>
                  <h3 className="text-3xl font-serif font-bold">Earn Commissions</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Get paid for every confirmed booking — payouts arrive within 30 days of affiliate payment. Track your earnings and see which recommendations your audience loves most.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1 text-green-500" />
                    Commission Tracking
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1 text-blue-500" />
                    Analytics Dashboard
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-purple-500" />
                    Fast Payouts
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <DollarSign className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                    <p className="text-amber-800 font-semibold">Earn Money</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">All-in-one tools to grow your creator business.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Whether you're on the go or at home, TagAlong makes it simple to share travel recommendations and earn commissions — wherever you create.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Web App</h3>
              <p className="text-gray-600">Manage your shop from any device</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Mobile-Ready</h3>
              <p className="text-gray-600">Share links on the fly</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Creator Dashboard</h3>
              <p className="text-gray-600">Track earnings and clicks in real time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creators Community */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Creators thriving with TagAlong</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a growing community of travel influencers, bloggers, and storytellers earning from the journeys they share.
            </p>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {creators.map((creator, index) => (
              <div key={index} className="flex-shrink-0 w-48">
                <div className="relative">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-48 h-48 object-cover rounded-2xl mb-4"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded text-sm">
                    <p className="font-semibold text-xs">CURATED BY {creator.name.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl text-gray-300 mb-4">"</div>
          <blockquote className="text-xl md:text-2xl font-serif text-gray-800 mb-8 leading-relaxed">
            "TagAlong turned my passion for exploring into a real income stream. It's incredibly easy to add places I've stayed and loved, and my followers appreciate having everything in one place to book from."
          </blockquote>
          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&q=80" 
              alt="Mia"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-semibold">Mia</p>
              <p className="text-gray-600 text-sm">Travel Blogger</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Questions? We've got answers.</h2>
          <p className="text-center text-gray-600 mb-12">
            If you have additional questions, our creator onboarding team can help.
          </p>
          
          <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Monetize your influence. Inspire more adventures.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to turn your travel passion into income? Join TagAlong and start earning from the places you love.
          </p>
          {/* Join TagAlong Today button now links to the application page */}
          <Link to={createPageUrl('CreatorApplication')}>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-4 text-lg">
              Join TagAlong Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
