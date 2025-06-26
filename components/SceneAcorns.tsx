// components/SceneWelcome.tsx

import React from 'react';

// Scene 2: Collecting Acorns of Connection 🌰
// Visual: Spriggy energetically hopping around, collecting glowing acorns labeled: "Belonging," "Empathy," "Trust," "Comfort."
// Text Overlay:
// "Collect moments that nurture your well-being."
// "Leave loneliness behind, one conversation at a time."

const SceneAcorns = () => {
  const acorns = ['Belonging', 'Empathy', 'Trust', 'Comfort'];

  return (
    <section className="min-h-screen flex items-center justify-center bg-park-green/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-earth-brown mb-8">
          Collect moments that nurture your well-being.
        </h2>
        <p className="text-xl md:text-2xl text-earth-brown/80 mb-12">
          Leave loneliness behind, one conversation at a time.
        </p>
        
        {/* Acorns container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {acorns.map((acorn, index) => (
            <div
              key={acorn}
              className="aspect-square rounded-full bg-sunbeam-beige flex items-center justify-center p-4 shadow-lg transform hover:scale-105 transition-transform"
            >
              <span className="text-earth-brown font-medium text-lg">{acorn}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Placeholder for Spriggy animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spriggy and acorn animations will be added here with GSAP */}
      </div>
    </section>
  );
};

export default SceneAcorns;
  