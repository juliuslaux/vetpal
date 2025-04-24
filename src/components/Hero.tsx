'use client'

import { useState, useRef, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Vorteile', href: '#benefits' },
  { name: "So Funktioniert's", href: '#how-it-works' },
  { name: 'Anwendungsfälle', href: '#examples' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Make sure the audio is loaded and ready
        audioRef.current.load();
        
        // Use the play() Promise to handle any errors
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(error => {
              console.error("Playback failed:", error);
              // Keep playing state accurate if playback fails
              setIsPlaying(false);
            });
        }
      }
    }
  }

  return (
    <div className="bg-[#FFFFFF]">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav aria-label="Global" className="flex items-center justify-between py-4">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Vetpal Logo</span>
                <Image
                  alt="Vetpal Logo"
                  src="/images/vetpal-logo-green.svg"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 hover:text-[#1A371C] font-[Instrument_Sans]">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="rounded-lg bg-[#1A371C] px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1A371C]/90 font-[Instrument_Sans]">
                Gespräch vereinbaren
              </a>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Vetpal Logo</span>
                  <Image
                    alt="Vetpal Logo"
                    src="/images/vetpal_logo.svg"
                    width={120}
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-[Instrument_Sans]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </header>

      <div className="relative isolate pt-28">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-32 lg:px-8 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-2xl lg:max-w-2xl lg:mx-0 lg:flex-auto"
          >
            <h1 className="mt-10 text-5xl tracking-tight text-[#000000] sm:text-6xl font-semibold font-[DM_Sans] leading-[1.1]">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-2"
              >
                Emma. Die
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="mb-2 bg-[#e2edd0] rounded-lg px-2">KI-Telefonassistentin</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                für Ihre Tierarztpraxis.
              </motion.div>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-lg text-pretty text-[#5e6159] sm:text-xl/8 font-medium font-[Instrument_Sans]"
            >
              Abgestimmt auf die Bedürfnisse von Tierarztpraxen, geht Emma  24/7 ans Telefon, beantwortet Fragen, nimmt Terminwünsche entgegen und leitet direkt an die richtigen Ansprechpartner weiter.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex items-center gap-x-6"
            >
              <a
                href="#"
                className="rounded-lg bg-[#1A371C] px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1A371C]/90 font-[Instrument_Sans]"
              >
                Gespräch vereinbaren
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ y: scrollY * 0.1 }}
            className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow-0 lg:pl-6 relative"
          >
            <Image 
              src="/images/emma-phone-mockup.png" 
              alt="Emma App Screenshot" 
              width={366}
              height={732}
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <button
                onClick={toggleAudio}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white/90 transition-all"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? (
                  <PauseIcon className="h-8 w-8 text-[#1A371C]" />
                ) : (
                  <PlayIcon className="h-8 w-8 text-[#1A371C]" />
                )}
              </button>
            </motion.div>
            
            <audio ref={audioRef} className="hidden">
              <source src="/audio/Neukunde Termin .m4a" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
