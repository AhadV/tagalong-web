
import React, { useState, useEffect } from 'react';
import { db, storage } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Upload, Loader2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from '@/components/ui/select';

export default function JobApplicationModal({ isOpen, onClose, jobCategories }) {
  const { user } = useAuth();
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Reset form when modal opens/closes
    if (!isOpen) {
      setSelectedJob('');
      setFormData({ first_name: '', last_name: '', email: '', phone: '' });
      setResumeFile(null);
      setIsSuccess(false);
      setError('');
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      setError('');
    } else {
      setError('Please upload a PDF file only');
      setResumeFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedJob) {
      setError('Please select a job position to apply for.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      let resume_url = '';
      
      if (resumeFile) {
        const fileName = `resumes/${Date.now()}_${resumeFile.name}`;
        const { data: uploadData, error: uploadError } = await storage.uploadFile('job-applications', fileName, resumeFile);
        if (uploadError) throw uploadError;
        resume_url = storage.getPublicUrl('job-applications', fileName);
      }

      const jobData = JSON.parse(selectedJob);

      const { error } = await db.submitJobApplication({
        ...formData,
        resume_url,
        position: `${jobData.title} - ${jobData.department}`,
        user_id: user?.id || null,
      });

      if (error) throw error;

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (err) {
      setError('Failed to submit application. Please try again.');
      console.error('Application submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">Apply for a Position</h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-gray-600">We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Select value={selectedJob} onValueChange={setSelectedJob} required>
                  <SelectTrigger className="w-full py-3">
                    <SelectValue placeholder="Select a position*" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobCategories.map(category => (
                      <SelectGroup key={category.name}>
                        <SelectLabel>{category.name}</SelectLabel>
                        {category.jobs.map(job => (
                          <SelectItem key={job.title} value={JSON.stringify(job)}>
                            {job.title}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
                
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="first_name"
                    placeholder="First Name*"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    className="py-3"
                  />
                  <Input
                    name="last_name"
                    placeholder="Last Name*"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    className="py-3"
                  />
                </div>
                
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="py-3"
                />
                
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="py-3"
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Resume (PDF only)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center w-full p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                    >
                      <Upload className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">
                        {resumeFile ? resumeFile.name : 'Choose PDF file'}
                      </span>
                    </label>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-black text-white hover:bg-gray-800 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
