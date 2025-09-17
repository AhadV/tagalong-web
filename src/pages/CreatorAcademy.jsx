
import React, { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ContentModule from '../components/academy/ContentModule';

const academyContent = [
  {
    title: 'Getting Started with TagAlong',
    children: [
      {
        subtitle: 'Why TagAlong Exists',
        points: [
          'TagAlong is a platform built for travel creators, giving you a place to share the experiences and destinations you love—while earning income when your audience books through you.',
          'On TagAlong, you can:',
          '- Turn recommendations into bookings with trackable affiliate links.',
          '- Curate collections of your favorite trips, hotels, tours, and activities.',
          '- Earn commissions when followers book through your unique links.',
          '- Build partnerships with travel brands looking to collaborate with authentic creators.',
          'Our mission is to make it seamless for creators to inspire travel and earn a living by doing what they love.',
        ],
      },
    ],
  },
  {
    title: 'Joining TagAlong',
    children: [
      {
        subtitle: 'Why Apply as a Creator',
        points: [
          'Here’s why you should join TagAlong:',
          '- Share your authentic travel recommendations with a global audience.',
          '- Earn from every booking you inspire.',
          '- Connect with travel brands and tourism partners for sponsorships and collabs.',
          '- Gain access to tools that simplify tracking, payments, and content performance.',
        ],
      },
      {
        subtitle: 'How to Apply',
        points: [
          'Submit an Application: Applications are reviewed within 3–5 business days.',
          'Minimum suggested following: 1,000 followers, but we consider all applications.',
        ]
      },
      {
        subtitle: 'Waitlist Considerations',
        points: [
            'We look for creators who actively share travel content and have an engaged audience.',
            'All niches are welcome—from solo backpackers to family vloggers.',
        ]
      },
      {
        subtitle: 'If You’re Accepted',
        points: [
            'You’ll receive an invitation code via email to set up your profile.',
            'Start building collections and linking experiences right away.',
        ]
      },
      {
        subtitle: 'If You’re Not Accepted',
        points: [
            'You can reapply after 90 days.',
        ]
      },
      {
        subtitle: 'Global Creators Welcome',
        points: [
          'TagAlong is built for a worldwide audience.',
          'Our system detects your follower’s location and redirects them to region-specific booking partners, so you can earn no matter where they’re based.',
        ],
      },
    ],
  },
  {
    title: 'Setting Up Your Creator Profile',
    children: [
      {
        subtitle: 'Your profile is your personal travel hub.',
        points: [
          'Upload a Profile Photo – A clean, inspiring image works best.',
          'Write a Bio – Share who you are and why you travel.',
          'Connect Your Socials – Instagram, TikTok, and YouTube integrations make it easier to share.',
        ],
      },
    ],
  },
  {
    title: 'Earning Commission',
    children: [
      {
        subtitle: 'How It Works',
        points: [
          'When someone clicks on your TagAlong link and books an experience, you earn a commission.',
          'Each partner has a cookie window (commonly 30 days).',
          'If your link is the last clicked before booking, you get credit for the sale.',
          'Earnings are tracked and displayed in your dashboard in real-time.',
        ],
      },
      {
        subtitle: 'Commission Structure',
        points: [
          'Commission rates vary by travel partner (e.g., hotels vs. tours).',
          'TagAlong keeps a small percentage to maintain the platform.',
          'Your displayed rate is exactly what you’ll earn—no hidden fees.',
        ],
      },
      {
        subtitle: 'Why You May Miss a Commission',
        points: [
          'Traveler clicked another creator’s link before booking.',
          'They switched devices during checkout.',
          'Used an untracked coupon or promo code.',
          'Booked inside a third-party app instead of the website.',
          'Tip: Encourage followers to book directly through your link, in their browser, without switching devices.',
        ],
      },
    ],
  },
  {
    title: 'Creating & Sharing Links',
    children: [
      {
        subtitle: 'Collections',
        points: [
          'Collections are curated groups of travel experiences you recommend.',
          'Examples: "My Italy Itinerary", "Family-Friendly Adventures", "Luxury Beach Stays".',
          'How to create one:',
          '- Go to My Shop → “+ Collection.”',
          '- Add trips, hotels, or tours from our catalog or via Add by URL.',
          '- Name and describe your collection for context.',
          '- Share it with your audience.',
        ],
      },
      {
        subtitle: 'Quick Links',
        points: [
          'When you just want to highlight one specific experience, use Quick Links.',
          'Example: “Book the exact hot air balloon ride I did in Cappadocia – [link]”',
        ],
      },
      {
        subtitle: 'Embedding TagAlong Links',
        points: [
          'Add your main profile link to your Link-in-Bio.',
          'Embed collections on your website or blog using our copy-and-paste iframe code.',
          'Share links in YouTube descriptions, Instagram stories, or TikTok pinned videos.',
        ],
      },
    ],
  },
  {
    title: 'Working with Travel Brands',
    children: [
        {
            subtitle: 'TagAlong connects creators and travel companies for partnerships:',
            points: [
                'Affiliate-Only Partners: You earn commission on bookings you drive.',
                'Full Brand Partners: May offer gifted stays, free tours, or flat-fee campaigns.',
                'Pro Tip: As you grow, TagAlong will unlock more brand partnership opportunities in your dashboard.',
            ]
        }
    ]
  },
  {
    title: 'Payment & Payouts',
    children: [
      {
        subtitle: '',
        points: [
          'Commissions are marked as Pending until the booking is completed and verified.',
          'Once verified, they move to Locked status and are included in your next payout.',
          'Weekly payouts are sent via PayPal or Stripe.',
          'Minimum payout threshold: $17.',
        ],
      },
    ],
  },
  {
    title: 'Best Practices for Success',
    children: [
      {
        subtitle: 'Maximize Earnings',
        points: [
          'Create evergreen content: "My Top 5 Summer Destinations", "Best Weekend Getaways Near NYC", "Everything I Did in Paris".',
          'Use strong CTAs: "Book through my link to experience this exact adventure."',
          'Update collections regularly: Keep your recommendations fresh and relevant.',
        ],
      },
      {
        subtitle: 'Stay Visible',
        points: [
          'The more accessible your links are, the more bookings you’ll earn:',
          '- Keep your TagAlong link in your bio at all times.',
          '- Pin travel videos on TikTok or Instagram.',
          '- Add links to YouTube descriptions and blog posts.',
        ],
      },
      {
        subtitle: 'Referral Program',
        points: [
          'Help grow the TagAlong community and earn bonuses:',
          '- Earn cash rewards for every creator you refer who becomes active on the platform.',
          '- Find your referral link under Refer & Earn in your dashboard.',
        ],
      },
    ],
  },
  {
    title: 'Final Words',
    children: [
        {
            subtitle: 'TagAlong was built to celebrate travel creators—those who inspire others to see the world differently.',
            points: [
                'This isn’t just about links or bookings.',
                'It’s about real experiences, shared with purpose.',
                'Now, it’s your turn to inspire, share, and earn.',
                'Start building your collections today and help others create their dream journeys.'
            ]
        }
    ]
  }
];

export default function CreatorAcademyPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContent = useMemo(() => {
    if (!searchTerm) {
      return academyContent;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return academyContent.filter(module => {
      const titleMatch = module.title.toLowerCase().includes(lowercasedFilter);
      if (titleMatch) return true;

      return module.children.some(child => {
        const subtitleMatch = child.subtitle.toLowerCase().includes(lowercasedFilter);
        if (subtitleMatch) return true;

        return child.points.some(point => point.toLowerCase().includes(lowercasedFilter));
      });
    });
  }, [searchTerm]);

  return (
    <div className="bg-white">
      <Navigation />
      <main className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight">TagAlong Creator Academy</h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Learn how to grow your influence, earn through your travel recommendations, and inspire others to explore the world.
            </p>
          </header>

          <div className="sticky top-20 bg-white/80 backdrop-blur-sm z-10 py-4 mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search the academy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 rounded-full border-gray-200 shadow-sm"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredContent.map((module, index) => (
              <ContentModule key={index} title={module.title} content={module.children} searchTerm={searchTerm} />
            ))}
            {filteredContent.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    <h3 className="text-xl font-serif font-bold">No results found</h3>
                    <p>Try searching for a different term.</p>
                </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
