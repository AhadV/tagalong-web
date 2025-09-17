
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { User } from '@/api/entities';
import LoginModal from './auth/LoginModal';

const footerLinks = {
  creators: [
    { name: 'TagAlong for Creators', href: createPageUrl('Creators'), isInternal: true },
    { name: 'Curated Journeys', href: '#' },
    { name: 'Affiliate Links', href: createPageUrl('AffiliateLinks'), isInternal: true },
    { name: 'Apply to be a Creator', href: createPageUrl('CreatorApplication'), isInternal: true },
  ],
  partners: [
    { name: 'TagAlong for Partners', href: '#' },
    { name: 'Discover', href: '#' },
    { name: 'Connect', href: 'mailto:hello@tagalong.me' },
    { name: 'Inspire', href: createPageUrl('Inspire'), isInternal: true },
  ],
  explore: [
    { name: 'Blog', href: createPageUrl('Blog'), isInternal: true },
    { name: 'About Us', href: createPageUrl('About'), isInternal: true },
    { name: 'Careers', href: createPageUrl('Careers'), isInternal: true },
    { name: 'Shop All Categories', href: '#' },
  ],
  support: [
    { name: 'Creator Academy', href: createPageUrl('CreatorAcademy'), isInternal: true },
    { name: 'Contact Us', href: 'mailto:support@tagalong.me' },
    { name: 'Terms of Use', href: createPageUrl('TermsOfUse'), isInternal: true },
    { name: 'Privacy Policy', href: createPageUrl('PrivacyPolicy'), isInternal: true },
  ],
};

const FooterLinkColumn = ({ title, links, onLoginClick }) => (
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          {link.isInternal ? (
            <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {link.name}
            </Link>
          ) : link.action === 'login' ? (
             <button onClick={onLoginClick} className="text-sm text-white/60 hover:text-white transition-colors text-left">
              {link.name}
            </button>
          ) : (
            <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {link.name}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const user = await User.me();
            setCurrentUser(user);
        } catch (e) {
            setCurrentUser(null);
        }
    };
    fetchUser();
  }, []);

  const handleLoginClick = () => {
    // Use loginWithRedirect instead of showing modal
    User.loginWithRedirect(window.location.href);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  // Dynamically update the travelers links based on login status
  const travelersLinks = currentUser ? [
    { name: 'TagAlong by Creator', href: createPageUrl('Creators'), isInternal: true },
    { name: 'TagAlong by Experience', href: createPageUrl('Explore'), isInternal: true },
    { name: 'TagAlong by Category', href: '#' },
    { name: 'My Profile', href: '#', isInternal: false },
  ] : [
    { name: 'TagAlong by Creator', href: createPageUrl('Creators'), isInternal: true },
    { name: 'TagAlong by Experience', href: createPageUrl('Explore'), isInternal: true },
    { name: 'TagAlong by Category', href: '#' },
    { name: 'My Profile', action: 'login' },
  ];

  return (
    <>
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            <FooterLinkColumn title="For Creators" links={footerLinks.creators} onLoginClick={handleLoginClick} />
            <FooterLinkColumn title="For Partners" links={footerLinks.partners} onLoginClick={handleLoginClick} />
            <FooterLinkColumn title="For Travelers" links={travelersLinks} onLoginClick={handleLoginClick} />
            <FooterLinkColumn title="Explore" links={footerLinks.explore} onLoginClick={handleLoginClick} />
            <FooterLinkColumn title="Support" links={footerLinks.support} onLoginClick={handleLoginClick} />
          </div>
          <div className="mt-24 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60">
              <span className="font-bold">TagAlong</span> © Copyright 2025 RGCOS, Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* The LoginModal is still rendered but handleLoginClick will no longer open it. 
          It might be opened by other means or remain unused depending on other parts of the app. */}
      <LoginModal isOpen={showLoginModal} onClose={handleCloseLoginModal} />
    </>
  );
}
