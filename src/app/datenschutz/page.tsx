'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Vorteile', href: '#benefits' },
  { name: "So Funktioniert's", href: '#how-it-works' },
  { name: 'Anwendungsfälle', href: '#examples' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Kontakt', href: '/kontakt' },
]

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