'use client'

import { useState, useRef, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const navigation = [
  { name: "So Funktioniert's", href: '/#how-it-works' },
  { name: 'Vorteile', href: '/#benefits' },
  { name: 'Anwendungsfälle', href: '/#examples' },
  { name: 'FAQs', href: '/#faqs' },
  { name: 'Kontakt', href: '/kontakt' },
]

// Custom burger menu button component
const BurgerButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    >
      <span className="sr-only">Toggle menu</span>
      <div className="relative w-6 h-6">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 9 : 4,
          }}
          transition={{ duration: 0.3 }}
          className="absolute h-0.5 w-6 bg-gray-700 rounded-full"
          style={{ transformOrigin: "center" }}
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 9 : 14,
          }}
          transition={{ duration: 0.3 }}
          className="absolute h-0.5 w-6 bg-gray-700 rounded-full"
          style={{ transformOrigin: "center" }}
        />
      </div>
    </button>
  );
};

export default function Example() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [audioError, setAudioError] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showStickyButton, setShowStickyButton] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowStickyButton(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Initialize audio when component mounts
    if (audioRef.current) {
      const audio = audioRef.current;
      
      // Add event listeners for better error handling
      audio.addEventListener('loadeddata', () => {
        setAudioLoaded(true);
        setAudioError(null);
        setDuration(audio.duration);
      });

      audio.addEventListener('error', (e) => {
        setAudioError('Error loading audio');
        console.error('Audio error:', e);
      });

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });

      // Load the audio
      audio.load();

      // Cleanup
      return () => {
        audio.removeEventListener('loadeddata', () => {
          setAudioLoaded(true);
        });
        audio.removeEventListener('error', () => {
          setAudioError('Error loading audio');
        });
        audio.removeEventListener('timeupdate', () => {
          setCurrentTime(audio.currentTime);
        });
      };
    }
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) return;
    
    // Don't attempt to play if audio isn't loaded yet
    if (!audioLoaded) {
      setAudioError('Audio not fully loaded yet. Please try again.');
      return;
    }

    try {
      const audio = audioRef.current;

      if (isPlaying) {
        await audio.pause();
        setIsPlaying(false);
      } else {
        // Reset audio position
        audio.currentTime = 0;
        
        // iOS requires user interaction to play audio
        // This should be called directly from the click handler
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      setAudioError('Error playing audio');
      setIsPlaying(false);
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (href.startsWith('/#')) {
      // If we're already on the home page
      if (window.location.pathname === '/') {
        const elementId = href.split('#')[1]
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // If we're on a different page, navigate to home first
        router.push(href)
      }
    } else {
      // For non-anchor links (like /kontakt)
      router.push(href)
    }
  }

  // Format time as mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

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
            <div className="flex items-center gap-x-4 lg:hidden">
              <BurgerButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-sm font-semibold text-gray-900 hover:text-[#1A371C] font-[Instrument_Sans]"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="rounded-xl bg-[#1A371C] px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1A371C]/90 font-[Instrument_Sans]">
                Gespräch vereinbaren
              </a>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div 
                  className="fixed inset-x-0 top-0 z-50 overflow-y-auto bg-white/80 backdrop-blur-sm shadow-lg"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="mx-auto max-w-7xl px-6">
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
                      <div className="flex items-center gap-x-4">
                        <BurgerButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />
                      </div>
                    </nav>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => handleNavClick(item.href, e)}
                              className="-mx-3 block rounded-xl px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-[Instrument_Sans]"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="py-6">
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-[#1A371C] hover:bg-[#1A371C]/90 font-[Instrument_Sans] text-center"
                          >
                            Gespräch vereinbaren
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pb-6"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Dialog>
        </div>
      </header>

      <div className="relative isolate pt-5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-32 lg:px-8 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-2xl lg:max-w-2xl lg:mx-0 lg:flex-auto text-center lg:text-left"
          >
            <h1 className="mt-0 sm:mt-10 text-3xl xs:text-4xl sm:text-5xl tracking-tight text-[#000000] font-semibold font-[DM_Sans] leading-[1.2] sm:leading-[1.1]">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-1 sm:mb-2"
              >
                Emma. Die
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block mb-1 sm:mb-2"
              >
                <span className="bg-[#e2edd0] rounded-lg px-2 whitespace-nowrap">KI-Telefonassistentin</span>
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
              className="mt-6 sm:mt-8 text-base sm:text-lg text-pretty text-[#5e6159] sm:text-xl/8 font-medium font-[Instrument_Sans]"
            >
              Emma nimmt Anrufe 24/7 entgegen, beantwortet Fragen, nimmt Terminwünsche auf und leitet Anliegen zuverlässig weiter – <span className="font-bold">damit Ihr Team entlastet wird und kein Anruf verloren geht.</span>
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 gap-x-4 justify-center lg:justify-start"
            >
              <a
                href="tel:03021924300"
                className="flex items-center justify-center gap-x-2 rounded-xl bg-[#67986B] px-5 py-3 w-60 sm:w-auto text-sm font-semibold text-white hover:bg-[#1A371C]/90 font-[Instrument_Sans]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Emma anrufen
              </a>
              
              <button
                onClick={toggleAudio}
                className="flex items-center justify-center gap-x-2 rounded-xl bg-white border border-gray-200 px-5 py-3 w-60 sm:w-auto text-sm font-semibold text-gray-700 hover:bg-gray-50 font-[Instrument_Sans]"
              >
                {isPlaying ? (
                  <>
                    <PauseIcon className="h-5 w-5 text-[#1A371C]" />
                    <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                  </>
                ) : (
                  <>
                    <PlayIcon className="h-5 w-5 text-[#1A371C]" />
                    <span> Testgespräch anhören</span>
                  </>
                )}
              </button>
            </motion.div>
            
            {/* Trust elements for desktop - only visible on large screens */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 hidden lg:block"
            >
              <div className="flex flex-row gap-6">
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden rounded-full w-10 h-10 flex-shrink-0">
                    <Image 
                      src="/images/european-flag.png" 
                      alt="EU Flag" 
                      width={40} 
                      height={40} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 font-[Instrument_Sans]">DSGVO-Konform</div>
                    <div className="text-xs text-gray-600 font-[Instrument_Sans]">Made for Europe</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden rounded-full w-10 h-10 flex-shrink-0">
                    <Image 
                      src="/images/german-flag.png" 
                      alt="German Flag" 
                      width={40} 
                      height={40} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 font-[Instrument_Sans]">Made in Germany</div>
                    <div className="text-xs text-gray-600 font-[Instrument_Sans]">Sitz in Berlin</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ y: scrollY * 0.1 }}
            className="mt-8 sm:mt-16 lg:mt-0 lg:shrink-0 lg:grow-0 lg:pl-6 relative"
          >
            <Image 
              src="/images/emma-phone-mockup-4.png" 
              alt="Emma App Screenshot" 
              width={366}
              height={732}
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            />
            
            {audioError && (
              <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-sm py-1 px-2 text-center rounded-b-lg">
                {audioError}
              </div>
            )}
            
            <audio 
              ref={audioRef} 
              className="hidden"
              preload="auto"
              playsInline
              controls={false}
            >
              <source src="/audio/Neukunde Termin .m4a" type="audio/mp4" />
              <source src="/audio/Neukunde Termin .m4a" type="audio/x-m4a" />
              Your browser does not support the audio element.
            </audio>
            
            {/* Trust elements for mobile - only visible on small screens */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 lg:hidden"
            >
              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <div className="overflow-hidden rounded-full w-10 h-10 flex-shrink-0">
                    <Image 
                      src="/images/european-flag.png" 
                      alt="EU Flag" 
                      width={40} 
                      height={40} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 font-[Instrument_Sans]">DSGVO-Konform</div>
                    <div className="text-xs text-gray-600 font-[Instrument_Sans]">Made for Europe</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="overflow-hidden rounded-full w-10 h-10 flex-shrink-0">
                    <Image 
                      src="/images/german-flag.png" 
                      alt="German Flag" 
                      width={40} 
                      height={40} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 font-[Instrument_Sans]">Made in Germany</div>
                    <div className="text-xs text-gray-600 font-[Instrument_Sans]">Sitz in Berlin</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Sticky CTA Button - hidden on lg screens and above */}
      <AnimatePresence>
        {showStickyButton && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          >
            {/* Full-width blurred background bar */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm shadow-lg"></div>
            
            {/* Centered button */}
            <div className="relative flex justify-center px-4 py-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-x-2 rounded-xl bg-[#1A371C] px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#1A371C]/90 font-[Instrument_Sans] transition-all"
              >
                Demo vereinbaren
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
