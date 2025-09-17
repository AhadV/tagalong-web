import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useAuth } from '@/hooks/useAuth';
import LoginModal from './auth/LoginModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();
  const { user: currentUser, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut();
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  // Determine initial colors based on page background
  const isDarkBackgroundPage = location.pathname === '/' || location.pathname === '/Home' || location.pathname === '/Creators';
  
  // Set colors based on scroll state and page background
  const textColor = isScrolled 
    ? 'text-[var(--deep-black)]' 
    : isDarkBackgroundPage 
      ? 'text-white' 
      : 'text-[var(--deep-black)]';
      
  const navBg = isScrolled ? 'bg-[var(--pure-white)]/95 shadow-md border-b border-gray-200' : 'bg-transparent';

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to={createPageUrl('Home')} onClick={() => setIsMobileMenuOpen(false)}>
                <h1 className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${textColor}`}>TagAlong</h1>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to={createPageUrl('Explore')} className={`text-sm font-sans font-semibold hover:opacity-70 transition-colors duration-300 ${textColor}`}>Explore</Link>
              <Link to={createPageUrl('Creators')} className={`text-sm font-sans font-semibold hover:opacity-70 transition-colors duration-300 ${textColor}`}>Creators</Link>
              {currentUser ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className={`flex items-center gap-2 ${textColor}`}>
                         <UserIcon className="w-5 h-5" />
                         <span className="font-semibold">{currentUser?.user_metadata?.full_name?.split(' ')[0] || currentUser?.email?.split('@')[0] || 'User'}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
              ) : (
                  <Button onClick={handleLoginClick} className="bg-[var(--deep-black)] hover:bg-black/80 text-[var(--pure-white)] px-6 py-2.5 font-sans font-semibold">
                      Sign Up
                  </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors ${isScrolled ? 'hover:bg-[var(--soft-beige)]' : 'hover:bg-white/10'}`}
              >
                {isMobileMenuOpen ? 
                  <X className={`w-6 h-6 transition-colors duration-300 ${textColor}`} /> : 
                  <Menu className={`w-6 h-6 transition-colors duration-300 ${textColor}`} />
                }
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--pure-white)] border-b border-[var(--light-warm-gray)] py-4 shadow-lg">
              <div className="px-6 space-y-4">
                <Link to={createPageUrl('Explore')} className="block text-base font-sans font-semibold text-[var(--deep-black)]" onClick={() => setIsMobileMenuOpen(false)}>Explore</Link>
                <Link to={createPageUrl('Creators')} className="block text-base font-sans font-semibold text-[var(--deep-black)]" onClick={() => setIsMobileMenuOpen(false)}>Creators</Link>
                {currentUser ? (
                   <Button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 font-sans font-semibold mt-4">
                    Log Out
                  </Button>
                ) : (
                  <Button onClick={handleLoginClick} className="w-full bg-[var(--deep-black)] hover:bg-black/80 text-[var(--pure-white)] py-3 font-sans font-semibold mt-4">
                    Sign Up
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={showLoginModal} onClose={handleCloseLoginModal} />
    </>
  );
}