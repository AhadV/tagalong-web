# TagAlong - Curated Travel Recommendations Platform

## Overview

TagAlong is a premium travel recommendation platform that connects travelers with handpicked hotels, restaurants, and experiences curated by trusted travel creators. The platform enables travel influencers to monetize their recommendations through affiliate partnerships while providing travelers with authentic, vetted travel destinations.

## Features

### For Travelers
- **Curated Discoveries**: Browse handpicked hotels, unique villas, and unforgettable experiences
- **Creator-Backed Recommendations**: Every listing is personally vetted by travel influencers
- **Categories**: Explore by Hotels, Food & Wine, Adventure, Stays, Experiences, Beaches, Cities, and Wellness
- **Direct Booking**: Seamless affiliate links to trusted booking partners

### For Creators
- **Monetization**: Earn commissions on bookings through affiliate partnerships
- **Creator Application**: Multi-step onboarding process for travel influencers
- **Creator Academy**: Educational resources for maximizing earnings
- **Community**: Join a network of premium travel content creators

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Radix UI (shadcn/ui components)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth with Google OAuth
- **Deployment**: Netlify
- **Animations**: Framer Motion

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tagalong.git

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:5173
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
tagalong/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── auth/       # Authentication components
│   │   ├── explore/    # Listing components
│   │   └── creators/   # Creator-specific components
│   ├── pages/          # Route components
│   ├── hooks/          # Custom React hooks
│   ├── lib/           # External service integrations
│   └── utils/         # Utility functions
├── public/            # Static assets
├── supabase/          # Database schema and migrations
└── dist/             # Production build output
```

## Database Schema

The platform uses Supabase with the following main tables:
- `profiles` - User profiles with roles (traveler/creator/admin)
- `listings` - Travel recommendations with affiliate links
- `creator_applications` - Creator onboarding workflow
- `reviews` - User-generated content
- `booking_clicks` - Analytics tracking

## Deployment

The app is configured for deployment on Netlify:

```bash
# Deploy to Netlify
npm run build
# Upload the dist folder to Netlify
```

See `netlify.toml` for deployment configuration.

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

© 2025 TagAlong. All rights reserved.

## Contact

- Website: [https://tagalong.me](https://tagalong.me)
- Support: support@tagalong.me
- Business: hello@tagalong.me

---

Built with ❤️ for travelers and creators