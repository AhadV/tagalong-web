
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
    
    :root {
      --deep-black: #1A1A1A;
      --pure-white: #FFFFFF;
      --soft-beige: #F5F3F0;
      --light-warm-gray: #EAE8E4;
      --muted-gold: #D1BFA9;

      --font-serif: 'Playfair Display', serif;
      --font-sans: 'Inter', sans-serif;
    }
    body {
      background-color: var(--pure-white);
      color: var(--deep-black);
      font-family: var(--font-sans);
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-serif);
      font-weight: 600;
    }
    .font-serif {
        font-family: var(--font-serif);
    }
    .font-sans {
        font-family: var(--font-sans);
    }
    @keyframes scroll-up {
      from { transform: translateY(0); }
      to { transform: translateY(-50%); }
    }
    @keyframes scroll-down {
      from { transform: translateY(-50%); }
      to { transform: translateY(0); }
    }
    .animate-scroll-up {
      animation: scroll-up 80s linear infinite;
    }
    .animate-scroll-down {
      animation: scroll-down 80s linear infinite;
    }
    @keyframes ken-burns {
      0% {
        transform: scale(1.05) translate(1%, -1%);
      }
      100% {
        transform: scale(1.2) translate(-2%, 2%);
      }
    }
    .animate-ken-burns {
      animation: ken-burns 30s ease-in-out infinite alternate;
    }
  `;

  return (
    <div className="min-h-screen">
      <style>{globalStyles}</style>
      {children}
    </div>
  );
}
