'use client'

import React, { useState, useRef } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';

const exampleCards = [
  {
    title: 'Terminbuchung',
    description: 'Emma erkennt, ob es sich um einen Neu- oder Bestandskunden handelt. Sie nimmt relevante Informationen auf und erstellt ein Rückrufticket oder leitet bei Bedarf an die Praxis weiter – ganz ohne Wartezeit für den Anrufer.',
    audioSrc: '/audio/neukunde-terminbuchung.MP3'
  },
  {
    title: 'Behandlungsinformationen',
    description: 'Ob Kastration, Impfungen oder Nachsorge – Emma erklärt Abläufe und gibt wichtige Hinweise zur Vorbereitung. So fühlen sich Tierhalter bestens informiert, auch wenn gerade niemand in der Praxis erreichbar ist.',
    audioSrc: '/audio/behandlungsinformationen.MP3'
  },
  {
    title: 'Notfallweiterleitung',
    description: 'Im Notfall zählt jede Sekunde. Emma erkennt kritische Situationen sofort und verbindet den Anruf direkt mit der Praxis oder der Notfallversorgung – ohne Umwege.',
    audioSrc: '/audio/notfallweiterleitung.MP3'
  },
  {
    title: 'Rückrufanfragen',
    description: 'Wenn es gerade stressig ist, nimmt Emma Rückrufwünsche entgegen, dokumentiert alle Details und sorgt dafür, dass das Praxisteam bestens vorbereitet zurückrufen kann – und der Anrufer sich abgeholt fühlt.',
    audioSrc: '/audio/Rückrufticket.MP3'
  },
  {
    title: 'Organisatorische und administrative Fragen',
    description: 'Emma hilft bei Fragen zu Praxisinformationen, Preisen und Rechnungen und sorgt dafür, dass der Anrufer alle nötigen Informationen erhält.',
    audioSrc: '/audio/organisatorische-frage.MP3'
  },
  {
    title: 'Medizinische Fragen',
    description: 'Emma hilft bei Fragen zu Medikamenten, Symptomen und allen anderen Themen, die Ihre Patienten haben.',
    audioSrc: '/audio/medizinische-frage.MP3'
  }
];

export default function Examples() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleAudio = (index: number) => {
    if (playingIndex === index) {
      if (audioRefs.current[index]) {
        audioRefs.current[index]?.pause();
        setPlayingIndex(null);
      }
    } else {
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex]?.pause();
      }
      
      if (audioRefs.current[index]) {
        audioRefs.current[index]?.load();
        const playPromise = audioRefs.current[index]?.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setPlayingIndex(index);
            })
            .catch(error => {
              console.error("Playback failed:", error);
              setPlayingIndex(null);
            });
        }
      }
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      const scrollPosition = sliderRef.current.scrollLeft;
      const newSlide = Math.round(scrollPosition / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div id="examples" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1A371C] sm:text-4xl font-[Instrument_Sans]">
            Emma führt Telefonate wie Sie es tun würden - ein paar Beispiele
          </h2>
        </div>
        
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Cards Container */}
          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="overflow-x-auto scrollbar-none snap-x snap-mandatory sm:overflow-visible"
          >
            <div className="grid grid-flow-col sm:grid-flow-row auto-cols-[100%] sm:auto-cols-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {exampleCards.map((card, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl bg-[#f7f7f3] p-8 flex flex-col items-center text-center snap-center"
                >
                  <div className="mb-4">
                    <button
                      onClick={() => toggleAudio(index)}
                      className="bg-white/80 w-14 h-14 rounded-full flex items-center justify-center hover:bg-white transition-all"
                      aria-label={playingIndex === index ? "Pause audio" : "Play audio"}
                    >
                      {playingIndex === index ? (
                        <PauseIcon className="h-7 w-7 text-[#1A371C]" />
                      ) : (
                        <PlayIcon className="h-7 w-7 text-[#1A371C]" />
                      )}
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#1A371C] font-[Instrument_Sans] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#4a4a4a] font-[Instrument_Sans]">
                    {card.description}
                  </p>
                  
                  <audio 
                    ref={el => { audioRefs.current[index] = el; }} 
                    className="hidden"
                    onEnded={() => setPlayingIndex(null)}
                  >
                    <source src={card.audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {exampleCards.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide ? 'w-6 bg-[#1A371C]' : 'w-1.5 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 