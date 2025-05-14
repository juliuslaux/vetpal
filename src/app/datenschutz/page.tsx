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
          <p className="text-sm text-gray-600 mb-8 font-[Instrument_Sans]">Vetpal UG (haftungsbeschränkt) i.G.<br />Stand: Mai 2025</p>

          <div className="border-t border-gray-200 my-8"></div>

          <div className="prose max-w-3xl font-[Instrument_Sans] text-[#5e6159]">
            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="text-[#5e6159]">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie der folgenden Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Abschnitt &quot;Hinweis zur verantwortlichen Stelle&quot; entnehmen.
            </p>

            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen - z. B. über ein Kontaktformular. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Dabei handelt es sich vor allem um technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung erfolgt automatisch, sobald Sie unsere Website betreten.
            </p>

            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Wofür nutzen wir Ihre Daten?</h4>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse des Nutzerverhaltens verwendet werden.
            </p>

            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie ein Recht auf Berichtigung oder Löschung dieser Daten sowie auf Einschränkung der Verarbeitung. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die Zukunft widerrufen. Darüber hinaus haben Sie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">2. Hosting</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Externes Hosting</h3>
            <p>
              Diese Website wird extern gehostet. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Dabei handelt es sich insbesondere um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über die Website generiert werden.
            </p>
            <p>
              Das Hosting erfolgt zur Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) sowie im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Wenn eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG. Die Einwilligung kann jederzeit widerrufen werden.
            </p>

            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Unser Hoster ist:</h4>
            <p>
              checkdomain GmbH<br />
              a dogado group company<br />
              Große Burgstraße 27/29<br />
              23552 Lübeck
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Auftragsverarbeitung</h3>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit unserem Hostinganbieter abgeschlossen. Dieser gewährleistet, dass Ihre Daten nur gemäß unseren Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Datenschutz</h3>
            <p>
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              Vetpal UG (haftungsbeschränkt) i.G.<br />
              Donaustraße 44<br />
              12043 Berlin<br />
              E-Mail: info@vetpal.de
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Bestehen gesetzliche Aufbewahrungsfristen, werden die Daten nach Ablauf dieser Fristen gelöscht.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Allgemeine Hinweise zu den Rechtsgrundlagen</h3>
            <p>
              Ihre Daten werden je nach Kontext auf folgenden Rechtsgrundlagen verarbeitet:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, ggf. Art. 9 Abs. 2 lit. a DSGVO)</li>
              <li>Vertrag/Vertragsanbahnung (Art. 6 Abs. 1 lit. b DSGVO)</li>
              <li>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</li>
              <li>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</li>
              <li>Einwilligung im Sinne von § 25 Abs. 1 TDDDG (z. B. bei Cookies)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Empfänger von personenbezogenen Daten</h3>
            <p>
              Wir geben Ihre Daten nur weiter, wenn dies gesetzlich erlaubt ist, z. B. bei Vertragserfüllung, berechtigtem Interesse oder gesetzlicher Pflicht. Bei Auftragsverarbeitung erfolgt dies nur auf Basis entsprechender Verträge.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Sie können Ihre Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Widerspruch gegen Werbe-E-Mails</h3>
            <p>
              Der Nutzung unserer Kontaktdaten zur Übersendung nicht ausdrücklich angeforderter Werbung wird widersprochen.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Cookies</h3>
            <p>
              Unsere Website verwendet Cookies. Technisch notwendige Cookies dienen der Bereitstellung bestimmter Funktionen. Andere Cookies helfen uns, die Nutzung zu analysieren oder unser Angebot zu optimieren. Die Speicherung erfolgt je nach Zweck auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO oder nach Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 TDDDG).
              Sie können Ihre Einstellungen im Browser anpassen und Cookies löschen oder blockieren.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">5. Newsletter</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Newsletterdaten</h3>
            <p>
              Wenn Sie unseren Newsletter abonnieren, verwenden wir Ihre E-Mail-Adresse ausschließlich für diesen Zweck. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              Sie können sich jederzeit abmelden. Ihre Daten werden anschließend gelöscht oder in eine Blacklist aufgenommen, sofern dies zur Vermeidung künftiger Zusendungen erforderlich ist.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">6. Plugins und Tools</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Google Fonts</h3>
            <p>
              Zur einheitlichen Darstellung von Schriftarten nutzt diese Website Google Fonts. Beim Laden der Fonts wird eine Verbindung zu Google-Servern hergestellt. Dabei wird Ihre IP-Adresse übermittelt.
              Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO bzw. nach Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 TDDDG). Weitere Infos:<br />
              <a href="https://developers.google.com/fonts/faq" className="text-[#1A371C] hover:underline">https://developers.google.com/fonts/faq</a><br />
              <a href="https://policies.google.com/privacy" className="text-[#1A371C] hover:underline">https://policies.google.com/privacy</a>
            </p>
            <p>
              Google ist nach dem EU-US Data Privacy Framework zertifiziert:<br />
              <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-[#1A371C] hover:underline">https://www.dataprivacyframework.gov/participant/5780</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 