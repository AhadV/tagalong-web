
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Added Link import
import { createPageUrl } from '@/utils'; // Added createPageUrl import

const blogPosts = [
  {
    id: 1,
    title: 'TagAlong Link-In-Bio Essentials',
    excerpt: 'Make it effortless for your audience to book your favorite travel experiences and destinations right from your profile.',
    category: 'For Creators',
    categoryTag: 'CREATOR INSIGHTS',
    image: 'https://images.pexels.com/photos/6963589/pexels-photo-6963589.jpeg',
    date: 'December 15, 2024',
    readTime: '5 min read',
    featured: true,
    content: `Your audience already follows you for inspiration—now you can make it seamless for them to discover and book the exact trips and experiences you recommend. By adding your TagAlong profile to your Link-In-Bio, you create a central hub where followers can easily access the destinations, tours, and activities you've curated.

Whether you use Instagram, TikTok, YouTube, or all of the above, a strong Link-In-Bio setup is the key to turning influence into income.

Why Link-In-Bio Matters for Creators
Social media platforms are where you inspire your audience, but they don't always make it easy to direct followers to book travel. A Link-In-Bio solves this by putting all your recommendations in one place, allowing your followers to go from "that looks amazing" to "I just booked it" in a single click.

With TagAlong, every booking made through your unique links is tracked, and you earn a share of the revenue once the affiliate partner confirms the booking.

How to Add TagAlong to Your Link-In-Bio
Here's how to make your TagAlong profile front and center:

1. Copy Your TagAlong Profile Link
• Go to your TagAlong dashboard.
• Copy your unique profile URL.

2. Paste It Into Your Link-In-Bio Tool
• Whether you use Linktree, Beacons, Hoo.Be, Komi, or another tool, simply paste your TagAlong link as a main button.
• Label it something clear like "Book My Favorite Trips" or "Travel With Me."

3. Optional: Highlight Specific Collections
• TagAlong lets you create collections—like "Beach Getaways" or "Family-Friendly Adventures."
• Link directly to these collections for a more curated experience.

Best Practices for Conversion
• Keep it simple: Too many links confuse followers. Your TagAlong link should be one of the top spots in your bio.
• Use strong calls-to-action: In your videos or stories, say phrases like: "Tap the link in my bio to book this exact tour!"
• Update seasonally: Refresh your collections for holidays, summer, or trending destinations.

Ready to Start?
Your Link-In-Bio is the bridge between inspiration and action. By placing your TagAlong profile front and center, you make it easy for followers to explore, book, and experience the places you love most—while you earn on every booking.`
  },
  {
    id: 2,
    title: 'Scaling Creator Travel Partnerships with TagAlong',
    excerpt: 'TagAlong is revolutionizing how creators and brands collaborate in the travel space, making it easier than ever to share experiences and grow together.',
    category: 'For Business',
    categoryTag: 'BRAND INSIGHTS',
    image: 'https://images.pexels.com/photos/1559393/pexels-photo-1559393.jpeg',
    date: 'December 12, 2024',
    readTime: '7 min read',
    featured: true,
    content: `Traditionally, connecting creators with hotels, tour companies, and activity providers was a slow, manual process. From outreach to logistics, brands spent weeks coordinating campaigns without any clear way to measure the return on their efforts. Creators, meanwhile, often received offers that didn't align with their content or audience, leading to missed opportunities for both sides.

TagAlong changes that with Collections, a streamlined solution for connecting creators with travel brands and empowering them to promote the experiences they genuinely love.

The Challenge in Travel Collabs
In conversations with creators and travel brands, one theme came up repeatedly: collaborations are complicated.
• Brands spend hours sourcing and vetting creators manually.
• Creators receive vague offers with little transparency.
• Bookings are tracked through messy spreadsheets, emails, and DMs.
• Campaign success is nearly impossible to measure accurately.

The result? Wasted time, misaligned campaigns, and no clear way to scale collaborations or revenue. We knew there had to be a better way—so we built one.

Introducing TagAlong Collections
TagAlong Collections give creators the tools to curate and monetize their favorite destinations, tours, and experiences—all in one place. These curated collections can be easily linked to any social bio, post, or story, allowing audiences to book directly through the creator's recommendations.

For travel brands, Collections open the door to high-impact, data-driven partnerships that generate bookings without overwhelming internal teams.

Key Benefits of Collections
1. Effortless Scaling: Brands can seamlessly connect with hundreds or even thousands of creators without manually managing outreach.
2. Creator-Driven Authenticity: Instead of generic promotions, creators hand-select destinations and experiences that truly resonate with their audience.
3. Reduced Waste & Better ROI: Unlike traditional comped stays or sponsored trips where value is uncertain, every booking is tracked in real-time.
4. Actionable Insights: With built-in analytics, brands can track bookings, clicks, and creator-driven content.

The Result: Simpler, Smarter Travel Collabs
• Creators focus on inspiring their audience, not navigating complicated logistics.
• Brands grow their reach and bookings without a heavy lift.
• Audiences get trusted, personalized travel recommendations they can book instantly.

This is how TagAlong is building the future of travel marketing—authentic, efficient, and scalable.`
  },
  {
    id: 3,
    title: 'Cookie Windows Explained: What They Are and Why They Matter',
    excerpt: 'If you\'re sharing affiliate links for travel bookings—hotels, tours, or experiences—you\'ve probably heard the term "cookie window."',
    category: 'For Creators',
    categoryTag: 'CREATOR INSIGHTS',
    image: 'https://images.pexels.com/photos/189536/pexels-photo-189536.jpeg',
    date: 'December 10, 2024',
    readTime: '6 min read',
    featured: false,
    content: `It's a behind-the-scenes mechanism that determines whether you earn a commission, and it's one of the most important factors in affiliate marketing. Many creators don't fully understand how it works, so we're breaking it down step-by-step.

What Is a Cookie Window?
When someone clicks your TagAlong link, a small piece of tracking data—called a "cookie"—is placed in their browser. This cookie tracks their activity so that if they book a trip or experience within a set timeframe, you get credit for the sale and earn a commission.

This timeframe is called the cookie window.
• Typical travel affiliate cookie window: 30 days
• Some partners may set it shorter (7–14 days) or longer (up to 90 days).

Do Cookie Windows Reset?
This is one of the questions we hear most often from creators. The answer: sometimes.

If a traveler clicks your link again during the active cookie window, the countdown may refresh, extending the expiration date—but only if the partner's program allows it.

Example: If a booking site offers a 30-day cookie window and your follower clicks again on Day 20, the timer may restart and give you another 30 days.

However, not all travel affiliate programs work this way. Some keep the original expiration date, no matter how many times the link is clicked.

The Last-Click Rule
Here's where things get competitive: Most affiliate programs—including those used by travel partners—operate on a last-click attribution model. That means the last creator's link clicked before checkout wins the commission.

How to Improve Your Odds of Earning
You can't change cookie lengths or last-click rules, but you can take steps to increase the likelihood that your link is the final click before someone books.

Practical strategies:
• Be clear and direct in your posts. Use strong calls-to-action like: "Book this exact tour through my link!"
• Keep your TagAlong profile in your bio. Make it easy for followers to browse all your travel recommendations in one place.
• Leverage evergreen placements like Instagram Story Highlights, TikTok pinned videos, Blog posts, and YouTube descriptions.
• Create urgency. If a deal is time-sensitive, let your audience know so they're encouraged to book quickly.

The Takeaway
Cookie windows are a crucial piece of affiliate marketing, especially in travel. While you can't control how long a partner's cookie lasts or whether it refreshes, you can control how accessible and appealing your links are.

By focusing on consistency, clear calls-to-action, and making your TagAlong profile easy to find, you'll increase your chances of earning commissions—even in competitive, last-click environments.`
  }
];

