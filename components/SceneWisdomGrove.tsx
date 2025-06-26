'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SceneWisdomGrove = () => {
  const wisdomRef = useRef<HTMLDivElement>(null);
  const wisdomTrees = [
    'Self-Discovery',
    'Growth',
    'Connection',
    'Understanding',
    'Healing',
  ];

  useEffect(() => {
    if (wisdomRef.current) {
      gsap.fromTo(
        wisdomRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: wisdomRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-park-green/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10" ref={wisdomRef}>
        <h2 className="text-3xl md:text-5xl font-bold text-earth-brown mb-8">
          Small insights create lasting change.
        </h2>
        <p className="text-xl md:text-2xl text-earth-brown/80 mb-12">
          Grow stronger through shared wisdom.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {wisdomTrees.map((wisdom, index) => (
            <div
              key={wisdom}
              className="relative aspect-[3/4] bg-sunbeam-beige rounded-lg shadow-lg overflow-hidden border-4 border-park-green"
            >
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-park-green/20">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-full bg-park-green/30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <span className="text-earth-brown font-medium text-lg">{wisdom}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SceneWisdomGrove;
