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

export default function Auftragsverarbeitung() {
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
            Auftragsverarbeitungsvertrag
          </h1>

          <div className="prose max-w-3xl font-[Instrument_Sans] text-[#5e6159]">
            <p className="text-base mb-8 text-[#5e6159]">
              gemäß Art. 28 Abs. 3 Datenschutz-Grundverordnung (DSGVO)
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">Präambel</h2>
            <p className="text-[#5e6159]">
              Diese Vereinbarung konkretisiert die datenschutzrechtlichen Verpflichtungen der Vertragsparteien, die sich aus 
              der im Hauptvertrag beschriebenen Auftragsverarbeitung ergeben. Sie findet Anwendung auf alle Tätigkeiten, die 
              mit dem Hauptvertrag in Zusammenhang stehen und bei denen Beschäftigte des Auftragnehmers oder durch den 
              Auftragnehmer Beauftragte mit personenbezogenen Daten des Auftraggebers in Berührung kommen können.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">1. Gegenstand und Dauer der Verarbeitung</h2>
            <p>
              Der Auftragnehmer verarbeitet personenbezogene Daten im Auftrag des Auftraggebers. Dies umfasst Tätigkeiten, 
              die im Hauptvertrag und in der Leistungsbeschreibung konkretisiert sind. Der Vertrag beginnt mit der 
              Unterzeichnung und wird auf unbestimmte Zeit geschlossen.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">2. Art und Zweck der Verarbeitung</h2>
            <p>
              Die Verarbeitung ist folgender Art: Erhebung, Erfassung, Organisation, Ordnung, Speicherung, Anpassung oder 
              Veränderung, Auslesen, Abfragen, Verwendung, Offenlegung durch Übermittlung, Verbreitung oder eine andere Form 
              der Bereitstellung, Abgleich oder Verknüpfung, Einschränkung, Löschen oder Vernichtung von Daten.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">3. Art der personenbezogenen Daten</h2>
            <p>
              Folgende Kategorien personenbezogener Daten werden verarbeitet:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Kontaktdaten (Name, Adresse, E-Mail, Telefon)</li>
              <li>Vertragsdaten</li>
              <li>Abrechnungs- und Zahlungsdaten</li>
              <li>Planungs- und Steuerungsdaten</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">4. Kategorien betroffener Personen</h2>
            <p>
              Von der Verarbeitung betroffen sind:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Kunden</li>
              <li>Interessenten</li>
              <li>Mitarbeiter</li>
              <li>Lieferanten</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">5. Pflichten des Auftragnehmers</h2>
            <p>
              Der Auftragnehmer verarbeitet personenbezogene Daten ausschließlich wie vertraglich vereinbart oder wie vom 
              Auftraggeber angewiesen, sofern gesetzliche Regelungen dem nicht entgegenstehen.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">6. Kontakt</h2>
            <p>
              Bei Fragen zum Auftragsverarbeitungsvertrag wenden Sie sich bitte an:<br />
              E-Mail: info@vetpal.de
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 