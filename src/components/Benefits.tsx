'use client'

import React from 'react';
import { ArrowTrendingUpIcon, ClockIcon, PencilSquareIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: '24/7 Erreichbarkeit',
    description:
      'Ermöglichen Sie 24/7 Erreichbarkeit. Keine verpassten Neukundenanfragen mehr, auch bei parallelen Anrufen.',
    icon: ClockIcon,
  },
  {
    name: 'Kein Stress mehr am Telefon',
    description:
      'Keine ständigen Anrufe mehr – konzentrieren Sie sich voll auf Ihre PatientInnen und telefonieren Sie nur, wenn Sie es möchten.',
    icon: UserGroupIcon,
  },
  {
    name: 'Praxis-Effizienz steigern',
    description:
      'Arbeiten Sie unterbrechungsfrei – klare Aufgabenverteilung und automatische Terminbuchungen steigern die Produktivität Ihres Teams.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Individuell anpassbar',
    description:
      'In unserer Web-App können Sie Emma individuell konfigurieren und entscheiden welche Anrufe Emma abnimmt, wie sie sich verhält und welche Informationen sie sammelt.',
    icon: PencilSquareIcon,
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
