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

export default function AGB() {
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
            Allgemeine Geschäftsbedingungen (AGB) – Vetpal UG (haftungsbeschränkt) i.G.
          </h1>
          <p className="text-sm text-gray-600 mb-8 font-[Instrument_Sans]">Stand: 13. Mai 2025</p>

          <div className="prose max-w-3xl font-[Instrument_Sans] text-[#5e6159]">
            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 1 Geltungsbereich</h2>
            <p className="text-[#5e6159]">
              (1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Nutzung der durch die Vetpal UG (haftungsbeschränkt) i.G., Donaustraße 44, 12043 Berlin (nachfolgend "Vetpal"), bereitgestellten Dienstleistungen durch Unternehmer im Sinne von § 14 BGB, insbesondere tierärztliche Praxen und Kliniken (nachfolgend "Kunde").
            </p>
            <p className="text-[#5e6159]">
              (2) Abweichende Geschäftsbedingungen des Kunden finden keine Anwendung, es sei denn, sie werden durch Vetpal ausdrücklich schriftlich bestätigt.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 2 Vertragsgegenstand und Leistungen</h2>
            <p>
              (1) Vetpal stellt dem Kunde einen KI-gestützten digitalen Telefonassistenten (nachfolgend "Vetpal-Agent") zur Verfügung, der insbesondere Anrufe entgegennimmt, priorisiert, weiterleitet und grundlegende administrative Aufgaben unterstützt.
            </p>
            <p>
              (2) Der Vetpal-Agent ist auf die Bedürfnisse tierärztlicher Einrichtungen zugeschnitten, insbesondere im Hinblick auf potenzielle Notfälle, ersetzt jedoch keine medizinische Einschätzung.
            </p>
            <p>
              (3) Die konkreten Leistungen sowie ggf. verfügbare Zusatzfunktionen ergeben sich aus dem individuell vereinbarten Angebot.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 3 Besondere Hinweise zur Nutzung im tierärztlichen Kontext</h2>
            <p>
              (1) Der Vetpal-Agent kann zur Vorqualifikation eingehender Anrufe in potenziellen Notfällen eingesetzt werden. Dabei erfolgt jedoch keine medizinische Diagnose, Beratung oder verbindliche Notfallbeurteilung.
            </p>
            <p>
              (2) Die Verantwortung für medizinische Entscheidungen, die Priorisierung von Behandlungsfällen und die Organisation einer Notfallversorgung liegt ausschließlich beim Kunden.
            </p>
            <p>
              (3) Der Kunde verpflichtet sich, Vetpal nicht als Ersatz für eine persönliche tierärztliche Erreichbarkeit im Notfall zu nutzen und stellt sicher, dass tiermedizinische Notfälle durch eigene organisatorische Maßnahmen (z. B. Rufbereitschaft, Notdienste) abgefangen werden.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 4 Notfallregelung und Einschränkungen</h2>
            <p>
              (1) Vetpal kann bei bestimmten Sprachinhalten oder Schlüsselbegriffen eine automatisierte Notfallweiterleitung an eine zuvor definierte Nummer initiieren.
            </p>
            <p>
              (2) Es wird keine Garantie für die Erkennung, Einstufung oder zeitgerechte Weiterleitung eines tierärztlichen Notfalls übernommen.
            </p>
            <p>
              (3) Vetpal ist nicht verpflichtet, medizinische Relevanz oder Dringlichkeit richtig zu erfassen. Es handelt sich ausschließlich um eine unterstützende Filterung auf Basis von KI-Logik.
            </p>
            <p>
              (4) Der Kunde wird darauf hingewiesen, dass zeitkritische Notfälle nicht ausschließlich über den Vetpal-Agenten gemeldet werden sollten.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 5 Nutzungsrechte und Lizenzbedingungen</h2>
            <p>
              (1) Der Kunde erhält ein einfaches, nicht übertragbares, auf die Vertragslaufzeit beschränktes Nutzungsrecht zur Verwendung des Vetpal-Agenten innerhalb seiner eigenen Praxis.
            </p>
            <p>
              (2) Eine Weitergabe oder unautorisierte Nutzung der Zugangsdaten oder der Technologie ist nicht gestattet.
            </p>
            <p>
              (3) Bei Verstoß behält sich Vetpal das Recht vor, den Vertrag außerordentlich zu kündigen und Schadensersatz zu fordern.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 6 Registrierung, Zugang und Verantwortung</h2>
            <p>
              (1) Zur Nutzung ist die Einrichtung eines Kontos erforderlich. Der Kunde ist für den Schutz seiner Zugangsdaten verantwortlich.
            </p>
            <p>
              (2) Bei Verlust oder Verdacht auf Missbrauch ist Vetpal unverzüglich zu informieren.
            </p>
            <p>
              (3) Vetpal übernimmt keine Haftung für Schäden, die aus unberechtigtem Zugriff auf Kundenkonten entstehen.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 7 Preise und Zahlungsbedingungen</h2>
            <p>
              (1) Die Preise richten sich nach der im Angebot vereinbarten Vergütung zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
            <p>
              (2) Sofern nicht anders vereinbart, erfolgt die Abrechnung monatlich im Voraus.
            </p>
            <p>
              (3) Bei Zahlungsverzug von mehr als 14 Tagen ist Vetpal berechtigt, den Zugang zu sperren und den Vertrag außerordentlich zu kündigen.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 8 Haftung und Haftungsausschluss</h2>
            <p>
              (1) Vetpal haftet ausschließlich für vorsätzliche oder grob fahrlässige Pflichtverletzungen.
            </p>
            <p>
              (2) Für Schäden, die aus Fehlinterpretationen, Nicht-Weiterleitungen oder verspäteter Reaktion auf tierärztliche Notfälle resultieren, wird keine Haftung übernommen.
            </p>
            <p>
              (3) Vetpal übernimmt keine Haftung für entgangene Behandlungen, Leid, Tierverlust oder Folgeschäden im Zusammenhang mit tierärztlichen Notfällen.
            </p>
            <p>
              (4) Für systembedingte Unterbrechungen (z. B. Serverausfälle, Netzprobleme) wird die Haftung ebenfalls ausgeschlossen, es sei denn, Vetpal hat diese vorsätzlich oder grob fahrlässig verursacht.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 9 Datenschutz und Vertraulichkeit</h2>
            <p>
              (1) Vetpal verarbeitet personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzgesetze (insb. DSGVO) und gemäß der unterzeichneten Auftragsverarbeitungsvereinbarung (AVV).
            </p>
            <p>
              (2) Daten, die sich auf Tierhalter oder deren Tiere beziehen, werden nur zum Zweck der Dienstleistungserbringung gespeichert und nicht an unbefugte Dritte weitergegeben.
            </p>
            <p>
              (3) Der Kunde verpflichtet sich, Tierhalter auf den Einsatz des Vetpal-Agenten und die KI-gestützte Kommunikation hinzuweisen.
            </p>
            <p>
              (4) Vetpal kann Telefonate automatisiert analysieren und speichern, sofern dies zur Verbesserung des Dienstes oder im Rahmen der vereinbarten Leistung erforderlich ist.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 10 Vertragslaufzeit und Kündigung</h2>
            <p>
              (1) Die Vertragslaufzeit und Kündigungsfristen richten sich nach dem individuellen Angebot.
            </p>
            <p>
              (2) Beide Parteien können den Vertrag aus wichtigem Grund fristlos kündigen, insbesondere bei wiederholter Pflichtverletzung.
            </p>
            <p>
              (3) Nach Beendigung des Vertrages ist der Zugang zur Plattform deaktiviert, und sämtliche gespeicherten Inhalte werden datenschutzkonform gelöscht.
            </p>

            <h2 className="text-xl font-semibold text-[#1A371C] mt-8 mb-4">§ 11 Schlussbestimmungen</h2>
            <p>
              (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
            </p>
            <p>
              (2) Gerichtsstand ist der Sitz der Vetpal UG (haftungsbeschränkt) i.G., sofern der Kunde Kaufmann ist.
            </p>
            <p>
              (3) Änderungen oder Ergänzungen dieses Vertrages bedürfen der Schriftform.
            </p>
            <p>
              (4) Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An ihre Stelle tritt eine wirtschaftlich vergleichbare Regelung.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 