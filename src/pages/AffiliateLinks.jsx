import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQItem from '../components/creators/FAQItem';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { DollarSign, Globe, BarChart2, Zap, ShieldCheck, TrendingUp, Users, Star, Calendar, MapPin, Heart } from 'lucide-react';

const travelPhotos = [
  'https://dynamic-media.tacdn.com/media/photo-o/2e/fb/97/f1/caption.jpg?w=1400&h=1000&s=1',
  'https://dynamic-media.tacdn.com/media/photo-o/2f/31/a0/ec/caption.jpg?w=1400&h=1000&s=1',
  'https://dynamic-media.tacdn.com/media/photo-o/2e/eb/a3/9c/caption.jpg?w=1400&h=1000&s=1',
  'https://dynamic-media.tacdn.com/media/photo-o/2f/18/8d/9b/caption.jpg?w=1400&h=1000&s=1',
  'https://dynamic-media.tacdn.com/media/photo-o/2f/0e/b0/96/caption.jpg?w=1400&h=1000&s=1',
  'https://dynamic-media.tacdn.com/media/photo-o/2e/c9/85/e6/caption.jpg?w=1400&h=1000&s=1',
  'https://dynamic-media.tacdn.com/media/photo-o/2e/ae/d3/a6/caption.jpg?w=1400&h=1000&s=1',
  'https://dynamic-media.tacdn.com/media/photo-o/2e/ae/c2/d7/caption.jpg?w=1400&h=1000&s=1',
];

const benefits = [
    {
        icon: TrendingUp,
        title: 'Industry-Leading Commissions',
        description: 'We negotiate competitive rates with top travel partners, ensuring you maximize your earnings from every single booking.'
    },
    {
        icon: Globe,
        title: 'Smart Global Links',
        description: 'Our links automatically adapt to your audience\'s location and language, providing a seamless booking experience that converts better.'
    },
    {
        icon: BarChart2,
        title: 'Transparent Analytics',
        description: 'Your creator dashboard offers real-time insights into clicks, conversions, and earnings, helping you understand what your audience loves.'
    },
    {
        icon: Zap,
        title: 'Seamless Payouts',
        description: 'No more chasing invoices. We consolidate all your earnings from our partners and send you one simple, automated payment.'
    },
];

const howItWorksSteps = [
    {
        step: '01',
        title: 'Add Your Travel Experiences',
        description: 'Browse our partner network and add hotels, restaurants, tours, and experiences you\'ve personally tried and loved.',
        icon: MapPin,
    },
    {
        step: '02', 
        title: 'Get Your Unique Links',
        description: 'Each recommendation automatically generates a trackable affiliate link that\'s tied to your creator account.',
        icon: Globe,
    },
    {
        step: '03',
        title: 'Share With Your Audience',
        description: 'Post your TagAlong page link on social media, in your bio, newsletters, or anywhere your audience discovers content.',
        icon: Heart,
    },
    {
        step: '04',
        title: 'Earn Commissions',
        description: 'When someone books through your links, you earn a commission. Track everything in your creator dashboard.',
        icon: DollarSign,
    },
];

const commissionRates = [
    { category: 'Hotels & Resorts', rate: '8-15%', partners: 'Booking.com, Expedia, Hotels.com' },
    { category: 'Vacation Rentals', rate: '10-12%', partners: 'Airbnb, VRBO, HomeAway' },
    { category: 'Tours & Experiences', rate: '15-25%', partners: 'Viator, GetYourGuide, Klook' },
    { category: 'Restaurants', rate: '12-20%', partners: 'OpenTable, Resy, Yelp Reservations' },
    { category: 'Spa & Wellness', rate: '18-25%', partners: 'Spafinder, Mindbody, Treatwell' },
    { category: 'Transportation', rate: '5-10%', partners: 'Uber, Lyft, Rental Cars' },
];

