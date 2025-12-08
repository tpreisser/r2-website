'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useSearchParams } from 'next/navigation';

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    interest: [] as string[],
    message: '',
    service: initialService,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: initialService }));
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100"
        >
          <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="mb-4 font-serif text-2xl font-semibold text-gray-900 lg:text-3xl">Thank You!</h3>
        <p className="mb-8 text-lg text-gray-600">We&apos;ll be in touch within 24 hours.</p>
        <Button onClick={() => setIsSubmitted(false)} variant="secondary">
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-white/30 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:border-[#025082] focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#025082]/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-white/30 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:border-[#025082] focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#025082]/20"
          />
        </motion.div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full rounded-xl border border-white/30 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:border-[#025082] focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#025082]/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <label htmlFor="industry" className="mb-2 block text-sm font-medium text-gray-700">
            Industry
          </label>
          <input
            type="text"
            id="industry"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full rounded-xl border border-white/30 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:border-[#025082] focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#025082]/20"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
      >
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700">
          Service of interest
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full rounded-xl border border-white/30 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:border-[#025082] focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#025082]/20"
        >
          <option value="">Select a service</option>
          <option value="forge">The Forge Workshop</option>
          <option value="agent-factory">Agent Factory</option>
          <option value="automation">Process Automation</option>
          <option value="advisory">Advisory</option>
          <option value="other">Other</option>
        </select>
        {initialService && (
          <p className="mt-2 text-xs text-[#025082]">
            Preselected from page: {initialService.replace('-', ' ')}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="mb-3 block text-sm font-medium text-gray-700">What brings you here?</label>
        <div className="space-y-2">
          {[
            { value: 'workshop', label: 'Workshop' },
            { value: 'integration', label: 'Integration Help' },
            { value: 'general', label: 'General Question' },
          ].map((option, index) => (
            <motion.label
              key={option.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + index * 0.05 }}
              className="flex cursor-pointer items-center rounded-lg border border-white/30 bg-white/30 p-3 backdrop-blur-sm transition-all duration-200 hover:bg-white/50"
            >
              <input
                type="checkbox"
                checked={formData.interest.includes(option.value)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData({
                      ...formData,
                      interest: [...formData.interest, option.value],
                    });
                  } else {
                    setFormData({
                      ...formData,
                      interest: formData.interest.filter((i) => i !== option.value),
                    });
                  }
                }}
                className="h-4 w-4 rounded border-gray-300 text-[#025082] focus:ring-[#025082]"
              />
              <span className="ml-3 text-gray-700">{option.label}</span>
            </motion.label>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full resize-none rounded-xl border border-white/30 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:border-[#025082] focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#025082]/20"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <Button
          type="submit"
          size="lg"
          variant="primary"
          disabled={isSubmitting}
          className="w-full rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center space-x-2">
              <svg
                className="h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Sending...</span>
            </span>
          ) : (
            'Send Message'
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}
