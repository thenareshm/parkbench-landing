// components/SceneWelcome.tsx

import React from 'react';

// Scene 1: Welcome to the Park 🌿
// Visual: Users gently scroll down into an enchanting park scene with softly animated leaves and warm sunlight.
// Text Overlay:
// "Feeling overwhelmed or lonely?"
// "Spriggy welcomes you to Parkbench—a place for real, anonymous connection."

const SceneWelcome = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-sunbeam-beige relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-park-green/20 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-earth-brown mb-6">
          Feeling overwhelmed or lonely?
        </h1>
        <p className="text-xl md:text-2xl text-earth-brown/80">
          Spriggy welcomes you to Parkbench—a place for real, anonymous connection.
        </p>
      </div>
      {/* Placeholder for animated leaves */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Leaves will be added here with GSAP animations */}
      </div>
    </section>
  );
};

export default SceneWelcome;
  