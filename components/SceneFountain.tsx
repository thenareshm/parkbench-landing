'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SceneFountain = () => {
  const fountainRef = useRef<HTMLDivElement>(null);
  const transformations = [
    { from: 'Anxiety', to: 'Relief' },
    { from: 'Fear', to: 'Openness' },
    { from: 'Isolation', to: 'Peace' },
  ];

  useEffect(() => {
    if (fountainRef.current) {
      gsap.fromTo(
        fountainRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: fountainRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-sunbeam-beige relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10" ref={fountainRef}>
        <h2 className="text-3xl md:text-5xl font-bold text-earth-brown mb-8">
          Express yourself freely, anonymously.
        </h2>
        <p className="text-xl md:text-2xl text-earth-brown/80 mb-12">
          Let your feelings flow without judgment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {transformations.map(({ from, to }, index) => (
            <div
              key={index}
              className="relative p-6 bg-park-green/10 rounded-lg shadow-lg"
            >
              <div className="mb-4 text-earth-brown/60 line-through text-xl">{from}</div>
              <div className="text-earth-brown font-bold text-2xl">{to}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SceneFountain;
