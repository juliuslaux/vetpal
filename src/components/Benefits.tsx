'use client'

import React from 'react';
import { ClockIcon, PencilSquareIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: '24/7 Erreichbarkeit',
    description:
      'Mit Emma ist Ihre Praxis immer erreichbar. Auch bei mehreren Anrufen gleichzeitig läuft keine Anfrage ins Leere.',
    icon: ClockIcon,
  },
  {
    name: 'Echte Entlastung',
    description:
      'Emma übernimmt Anrufe, wenn es in der Praxis zu viel wird, und gibt Ihrem Team Raum für produktives Arbeiten ohne Unterbrechungen.',
    icon: UserGroupIcon,
  },
  {
    name: 'Volle Kontrolle',
    description:
      'Emma passt sich Ihren individuellen Präferenzen an. In unserer Web-App können Sie Emma individuell anpassen, ganz nach Ihren Wünschen.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Datensicherheit',
    description:
      'Wir legen größten Wert auf das Thema Datenschutz. Mit Emma erfüllen wir alle Vorgaben der DSGVO – sowohl bei der Datenverarbeitung als auch bei der Datenspeicherung.',
    icon: ShieldCheckIcon,
  },
]

export default function Benefits() {
  return (
    <div id="benefits" className="bg-[#f7f7f3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1A371C] sm:text-4xl font-[Instrument_Sans]">
            Deswegen setzen Tierärzte auf Emma
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <dt className="text-lg/7 font-semibold text-gray-900 font-[Instrument_Sans]">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-[#E2EDD0] mx-auto">
                    <feature.icon aria-hidden="true" className="size-7 text-[#1A371C]" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-lg/7 text-gray-600 font-[Instrument_Sans]">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