const faqs = [
  {
    question: 'How do the affiliate links actually work?',
    answer: 'When you add a hotel or experience to your TagAlong page, we automatically generate a unique affiliate link for it. When a follower clicks that link and makes a booking, the travel partner\'s system recognizes the referral came from you, and we credit the commission to your account.',
  },
  {
    question: 'How much can I earn?',
    answer: 'Commission rates vary by partner, country, and the type of booking (e.g., hotel vs. experience). We are always transparent about rates, which you can see in your creator dashboard. Our goal is to always secure the most competitive rates for you.',
  },
  {
    question: 'How do I get paid?',
    answer: 'TagAlong consolidates all your earned commissions from our various travel partners into a single balance. We process payouts on a regular schedule directly to your connected bank account, simplifying the entire process for you.',
  },
  {
    question: 'What if a booking isn\'t tracked correctly?',
    answer: 'If a partner fails to track a booking, unfortunately, TagAlong can\'t cover those losses — but we work closely with affiliates to ensure accuracy and resolve any issues that arise.',
  },
  {
    question: 'Can I see which bookings came from my recommendations?',
    answer: 'Absolutely. Your creator dashboard shows detailed analytics including clicks, conversions, booking values, and commission earnings for each recommendation.',
  },
  {
    question: 'Do I need a certain number of followers to join?',
    answer: 'While we don\'t have a strict minimum follower count, we look for creators who actively share travel content and have an engaged audience interested in travel recommendations.',
  },
  {
    question: 'How long do affiliate cookies last?',
    answer: 'Cookie duration varies by partner but typically ranges from 24 hours to 30 days. This means if someone clicks your link and books within that timeframe, you\'ll earn the commission.',
  },
  {
    question: 'Can I promote my TagAlong page on multiple platforms?',
    answer: 'Yes! Share your TagAlong page link across all your social media platforms, in your email newsletter, blog posts, and anywhere else your audience might discover it.',
  },
];

