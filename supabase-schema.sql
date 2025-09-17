-- Supabase Database Schema for TagAlong

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  role TEXT DEFAULT 'traveler' CHECK (role IN ('traveler', 'creator', 'admin')),
  instagram_handle TEXT,
  tiktok_handle TEXT,
  youtube_handle TEXT,
  blog_website TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Creator applications table
CREATE TABLE public.creator_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT,
  instagram_handle TEXT,
  tiktok_handle TEXT,
  youtube_handle TEXT,
  blog_website TEXT,
  largest_following TEXT NOT NULL,
  total_following TEXT NOT NULL,
  is_social_public BOOLEAN NOT NULL,
  how_heard TEXT,
  travel_frequency TEXT,
  wants_restaurant_rec BOOLEAN,
  content_description TEXT,
  has_consented BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Job applications table
CREATE TABLE public.job_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  position TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  linkedin_url TEXT,
  portfolio_url TEXT,
  resume_url TEXT,
  cover_letter TEXT,
  years_experience TEXT,
  available_start TEXT,
  salary_expectations TEXT,
  referral_source TEXT,
  additional_info TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Listings table (hotels, restaurants, experiences)
CREATE TABLE public.listings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('hotel', 'restaurant', 'experience', 'destination')),
  location TEXT NOT NULL,
  description TEXT,
  images TEXT[], -- Array of image URLs
  affiliate_link TEXT,
  price_range TEXT,
  rating DECIMAL(2,1) CHECK (rating >= 0 AND rating <= 5),
  featured BOOLEAN DEFAULT FALSE,
  tags TEXT[],
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  listing_id UUID REFERENCES public.listings(id) ON DELETE CASCADE,
  creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  reviewer_name TEXT NOT NULL,
  review_text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bookings/clicks tracking
CREATE TABLE public.booking_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  listing_id UUID REFERENCES public.listings(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  clicked_at TIMESTAMPTZ DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT,
  referrer TEXT
);

-- Newsletter subscriptions
CREATE TABLE public.newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

-- Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.creator_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Policies for creator applications
CREATE POLICY "Anyone can submit creator application" ON public.creator_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own applications" ON public.creator_applications
  FOR SELECT USING (auth.uid() = user_id OR email = auth.email());

-- Policies for listings
CREATE POLICY "Listings are viewable by everyone" ON public.listings
  FOR SELECT USING (true);

CREATE POLICY "Creators can manage own listings" ON public.listings
  FOR ALL USING (auth.uid() = creator_id);

-- Policies for reviews
CREATE POLICY "Reviews are viewable by everyone" ON public.reviews
  FOR SELECT USING (true);

CREATE POLICY "Creators can add reviews" ON public.reviews
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'creator'
    )
  );

-- Policies for booking clicks
CREATE POLICY "Anyone can track clicks" ON public.booking_clicks
  FOR INSERT WITH CHECK (true);

-- Policies for newsletter
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Functions
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Indexes for performance
CREATE INDEX idx_listings_category ON public.listings(category);
CREATE INDEX idx_listings_location ON public.listings(location);
CREATE INDEX idx_listings_featured ON public.listings(featured);
CREATE INDEX idx_creator_applications_email ON public.creator_applications(email);
CREATE INDEX idx_creator_applications_status ON public.creator_applications(status);
CREATE INDEX idx_booking_clicks_listing ON public.booking_clicks(listing_id);
CREATE INDEX idx_profiles_role ON public.profiles(role);