const categories = ['FEATURED', 'FOR TRAVELERS', 'FOR CREATORS', 'FOR BUSINESS'];

const BlogCard = ({ post, isLarge = false }) => (
  <article className={`group cursor-pointer ${isLarge ? 'md:col-span-2' : ''}`}>
    <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-4">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
          {post.categoryTag}
        </span>
      </div>
      <h2 className={`font-serif font-bold text-gray-900 group-hover:text-gray-600 transition-colors leading-tight ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
        {post.title}
      </h2>
      <p className="text-gray-600 leading-relaxed font-sans">
        {post.excerpt}
      </p>
      <div className="flex items-center text-sm text-gray-500 font-sans">
        <Calendar className="w-4 h-4 mr-1" />
        <span className="mr-4">{post.date}</span>
        <span>{post.readTime}</span>
      </div>
    </div>
  </article>
);

const SidebarCard = ({ title, category, image }) => (
  <article className="group cursor-pointer mb-8">
    <div className="aspect-video overflow-hidden rounded-lg mb-3">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="space-y-2">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
        {category}
      </span>
      <h3 className="font-serif font-bold text-gray-900 group-hover:text-gray-600 transition-colors leading-tight">
        {title}
      </h3>
    </div>
  </article>
);

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('FEATURED');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    if (activeCategory === 'FEATURED') return post.featured;
    // Filter by category name, making sure to handle the 'FOR ' prefix
    const postCategory = post.category.toUpperCase();
    const activeCategoryMatch = activeCategory.replace('FOR ', '');
    return postCategory.includes(activeCategoryMatch);
  }).filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <header className="mb-16">
            <h1 className="text-6xl md:text-8xl font-serif font-black text-gray-900 tracking-tighter mb-8">
              The Journey
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-md mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Where are you traveling to?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 rounded-full border-gray-200 font-sans"
              />
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Tabs */}
              <nav className="mb-12">
                <div className="flex flex-wrap gap-8 border-b border-gray-200">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`font-sans font-semibold text-sm uppercase tracking-wide pb-4 border-b-2 transition-colors ${
                        activeCategory === category
                          ? 'text-gray-900 border-gray-900'
                          : 'text-gray-500 border-transparent hover:text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                  <div className="ml-auto">
                    {/* The "ALL TABS" button might need dynamic behavior or be removed based on actual requirements */}
                    <button className="flex items-center font-sans text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      ALL TABS
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </nav>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {filteredPosts.map((post, index) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    isLarge={index === 0 && activeCategory === 'FEATURED'}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                    TRENDING DESTINATIONS
                  </h3>
                  
                  <SidebarCard
                    title="Japan's Hidden Temples: A Creator's Guide to Kyoto's Best Kept Secrets"
                    category="DESTINATION SPOTLIGHT"
                    image="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop&q=80"
                  />

                  <SidebarCard
                    title="Why Santorini is Still Worth the Hype: A Local's Perspective"
                    category="CREATOR INSIGHTS"
                    image="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop&q=80"
                  />

                  <SidebarCard
                    title="The Ultimate Bali Wellness Retreat Experience"
                    category="TRAVEL GUIDES"
                    image="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop&q=80"
                  />
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-3">
                    Start Your Creator Journey
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-sans">
                    Ready to monetize your travel recommendations? Join TagAlong and start earning from the places you love.
                  </p>
                  {/* Wrapped the Button with Link */}
                  <Link to={createPageUrl('CreatorApplication')}>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full font-sans">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
