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
              <BurgerButton isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 hover:text-[#1A371C] font-[Instrument_Sans]">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
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
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie der nachfolgenden Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch die Betreiberin der Website:<br />
              <br />
              Vetpal UG (haftungsbeschränkt) i.G.<br />
              Donaustraße 44<br />
              12043 Berlin<br />
              E-Mail: info@vetpal.de
            </p>

            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. durch ein Kontaktformular). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst – z. B. technische Daten wie Browsertyp, Betriebssystem oder Uhrzeit des Seitenaufrufs.
            </p>

            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Wofür nutzen wir Ihre Daten?</h4>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Zudem können Sie die Berichtigung, Sperrung oder Löschung dieser Daten verlangen. Auch ein Widerruf Ihrer Einwilligung zur Datenverarbeitung ist jederzeit möglich. Darüber hinaus steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">2. Hosting</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Externes Hosting</h3>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Dabei handelt es sich u. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen und Websitezugriffe.
            </p>
            <p>
              Das Hosting erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung unserer Website). Wenn eine entsprechende Einwilligung vorliegt, erfolgt die Verarbeitung zusätzlich auf Basis von Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
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
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Dieser gewährleistet, dass Ihre Daten nur gemäß unseren Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Datenschutz</h3>
            <p>
              Die Betreiberin dieser Website – die Vetpal UG (haftungsbeschränkt) i.G. – nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Verantwortliche Stelle im Sinne der DSGVO ist:<br />
              <br />
              Vetpal UG (haftungsbeschränkt) i.G.<br />
              Donaustraße 44<br />
              12043 Berlin<br />
              E-Mail: info@vetpal.de
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Speicherdauer</h3>
            <p>
              Sofern innerhalb dieser Erklärung keine spezifischere Speicherdauer genannt wird, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt oder Sie Ihr Löschbegehren mitteilen. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Rechtsgrundlagen der Datenverarbeitung</h3>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt je nach Kontext auf Grundlage folgender Rechtsgrundlagen:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
              <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung</li>
              <li>Art. 6 Abs. 1 lit. c DSGVO – Rechtspflicht</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse</li>
              <li>§ 25 Abs. 1 TDDDG – Einwilligung bei Endgerätezugriff</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Empfänger von personenbezogenen Daten</h3>
            <p>
              Wir geben personenbezogene Daten nur weiter, wenn dies gesetzlich erlaubt ist oder zur Vertragserfüllung notwendig. Bei der Zusammenarbeit mit Auftragsverarbeitern schließen wir entsprechende Vereinbarungen ab.
            </p>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Ihre Rechte</h3>
            <p>
              Sie haben unter anderem folgende Rechte:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Widerruf Ihrer Einwilligung</li>
              <li>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</li>
              <li>Beschwerderecht bei Aufsichtsbehörden</li>
              <li>Auskunft, Berichtigung, Löschung</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Widerspruch gegen Werbe-E-Mails</h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur unverlangten Werbung wird widersprochen. Rechtliche Schritte im Falle von Spam bleiben vorbehalten.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Cookies</h3>
            <p>
              Unsere Website verwendet sogenannte Cookies. Diese dienen der Benutzerfreundlichkeit sowie Analysezwecken. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw. – bei Einwilligung – Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 Abs. 1 TDDDG.
              <br />Sie können Ihre Browser-Einstellungen so anpassen, dass Sie über Cookies informiert werden oder diese vollständig ablehnen. Die Funktionalität unserer Website kann dadurch eingeschränkt sein.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">5. Newsletter</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Newsletterdaten</h3>
            <p>
              Wenn Sie unseren Newsletter abonnieren, benötigen wir Ihre E-Mail-Adresse und Ihre Einwilligung. Diese Einwilligung kann jederzeit widerrufen werden. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
              <br />Bei Austragung aus dem Verteiler kann Ihre E-Mail-Adresse in eine Blacklist aufgenommen werden, um zukünftige Zusendungen zu verhindern.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">6. Plugins und Tools</h2>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Google Fonts</h3>
            <p>
              Zur einheitlichen Darstellung nutzt unsere Website Google Fonts. Beim Laden der Seite wird Ihre IP-Adresse an Google übermittelt. Die Nutzung basiert auf Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen:<br />
              <a href="https://developers.google.com/fonts/faq" className="text-[#1A371C] hover:underline">https://developers.google.com/fonts/faq</a><br />
              <a href="https://policies.google.com/privacy" className="text-[#1A371C] hover:underline">https://policies.google.com/privacy</a>
            </p>
            <p>
              Google ist nach dem EU-US Data Privacy Framework zertifiziert:<br />
              <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-[#1A371C] hover:underline">https://www.dataprivacyframework.gov/participant/5780</a>
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">7. Drittanbieter-Dienste und Datenübermittlung in Drittländer</h2>
            
            <p>
              Im Rahmen unserer Geschäftstätigkeit setzen wir verschiedene Softwaredienste externer Anbieter ein. Dabei kann es zur Übermittlung personenbezogener Daten an Drittstaaten außerhalb der Europäischen Union (insbesondere die USA) kommen. Die Verarbeitung erfolgt nur auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG) oder bei Vorliegen geeigneter Garantien im Sinne von Art. 44 ff. DSGVO.
            </p>
            <p>
              Wir haben mit allen Dienstleistern, soweit gesetzlich erforderlich, Auftragsverarbeitungsverträge (AVV) abgeschlossen.
            </p>
            
            <h3 className="text-lg font-semibold text-[#1A371C] mt-6 mb-3">Eingesetzte Drittanbieterdienste im Überblick:</h3>
            
            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">1. OpenAI (ChatGPT, API-Nutzung)</h4>
            <p>
              Anbieter: OpenAI, L.L.C., 3180 18th Street, San Francisco, CA 94110, USA<br />
              Zweck: Verarbeitung natürlicher Sprache<br />
              Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)<br />
              Datenübermittlung in Drittländer: Ja – USA, EU-U.S. Data Privacy Framework
            </p>
            
            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">2. ElevenLabs (Text-to-Speech-API)</h4>
            <p>
              Anbieter: ElevenLabs Inc., New York, NY, USA<br />
              Zweck: Sprachausgabe von Texten<br />
              Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)<br />
              Datenübermittlung in Drittländer: Ja – USA, mit SCC
            </p>
            
            <h4 className="text-base font-semibold text-[#1A371C] mt-4 mb-2">3. Amazon Web Services (AWS)</h4>
            <p>
              Anbieter: Amazon Web Services, Inc., Seattle, WA, USA<br />
              Zweck: Hosting, Serverbetrieb<br />
              Rechtsgrundlage: Vertragserfüllung, berechtigtes Interesse<br />
              Datenübermittlung: EU/USA – DPF oder SCC
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 