'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = {
  main: [
    { name: 'Start', href: '#' },
    { name: 'Vorteile', href: '#benefits' },
    { name: "So Funktioniert's", href: '#how-it-works' },
    { name: 'Anwendungsfälle', href: '#examples' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Team', href: '#team' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutzerklärung', href: '/datenschutz' },
    { name: 'Auftragsverarbeitungsvertrag', href: '/auftragsverarbeitung' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      ),
    }
  ],
}

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-white border-t border-gray-200 relative">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#1A371C] text-white p-3 rounded-full shadow-lg hover:bg-[#1A371C]/90 transition-colors z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          {/* Left column */}
          <div className="md:w-1/2">
            <div className="font-[Instrument_Sans] text-left">
              <div className="text-2xl font-bold text-[#1A371C]">Emma. Die</div>
              <div className="text-2xl font-bold text-[#1A371C]">KI-Telefonassistentin</div>
              <div className="text-2xl font-bold text-[#1A371C]">für Ihre Tierarztpraxis.</div>
            </div>
            <div className="flex space-x-4 mt-4">
              {navigation.social.map((item) => (
                <motion.a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-600 hover:text-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only font-[Instrument_Sans]">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right columns */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <div className="grid grid-cols-3 gap-8 md:gap-x-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 font-[Instrument_Sans]">Kontakt</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <motion.a 
                      href="mailto:info@vetpal.de" 
                      className="text-sm text-gray-600 hover:text-gray-900 font-[Instrument_Sans]"
                      whileHover={{ x: 2 }}
                    >
                      info@vetpal.de
                    </motion.a>
                  </li>
                  <li className="text-sm text-gray-600 font-[Instrument_Sans]">VetPal UG (haftungsbeschränkt)</li>
                  <li className="text-sm text-gray-600 font-[Instrument_Sans]">Donaustraße 44</li>
                  <li className="text-sm text-gray-600 font-[Instrument_Sans]">12403 Berlin</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 font-[Instrument_Sans]">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <motion.a 
                        href={item.href} 
                        className="text-sm text-gray-600 hover:text-gray-900 font-[Instrument_Sans]"
                        whileHover={{ x: 2 }}
                      >
                        {item.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 font-[Instrument_Sans]">Rechtliches</h3>
                <ul className="mt-4 space-y-2">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <motion.a 
                        href={item.href} 
                        className="text-sm text-gray-600 hover:text-gray-900 font-[Instrument_Sans]"
                        whileHover={{ x: 2 }}
                      >
                        {item.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright at the bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 font-[Instrument_Sans]">
            &copy; Copyright 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
