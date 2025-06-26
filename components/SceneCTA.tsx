'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SceneCTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
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
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-park-green/20" />
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10" ref={ctaRef}>
        <h2 className="text-3xl md:text-5xl font-bold text-earth-brown mb-8">
          Join Spriggy's Community
        </h2>
        <div className="relative w-full max-w-3xl mx-auto aspect-video bg-park-green/10 rounded-lg shadow-xl mb-12">
          <div className="absolute inset-0 flex items-end justify-center pb-12">
            <div className="w-1/2 h-1/4 bg-earth-brown/20 rounded-lg">
              {/* Parkbench sign placeholder */}
            </div>
          </div>
        </div>
        <button
          className="px-8 py-4 bg-park-green text-sunbeam-beige text-xl font-bold rounded-full 
                     shadow-lg transform transition-transform hover:scale-105 hover:bg-park-green/90
                     focus:outline-none focus:ring-2 focus:ring-park-green focus:ring-offset-2"
        >
          Sit on Parkbench
        </button>
      </div>
    </section>
  );
};

export default SceneCTA;