export default function AffiliateLinksPage() {
  return (
    <div className="bg-white text-black">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight mb-6">Drive Affiliate Revenue</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-sans">
              Level up your affiliate strategy with TagAlong — turn your authentic travel recommendations into a powerful, scalable income stream.
            </p>
          </div>
        </section>

        {/* Animated Photo Strip */}
        <div className="relative h-[400px] overflow-hidden mb-24">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -rotate-12 scale-125">
                <div className="flex gap-4 animate-scroll-up" style={{ animationDuration: '60s', animationDirection: 'reverse' }}>
                    {[...travelPhotos, ...travelPhotos].map((photo, i) => (
                        <div key={`photo-${i}`} className="w-64 h-40 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                            <img src={photo} alt={`Travel destination ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Core Value Prop Section */}
        <section className="py-24 bg-gray-50/70">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                    <ShieldCheck className="w-8 h-8 text-emerald-600"/>
                </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
              Same Price for Travelers. Real Support for Creators.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto font-sans">
              This is the most important part: booking through a TagAlong link costs your audience the <span className="font-bold">exact same amount</span> as booking directly with the hotel or tour provider. The price doesn't change. The only difference is that our partners pay us a commission for the referral, which we share with you. It's a true win-win that allows your followers to support your work at no extra cost to them.
            </p>
          </div>
        </section>

        {/* How It Works - Detailed */}
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-serif font-bold tracking-tight mb-4">How TagAlong Affiliate Links Work</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
                        Our affiliate system is designed to be transparent, reliable, and profitable for creators at every level.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {howItWorksSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                                    <step.icon className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div className="text-3xl font-serif font-bold text-gray-300 text-center">{step.step}</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-600 font-sans leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Commission Rates Table */}
        <section className="py-24 bg-gray-50/70">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4">Commission Rates by Category</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
                        We negotiate the best possible rates with our partners to maximize your earnings potential across all travel categories.
                    </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left py-4 px-6 font-serif font-bold text-lg">Category</th>
                                    <th className="text-left py-4 px-6 font-serif font-bold text-lg">Commission Rate</th>
                                    <th className="text-left py-4 px-6 font-serif font-bold text-lg">Partner Examples</th>
                                </tr>
                            </thead>
                            <tbody>
                                {commissionRates.map((rate, index) => (
                                    <tr key={index} className="border-t border-gray-100">
                                        <td className="py-4 px-6 font-semibold font-sans">{rate.category}</td>
                                        <td className="py-4 px-6 font-bold text-emerald-600 font-serif text-lg">{rate.rate}</td>
                                        <td className="py-4 px-6 text-gray-600 font-sans">{rate.partners}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-serif font-bold tracking-tight mb-4">Powerful Tools, Simple Process</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-sans">We handle the complexity so you can focus on creating.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg mt-1">
                                <benefit.icon className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-bold">{benefit.title}</h3>
                                <p className="text-gray-600 mt-2 font-sans">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Success Metrics */}
        <section className="py-24 bg-gray-50/70">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4">Real Results from Real Creators</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
                        See how TagAlong creators are monetizing their travel content and building sustainable income streams.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                        <div className="text-4xl font-serif font-bold text-indigo-600 mb-2">$2,500</div>
                        <div className="text-gray-600 font-sans">Average monthly earnings for active creators</div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                        <div className="text-4xl font-serif font-bold text-emerald-600 mb-2">15%</div>
                        <div className="text-gray-600 font-sans">Average conversion rate on TagAlong links</div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                        <div className="text-4xl font-serif font-bold text-purple-600 mb-2">30 days</div>
                        <div className="text-gray-600 font-sans">Time to receive your first payout</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Optimization Tips */}
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4">Maximize Your Affiliate Earnings</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
                        Follow these proven strategies to increase your click-through rates and conversion rates.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-serif font-bold mb-4 text-indigo-900">Share Personal Stories</h3>
                        <p className="text-gray-700 font-sans">Don't just recommend a hotel — tell the story of why you loved it. Share specific moments, favorite amenities, or unexpected discoveries that made your stay special.</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-serif font-bold mb-4 text-emerald-900">Use High-Quality Visuals</h3>
                        <p className="text-gray-700 font-sans">Include your own photos and videos from your experiences. Authentic content performs better than stock imagery and builds trust with your audience.</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-serif font-bold mb-4 text-purple-900">Time Your Posts Strategically</h3>
                        <p className="text-gray-700 font-sans">Share travel content when people are planning trips — typically Sunday evenings, Tuesday mornings, and during lunch breaks on weekdays.</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-serif font-bold mb-4 text-amber-900">Create Travel Guides</h3>
                        <p className="text-gray-700 font-sans">Bundle multiple recommendations into comprehensive guides for specific destinations. This increases the likelihood of multiple bookings from a single post.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Brand Partners */}
        <section className="py-20 bg-gray-50/70">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Powered by the Best in Travel</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-sans">
                    We partner with the platforms your audience already trusts, ensuring a smooth and reliable booking experience.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    <div className="text-2xl font-serif font-semibold text-gray-400">Expedia</div>
                    <div className="text-2xl font-serif font-semibold text-gray-400">Booking.com</div>
                    <div className="text-2xl font-serif font-semibold text-gray-400">Viator</div>
                    <div className="text-2xl font-serif font-semibold text-gray-400">VRBO</div>
                    <div className="text-2xl font-serif font-semibold text-gray-400">GetYourGuide</div>
                    <div className="text-2xl font-serif font-semibold text-gray-400">Airbnb</div>
                    <div className="text-2xl font-serif font-semibold text-gray-400">OpenTable</div>
                    <div className="text-2xl font-serif font-semibold text-gray-400">TripAdvisor</div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-serif font-bold text-center mb-4">Affiliate Questions, Answered</h2>
                <p className="text-center text-gray-600 mb-12 font-sans">
                    Here's how we make earning simple and transparent.
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
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Unlock Your Affiliate Revenue Potential</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-sans">
                    Ready to turn your travel content into a reliable income stream? Join our community of creators and start earning from the places you love.
                </p>
                <Link to={createPageUrl('CreatorApplication')}>
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-4 text-lg font-sans">
                        Apply to TagAlong
                    </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-4 font-sans">No upfront costs • Free to join • Start earning immediately</p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}