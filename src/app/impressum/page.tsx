'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Vorteile', href: '/#benefits' },
  { name: "So Funktioniert's", href: '/#how-it-works' },
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

export default function Impressum() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main>
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
              <a
                href="https://cal.com/julius-laux-jwwslf/vetpal-demo"
                className="rounded-xl bg-[#1A371C] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#1A371C]/90 font-[Instrument_Sans]"
              >
                Gespräch vereinbaren
              </a>
              <BurgerButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 hover:text-[#1A371C] font-[Instrument_Sans]">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="https://cal.com/julius-laux-jwwslf/vetpal-demo" className="rounded-xl bg-[#1A371C] px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1A371C]/90 font-[Instrument_Sans]">
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
                              className="-mx-3 block rounded-xl px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-[Instrument_Sans]"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="py-6">
                          <a
                            href="https://cal.com/julius-laux-jwwslf/vetpal-demo"
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

      <div className="relative isolate bg-white pt-28">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1A371C] font-[Instrument_Sans] mb-8">
            Impressum
          </h1>

          <div className="prose max-w-3xl font-[Instrument_Sans] text-[#5e6159]">
            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-[#5e6159]">
              VetPal UG (haftungsbeschränkt) i. G.<br />
              Donaustraße 44<br />
              12403 Berlin
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">Vertreten durch</h2>
            <p>
              Julius Laux, Simon Westenhoff, Laurent Lauener
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">Kontakt</h2>
            <p>
              E-Mail: info@vetpal.de
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              vetpal UG (haftungsbeschränkt) i. G.<br />
              Donaustraße 44<br />
              12403 Berlin
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" className="text-[#1A371C] hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 