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

export default function Datenschutz() {
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
            Datenschutzerklärung
          </h1>

          <div className="prose max-w-3xl font-[Instrument_Sans] text-[#5e6159]">
            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="text-[#5e6159]">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
              werden können.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
              Impressum dieser Website entnehmen.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p>
              [Hosting Provider]
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser 
              Datenschutzerklärung.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">5. Plugins und Tools</h2>
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Google Web Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts. Die Google Fonts sind 
              lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung 
              dieser Daten zu verlangen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 