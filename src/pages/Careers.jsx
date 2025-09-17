
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import JobApplicationModal from '../components/careers/JobApplicationModal';
import { Button } from '@/components/ui/button';
import { MapPin, Wifi, Zap, Compass } from 'lucide-react';

const jobCategories = [
  {
    name: 'Sales & Partnerships',
    jobs: [
      {
        title: 'Partnership Manager – Travel Affiliates',
        location: 'Remote – US',
        description: 'Build and grow relationships with travel brands, booking platforms, and experience providers.',
        department: 'Sales & Partnerships'
      },
      {
        title: 'Creator Partnerships Associate',
        location: 'Remote',
        description: 'Help onboard and support our growing network of creators around the globe.',
        department: 'Sales & Partnerships'
      },
      {
        title: 'Business Development Representative',
        location: 'Remote – US',
        description: 'Identify and nurture new partnership opportunities to expand TagAlong\'s reach.',
        department: 'Sales & Partnerships'
      }
    ]
  },
  {
    name: 'Creator Success & Support',
    jobs: [
      {
        title: 'Creator Experience Manager',
        location: 'Remote',
        description: 'Be the voice of our creators, ensuring they succeed and thrive on TagAlong.',
        department: 'Creator Success & Support'
      },
      {
        title: 'Client Strategy Manager – Travel Brands',
        location: 'Remote – US',
        description: 'Work directly with brands to design high-impact campaigns that drive bookings.',
        department: 'Creator Success & Support'
      },
      {
        title: 'Support Specialist – Creators & Travelers',
        location: 'Remote',
        description: 'Provide exceptional support to creators and travelers navigating the platform.',
        department: 'Creator Success & Support'
      }
    ]
  },
  {
    name: 'Marketing',
    jobs: [
      {
        title: 'Growth Marketing Manager',
        location: 'Remote',
        description: 'Drive user acquisition through strategic campaigns and creative storytelling.',
        department: 'Marketing'
      },
      {
        title: 'Content Marketing Specialist – Travel & Creator Economy',
        location: 'Remote',
        description: 'Craft inspiring content that showcases TagAlong\'s mission and empowers creators.',
        department: 'Marketing'
      },
      {
        title: 'Community Manager – Social Media',
        location: 'Remote',
        description: 'Build vibrant communities on TikTok, Instagram, and YouTube, connecting with creators and travelers.',
        department: 'Marketing'
      }
    ]
  },
  {
    name: 'Engineering & Product',
    jobs: [
      {
        title: 'Senior Full Stack Engineer',
        location: 'Remote – US',
        description: 'Help scale our platform, building tools that power creator monetization and traveler bookings.',
        department: 'Engineering & Product'
      },
      {
        title: 'Product Designer – Travel Discovery Experience',
        location: 'Remote',
        description: 'Design intuitive, beautiful interfaces that bring our vision of authentic travel to life.',
        department: 'Engineering & Product'
      },
      {
        title: 'Product Manager – Affiliate Tracking & Analytics',
        location: 'Remote',
        description: 'Lead product development for TagAlong\'s tracking systems and performance insights.',
        department: 'Engineering & Product'
      }
    ]
  }
];

const JobCard = ({ job }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
    <div className="flex-1">
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 leading-tight">{job.title}</h3>
      <div className="flex items-center text-sm text-gray-600 mb-3">
        <MapPin className="w-4 h-4 mr-1" />
        {job.location}
      </div>
      <p className="text-gray-700 leading-relaxed">{job.description}</p>
    </div>
  </div>
);

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight mb-6">
            Why Work at TagAlong
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            At TagAlong, we believe travel is more than destinations and bookings—it's about stories, connection, and memories. Our platform empowers creators to share the experiences they love, while giving travelers a way to book directly through trusted recommendations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We're a fully-remote, flexible team of dreamers, builders, and storytellers. We value creativity, problem-solving, and bold ideas. Together, we're shaping the future of travel, one journey at a time.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Fully Remote</h3>
              <p className="text-gray-600">Work from anywhere in the world. We believe great work happens when you're comfortable.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Flexible Hours</h3>
              <p className="text-gray-600">We prioritize results over hours. Find your rhythm and do your best work.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Travel Perks</h3>
              <p className="text-gray-600">Experience the world through TagAlong with travel stipends and creator partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Video Section */}
      <section className="w-full h-[70vh] bg-black">
        <iframe
          src="https://player.vimeo.com/video/1119270923?background=1&autoplay=1&loop=1&muted=1"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-gray-900 text-center mb-16">Open Positions</h2>
          
          <div className="space-y-16">
            {jobCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                  {category.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.jobs.map((job, jobIndex) => (
                    <JobCard key={jobIndex} job={job} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button 
              onClick={openModal}
              className="bg-black text-white hover:bg-gray-800 rounded-full py-4 px-12 text-lg font-semibold"
            >
              Apply Now
            </Button>
            <p className="text-sm text-gray-500 mt-4">Don't see the right fit? We're always looking for talented people.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold mb-6">Work With Purpose</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Every role at TagAlong contributes to something bigger: helping people see the world through the eyes of those they trust most.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mt-4">
            If you're passionate about travel, technology, and empowering creators, we'd love to meet you.
          </p>
        </div>
      </section>

      <Footer />

      {/* Job Application Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        jobCategories={jobCategories}
      />
    </div>
  );
}
