
import React, { useState } from 'react';
import { db } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Check, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const StepIndicator = ({ currentStep }) => {
  const steps = [1, 2, 3];
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold font-serif transition-all duration-300 ${
              currentStep >= step ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {currentStep > step ? <Check className="w-5 h-5" /> : step}
          </div>
          {step < steps.length && <div className="w-12 h-0.5 bg-gray-200 ml-4" />}
        </div>
      ))}
    </div>
  );
};

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -50 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

export default function CreatorApplicationPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    instagram_handle: '',
    tiktok_handle: '',
    youtube_handle: '',
    blog_website: '',
    largest_following: '',
    total_following: '',
    is_social_public: null,
    how_heard: '',
    travel_frequency: '',
    wants_restaurant_rec: null,
    content_description: '',
    has_consented: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name, value) => {
    if (name === 'is_social_public' || name === 'wants_restaurant_rec') {
      setFormData((prev) => ({ ...prev, [name]: value === 'yes' }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const validateStep1 = () => {
    return formData.first_name.trim() !== '' && 
           formData.last_name.trim() !== '' && 
           formData.email.trim() !== '';
  };

  const validateStep2 = () => {
    return formData.largest_following !== '' && 
           formData.total_following !== '' && 
           formData.is_social_public !== null;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) {
      alert('Please fill in all required fields (First Name, Last Name, and Email)');
      return;
    }
    if (step === 2 && !validateStep2()) {
      alert('Please fill in your largest following platform, total following, and whether your social media is public');
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    if (!formData.has_consented) {
      alert('Please consent to TagAlong\'s Terms of Use and Privacy Policy to proceed');
      return;
    }
    
    setIsLoading(true);
    try {
      // Clean the data - only send non-empty strings and proper booleans
      const submissionData = {};
      
      // Required fields
      submissionData.first_name = formData.first_name.trim();
      submissionData.last_name = formData.last_name.trim();
      submissionData.email = formData.email.trim();
      submissionData.has_consented = formData.has_consented;
      
      // Optional string fields - only include if not empty
      if (formData.phone_number.trim()) submissionData.phone_number = formData.phone_number.trim();
      if (formData.instagram_handle.trim()) submissionData.instagram_handle = formData.instagram_handle.trim();
      if (formData.tiktok_handle.trim()) submissionData.tiktok_handle = formData.tiktok_handle.trim();
      if (formData.youtube_handle.trim()) submissionData.youtube_handle = formData.youtube_handle.trim();
      if (formData.blog_website.trim()) submissionData.blog_website = formData.blog_website.trim();
      if (formData.how_heard.trim()) submissionData.how_heard = formData.how_heard.trim();
      if (formData.travel_frequency.trim()) submissionData.travel_frequency = formData.travel_frequency.trim();
      if (formData.content_description.trim()) submissionData.content_description = formData.content_description.trim();
      
      // Required select fields (these should be guaranteed by validateStep2 if reached, but good to ensure non-empty)
      if (formData.largest_following) submissionData.largest_following = formData.largest_following;
      if (formData.total_following) submissionData.total_following = formData.total_following;
      
      // Boolean fields - only include if explicitly set (i.e., not null)
      if (formData.is_social_public !== null) submissionData.is_social_public = formData.is_social_public;
      if (formData.wants_restaurant_rec !== null) submissionData.wants_restaurant_rec = formData.wants_restaurant_rec;
      
      // Add user_id if user is logged in
      if (user) {
        submissionData.user_id = user.id;
      }

      const { error } = await db.submitCreatorApplication(submissionData);
      if (error) {
        throw error;
      }
      setStep(4);
      setTimeout(() => {
        navigate(createPageUrl('Home'));
      }, 3000);
    } catch (error) {
      console.error('Submission failed:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      <Link to={createPageUrl('Home')} className="absolute top-8 left-8 text-2xl font-serif font-bold tracking-tight">
        TagAlong
      </Link>
      
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <StepIndicator currentStep={step} />
              <div className="text-center mb-10">
                <h1 className="text-5xl font-serif font-bold">Apply to be a TagAlong Creator</h1>
                <p className="text-lg text-gray-600 mt-4">Monetize your travel recommendations and build a deeper connection with your audience.</p>
              </div>
              <div className="space-y-6">
                <Input name="first_name" placeholder="First Name*" value={formData.first_name} onChange={handleChange} className="py-6" required/>
                <Input name="last_name" placeholder="Last Name*" value={formData.last_name} onChange={handleChange} className="py-6" required/>
                <Input name="email" type="email" placeholder="Email*" value={formData.email} onChange={handleChange} className="py-6" required/>
                <Input name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} className="py-6"/>
              </div>
              <div className="flex justify-end mt-10">
                <Button onClick={nextStep} size="lg" className="px-10 py-6 bg-black text-white hover:bg-gray-800 rounded-none">NEXT</Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <StepIndicator currentStep={step} />
              <div className="text-center mb-10">
                <h1 className="text-5xl font-serif font-bold">What are your socials?</h1>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-gray-100 p-3 border border-r-0 border-gray-300">Instagram.com/@</span>
                  <Input name="instagram_handle" placeholder="username" value={formData.instagram_handle} onChange={handleChange} className="py-6 rounded-l-none" />
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-100 p-3 border border-r-0 border-gray-300">tiktok.com/@</span>
                  <Input name="tiktok_handle" placeholder="username" value={formData.tiktok_handle} onChange={handleChange} className="py-6 rounded-l-none" />
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-100 p-3 border border-r-0 border-gray-300">youtube.com/@</span>
                  <Input name="youtube_handle" placeholder="username" value={formData.youtube_handle} onChange={handleChange} className="py-6 rounded-l-none" />
                </div>
                 <div className="flex items-center">
                  <span className="bg-gray-100 p-3 border border-r-0 border-gray-300">https://</span>
                  <Input name="blog_website" placeholder="blog-or-website.com" value={formData.blog_website} onChange={handleChange} className="py-6 rounded-l-none" />
                </div>
                <Select onValueChange={(value) => handleSelectChange('largest_following', value)} value={formData.largest_following} required>
                  <SelectTrigger className="py-6"><SelectValue placeholder="Where is your largest following?*" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="TikTok">TikTok</SelectItem>
                    <SelectItem value="Youtube">Youtube</SelectItem>
                    <SelectItem value="Blog">Blog</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Select onValueChange={(value) => handleSelectChange('total_following', value)} value={formData.total_following} required>
                  <SelectTrigger className="py-6"><SelectValue placeholder="What is your total following across all platforms?*" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1000">0-1000</SelectItem>
                    <SelectItem value="1000-10000">1,000-10,000</SelectItem>
                    <SelectItem value="10000-50000">10,000-50,000</SelectItem>
                    <SelectItem value="50000-250000">50,000-250,000</SelectItem>
                    <SelectItem value="250000+">250,000+</SelectItem>
                  </SelectContent>
                </Select>
                 <Select onValueChange={(value) => handleSelectChange('is_social_public', value)} value={formData.is_social_public === null ? '' : (formData.is_social_public ? 'yes' : 'no')} required>
                  <SelectTrigger className="py-6"><SelectValue placeholder="Is your social media public?*" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between mt-10">
                <Button onClick={prevStep} size="lg" variant="outline" className="px-10 py-6 rounded-none border-gray-300">BACK</Button>
                <Button onClick={nextStep} size="lg" className="px-10 py-6 bg-black text-white hover:bg-gray-800 rounded-none">NEXT</Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <StepIndicator currentStep={step} />
               <div className="text-center mb-10">
                <h1 className="text-5xl font-serif font-bold">Tell us about you</h1>
              </div>
              <div className="space-y-6">
                <Textarea name="how_heard" placeholder="How did you hear about TagAlong?" value={formData.how_heard} onChange={handleChange} rows={3} />
                <Textarea name="travel_frequency" placeholder="How often do you travel or book experiences?" value={formData.travel_frequency} onChange={handleChange} rows={3} />
                <Select onValueChange={(value) => handleSelectChange('wants_restaurant_rec', value)} value={formData.wants_restaurant_rec === null ? '' : (formData.wants_restaurant_rec ? 'yes' : 'no')}>
                  <SelectTrigger className="py-6"><SelectValue placeholder="Would you like to earn on restaurant recommendations?" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea name="content_description" placeholder="Tell us about your content" value={formData.content_description} onChange={handleChange} rows={4} />
                <div className="flex items-start space-x-3">
                  <Checkbox id="consent" checked={formData.has_consented} onCheckedChange={(checked) => handleCheckboxChange('has_consented', checked)} />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    Check this box to consent to TagAlong's <Link to={createPageUrl('TermsOfUse')} className="underline">Terms of Use</Link>, <Link to={createPageUrl('PrivacyPolicy')} className="underline">Privacy Policy</Link>, and to receive marketing emails from TagAlong.*
                  </label>
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <Button onClick={prevStep} size="lg" variant="outline" className="px-10 py-6 rounded-none border-gray-300">BACK</Button>
                <Button onClick={handleSubmit} size="lg" className="px-10 py-6 bg-black text-white hover:bg-gray-800 rounded-none" disabled={isLoading || !formData.has_consented}>
                  {isLoading ? <Loader2 className="animate-spin" /> : 'SUBMIT'}
                </Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-serif font-bold">Thank you for your application.</h1>
              <p className="text-lg text-gray-600 mt-4">We will review it and get back to you within 2 business days.</p>
              <p className="text-sm text-gray-500 mt-2">You will be redirected to the homepage in a moment...</p>
              <Link to={createPageUrl('Home')}>
                 <Button size="lg" variant="outline" className="mt-8 px-10 py-6 rounded-none border-gray-300">GO TO HOME</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
