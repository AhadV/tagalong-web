import React from 'react';
import { Button } from '@/components/ui/button';
import { logError } from '@/utils/errorHandler';
import { X, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useAuth } from '@/hooks/useAuth';

export default function LoginModal({ isOpen, onClose }) {
  const { signInWithGoogle } = useAuth();

  const handleTravelerSignUp = async () => {
    try {
      await signInWithGoogle();
      onClose();
    } catch (error) {
      logError('Google sign in failed', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Welcome to TagAlong
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Choose how you'd like to join our community
          </p>
          
          <div className="space-y-4">
            <Link to={createPageUrl('CreatorApplication')} onClick={onClose}>
              <Button className="w-full bg-black text-white hover:bg-gray-800 py-4 font-semibold flex items-center justify-center gap-3">
                <Star className="w-5 h-5" />
                Sign Up as Creator
              </Button>
            </Link>
            
            <Button 
              onClick={handleTravelerSignUp}
              variant="outline" 
              className="w-full py-4 font-semibold border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-3"
            >
              <Users className="w-5 h-5" />
              Sign Up as Traveler
            </Button>
            
            <Button 
              onClick={onClose}
              variant="ghost" 
              className="w-full py-3 font-semibold text-gray-500 hover:text-gray-700"
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}