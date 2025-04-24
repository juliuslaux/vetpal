'use client'

import React from 'react'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Wie funktioniert die Einführung von Emma?",
    answer:
      "Die Einführung von Emma erfolgt in drei einfachen Schritten:\n\n" +
      "1. Demo Gespräch: In einem ersten unverbindlichen Gespräch präsentieren wir Ihnen, wie Emma in Ihrer Praxis eingesetzt werden kann.\n\n" +
      "2. Personalisierung: In ca. 60 Minuten passen wir Emma an Ihre Praxis an. Gemeinsam legen wir fest, welche Anrufe sie übernimmt und welche Präferenzen und Einschränkungen gelten.\n\n" +
      "3. Emma am Apparat: In etwa 15 Minuten richten wir mit Ihnen die Telefonweiterleitung ein. Ab diesem Moment nimmt Emma Anrufe entgegen und begeistert Ihre Patienten.",
  },
  {
    question: "Berücksichtigt Emma die Regeln meiner Praxis?",
    answer:
      "Ja. Emma ist individuell konfigurierbar passt sich vollständig an Ihre Vorgaben an. Durch ihre umfangreiche Erfahrung aus Tierarztpraxen kennt Emma zudem viele Regeln und Abhängigkeiten, ohne diese beigebracht bekommen zu müssen.",
  },
  {
    question: "Muss ich für Emma meine Telefonanlage oder -nummer wechseln?",
    answer:
      "Nein. Alles, was es braucht, ist eine Weiterleitung der eingehenden Anrufe an Emma. Ihre Patienten wählen die gleiche Nummer wie bisher und Emma geht ans Telefon.",
  },
  {
    question: "Ich arbeite in einer Praxis. Nimmt mir Emma meinen Job weg?",
    answer:
      "Nein, ganz im Gegenteil. Als TFA gehören Sie zu einer der am stärksten unterbesetzten Berufsgruppen Deutschlands. Durch die immer schlimmer werdende Personalsituation sowie den demographischen Wandel wird es zunehmend schwierig, eine hochwertige medizinische Versorgung sicherzustellen. Mit Emma möchten wir das Gesundheitspersonal so entlasten, dass es sich um die Patientenversorgung kümmern kann. Sie müssen sich wegen Emma keine Sorgen um Ihren Job machen.",
  },
  {
    question: "Kann Emma mit meiner Praxissoftware integriert werden?",
    answer:
      "Ja, Emma kann mit den gängisten Praxisverwaltungssystemen integriert werden. Aktuell testen wir die Integration mit ausgewählten Kunden. Wenn Sie Interesse daran haben, kontaktieren Sie uns per E-Mail unter info@vetpal.de",
  },
  {
    question: "Ist Emma datenschutzkonform?",
    answer:
      "Ja. Wir legen größten Wert auf das Thema Datenschutz. Mit Emma erfüllen wir die Vorgaben der DSGVO – sowohl bei der Datenverarbeitung als auch bei der Datenspeicherung. Vor Ihrem Start mit Emma unterzeichnen wir einen Datenschutzvertrag, der die Sicherheit und Integrität Ihrer Patientendaten sicherstellt.",
  },
  {
    question: "Wieviel kostet Emma?",
    answer:
      "Die Kosten für Emma variieren je nach Ihren individuellen Bedürfnissen und dem Umfang der gewünschten Funktionen. Wir bieten verschiedene Pakete für Praxen unterschiedlicher Größe. Kontaktieren Sie uns für ein maßgeschneidertes Angebot.",
  },
]

export default function Faq() {
  return (
    <div id="faqs" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1A371C] sm:text-4xl font-[Instrument_Sans] text-center">
            Häufige Fragen.
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold font-[Instrument_Sans]">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600 font-[Instrument_Sans]">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
