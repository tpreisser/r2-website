'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { downloadVCard, type ContactInfo } from '@/lib/vcard';

const R2_CONTACT: ContactInfo = {
  name: 'R² Solutions',
  email: 'hello@r2solutions.ai',
  company: 'R² Solutions',
  website: 'https://r2solutions.ai',
  title: 'AI Solutions Provider',
};

export function ContactSharing() {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownloadAppleContact = () => {
    downloadVCard(R2_CONTACT, 'r2-solutions.vcf');
  };

  const handleOpenGoogleContacts = () => {
    // Google Contacts URL with pre-filled contact info
    const params = new URLSearchParams({
      name: R2_CONTACT.name,
      email: R2_CONTACT.email,
      phone: R2_CONTACT.phone || '',
      company: R2_CONTACT.company || '',
    });
    window.open(`https://contacts.google.com/person/create?${params.toString()}`, '_blank');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(R2_CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${R2_CONTACT.email}?subject=Contact from Website`;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 font-serif text-2xl font-semibold text-gray-900 lg:text-3xl">
          Connect With Us
        </h3>
        <p className="text-gray-600">Choose your preferred way to get in touch</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* QR Code Button */}
        <motion.button
          onClick={() => setShowQR(!showQR)}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="rounded-full bg-gradient-to-br from-[#025082]/20 to-[#FF6B35]/20 p-4">
              <svg
                className="h-8 w-8 text-[#025082]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Scan QR Code</span>
            <span className="text-xs text-gray-600">Share contact info</span>
          </div>
        </motion.button>

        {/* Apple Contacts Button */}
        <motion.button
          onClick={handleDownloadAppleContact}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="rounded-full bg-gradient-to-br from-[#025082]/20 to-[#FF6B35]/20 p-4">
              <svg
                className="h-8 w-8 text-[#025082]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Apple Contacts</span>
            <span className="text-xs text-gray-600">Download vCard</span>
          </div>
        </motion.button>

        {/* Google Contacts Button */}
        <motion.button
          onClick={handleOpenGoogleContacts}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="rounded-full bg-gradient-to-br from-[#025082]/20 to-[#FF6B35]/20 p-4">
              <svg
                className="h-8 w-8 text-[#025082]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Google Contacts</span>
            <span className="text-xs text-gray-600">Add to Google</span>
          </div>
        </motion.button>

        {/* Email Button */}
        <motion.button
          onClick={handleSendEmail}
          className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="rounded-full bg-gradient-to-br from-[#025082]/20 to-[#FF6B35]/20 p-4">
              <svg
                className="h-8 w-8 text-[#025082]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Send Email</span>
            <span className="text-xs text-gray-600">Open mail client</span>
          </div>
        </motion.button>
      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-3xl border border-white/30 bg-white/95 p-8 shadow-2xl backdrop-blur-xl"
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col items-center space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-gray-900">
                  Scan to Add Contact
                </h3>
                <div className="rounded-2xl border-4 border-white bg-white p-4 shadow-lg">
                  <QRCodeSVG
                    value={`BEGIN:VCARD\nVERSION:3.0\nFN:${R2_CONTACT.name}\nEMAIL:${R2_CONTACT.email}\nORG:${R2_CONTACT.company}\nURL:${R2_CONTACT.website}\nEND:VCARD`}
                    size={256}
                    level="H"
                    includeMargin={false}
                  />
                </div>
                <p className="text-center text-sm text-gray-600">
                  Scan with your phone camera to add our contact information
                </p>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                  {copied && (
                    <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
