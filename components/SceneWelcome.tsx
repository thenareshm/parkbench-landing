'use client';
import React, { useRef, useEffect } from 'react';
import { SpriggyCanvas } from './SpriggyModel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SceneWelcome = () => {
  const spriggyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spriggyRef.current) {
      gsap.fromTo(
        spriggyRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: spriggyRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-sunbeam-beige relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-park-green/20 to-transparent pointer-events-none" />
      {/* Spriggy Animation */}
      <div ref={spriggyRef} className="w-full flex justify-center z-10 mb-8">
        <SpriggyCanvas />
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-earth-brown mb-6">
          Feeling overwhelmed or lonely?
        </h1>
        <p className="text-xl md:text-2xl text-earth-brown/80">
          Spriggy welcomes you to Parkbench—a place for real, anonymous connection.
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {/* Leaves animation with GSAP will be added here */}
      </div>
    </section>
  );
};

export default SceneWelcome;
