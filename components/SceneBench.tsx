'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SceneBench = () => {
  const benchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (benchRef.current) {
      gsap.fromTo(
        benchRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: benchRef.current,
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
      <div className="absolute inset-0 bg-park-green/10" />
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10" ref={benchRef}>
        <h2 className="text-3xl md:text-5xl font-bold text-earth-brown mb-8">
          Feel deeply heard, deeply understood.
        </h2>
        <p className="text-xl md:text-2xl text-earth-brown/80 mb-12">
          Every conversation sparks healing.
        </p>
        <div className="relative w-full max-w-3xl mx-auto aspect-video bg-park-green/20 rounded-lg shadow-xl">
          {/* Simple bench illustration */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-earth-brown rounded-t-md shadow-lg" />
          {/* Legs */}
          <div className="absolute bottom-2 left-1/3 w-2 h-8 bg-earth-brown/70 rounded" />
          <div className="absolute bottom-2 right-1/3 w-2 h-8 bg-earth-brown/70 rounded" />
          {/* Two "people" as circles */}
          <div className="absolute bottom-14 left-[38%] w-10 h-10 bg-park-green rounded-full border-4 border-sunbeam-beige" />
          <div className="absolute bottom-14 left-[53%] w-10 h-10 bg-park-green rounded-full border-4 border-sunbeam-beige" />
        </div>
      </div>
    </section>
  );
};

export default SceneBench;
