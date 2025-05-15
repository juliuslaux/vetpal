'use client'

import React from 'react'

export default function Cts() {
  return (
    <div id="contact" className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-[#edede4] rounded-3xl px-8 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#1A371C] sm:text-5xl font-[Instrument_Sans]">
                Bereit für die Zukunft Ihrer Praxis?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-[#000000] font-[Instrument_Sans]">
                Jetzt kostenfrei Testzugang zu Emma erhalten. Wir richten Emma unverbindlich für Ihre Praxis ein und zeigen Ihnen, wie einfach und effizient Ihre Telefonanlage mit Emma sein kann.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-x-6">
                <a
                  href="/kontakt"
                  className="w-full sm:w-auto rounded-xl bg-[#1A371C] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#2A472C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A371C] font-[Instrument_Sans]"
                >
                  Jetzt Testzugang anfragen
                </a>
                <a href="#" className="text-sm/6 font-semibold text-[#1A371C] font-[Instrument_Sans]">
                  Mehr erfahren <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
