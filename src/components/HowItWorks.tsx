'use client'

import React, { useEffect, useRef, useState } from 'react';
import { PhoneIcon, CheckIcon, ChatBubbleLeftRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Anrufweiterleitung',
    description: 'Ihre Patienten rufen wie gewohnt in Ihrer Praxis an. Dort klingelt aber nicht das Telefon - stattdessen wird der Anruf an Emma weitergeleitet.',
    icon: PhoneIcon,
    color: '#e2edd0'
  },
  {
    title: 'Emma geht an das Telefon',
    description: 'Emma nimmt 24/7 Anrufe professionell entgegen, führt Konversationen und löst Fragen. Dank intelligenter Spracherkennung ordnet Emma das Anliegen richtig ein und leitet die logischen Schritte ein.',
    icon: CheckIcon,
    color: '#e2edd0'
  },
  {
    title: 'Benachrichtigung',
    description: 'Nach jedem Anruf erhalten Sie eine  E-Mail mit allen wichtigen Informationen zum Anruf inklusive eines genauen Transkriptes des Gesprächs. So sind Sie jederzeit bestens informiert und haben alles im Blick!',
    icon: ChatBubbleLeftRightIcon,
    color: '#e2edd0'
  },
  {
    title: 'Feedback',
    description: 'Mit wenigen Klicks können Sie Emma Feedback zu ihren Anrufen geben. Sie lernt aus jeder Rückmeldung und stellt sich so immer besser auf Ihre Praxis ein.',
    icon: DocumentTextIcon,
    color: '#e2edd0'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top, bottom } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in view
      if (top < windowHeight && bottom > 0) {
        // Calculate which step is in view
        stepsRef.current.forEach((stepEl, index) => {
          if (!stepEl) return;
          
          const stepRect = stepEl.getBoundingClientRect();
          const stepTop = stepRect.top;
          const stepBottom = stepRect.bottom;
          
          // If step is in the middle of the screen, set it as active
          if (stepTop < windowHeight * 0.6 && stepBottom > windowHeight * 0.4) {
            setActiveStep(index);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:flex">
          {/* Left sticky text */}
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1A371C] sm:text-4xl font-[Instrument_Sans]">
              Und wie funktioniert Emma?
            </h2>
            <p className="mt-6 text-lg/7 text-gray-600 font-[Instrument_Sans]">
              Vom Anruf bis zur Terminbestätigung - ein reibungsloser Prozess für die Patienten und die Praxis.
            </p>
          </div>
          
          {/* Right timeline */}
          <div className="mt-16 lg:mt-0 lg:w-1/2 relative">
            {/* Animated line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200">
              <div 
                className="absolute left-0 top-0 w-full bg-[#e2edd0] transition-all duration-500" 
                style={{ 
                  height: `${Math.min(100, (activeStep / (steps.length - 1)) * 100)}%` 
                }}
              />
            </div>
            
            {/* Steps */}
            <div className="relative pl-14 space-y-20">
              {steps.map((step, index) => (
                <div 
                  key={step.title}
                  ref={el => { stepsRef.current[index] = el; }}
                  className={`transition-opacity duration-500 ${
                    index <= activeStep ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  {/* Circle icon */}
                  <div 
                    className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="h-6 w-6 text-[#1A371C]" aria-hidden="true" />
                  </div>
                  
                  {/* Step content */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A371C] font-[Instrument_Sans]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-lg text-gray-600 font-[Instrument_Sans]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 