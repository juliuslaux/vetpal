'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  
  useEffect(() => {
    // Check if running in browser context to avoid SSR issues
    if (typeof window !== 'undefined') {
      // Check if the user has already consented
      const hasConsent = localStorage.getItem('cookieConsent')
      if (!hasConsent) {
        // Show banner after a short delay to improve user experience
        const timer = setTimeout(() => {
          setShowBanner(true)
        }, 1000)
        
        return () => clearTimeout(timer)
      }
    }
  }, [])
  
  const acceptCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'accepted')
    }
    setShowBanner(false)
  }
  
  const declineCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'declined')
    }
    setShowBanner(false)
  }
  
  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 z-50 max-w-sm p-4 bg-white rounded-xl border border-gray-200 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-700 font-[Instrument_Sans]">
              Diese Website verwendet Cookies, um Ihnen das beste Erlebnis zu bieten. Weitere Informationen finden Sie in unserer{' '}
              <a href="/datenschutz" className="text-[#1A371C] font-semibold hover:underline">
                Datenschutzerklärung
              </a>.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-[Instrument_Sans]"
              >
                Ablehnen
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm font-semibold text-white bg-[#1A371C] rounded-xl hover:bg-[#1A371C]/90 transition-colors font-[Instrument_Sans]"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner 