'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SceneAcorns = () => {
  const acornRef = useRef<HTMLDivElement>(null);
  const acorns = ['Belonging', 'Empathy', 'Trust', 'Comfort'];

  useEffect(() => {
    if (acornRef.current) {
      gsap.fromTo(
        acornRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: acornRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-park-green/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10" ref={acornRef}>
        <h2 className="text-3xl md:text-5xl font-bold text-earth-brown mb-8">
          Collect moments that nurture your well-being.
        </h2>
        <p className="text-xl md:text-2xl text-earth-brown/80 mb-12">
          Leave loneliness behind, one conversation at a time.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {acorns.map((acorn) => (
            <div
              key={acorn}
              className="aspect-square rounded-full bg-sunbeam-beige flex items-center justify-center p-4 shadow-lg transform hover:scale-105 transition-transform border-4 border-park-green"
            >
              <span className="text-earth-brown font-medium text-lg">{acorn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SceneAcorns;
