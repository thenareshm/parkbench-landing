// components/SceneWelcome.tsx

import React from 'react';

// Scene 5: Spriggy's Wisdom Grove 🌳✨
// Visual: Grove with trees rapidly growing from seeds planted by Spriggy, glowing phrases of wisdom.
// Text Overlay:
// "Small insights create lasting change."
// "Grow stronger through shared wisdom."

const SceneWisdomGrove = () => {
  const wisdomTrees = [
    'Self-Discovery',
    'Growth',
    'Connection',
    'Understanding',
    'Healing',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-park-green/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-earth-brown mb-8">
          Small insights create lasting change.
        </h2>
        <p className="text-xl md:text-2xl text-earth-brown/80 mb-12">
          Grow stronger through shared wisdom.
        </p>

        {/* Wisdom grove visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {wisdomTrees.map((wisdom, index) => (
            <div
              key={wisdom}
              className="relative aspect-[3/4] bg-sunbeam-beige rounded-lg shadow-lg overflow-hidden"
            >
              {/* Tree container */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-park-green/20">
                {/* Tree shape placeholder - will be animated with GSAP */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-full bg-park-green/30" />
              </div>
              {/* Wisdom text */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <span className="text-earth-brown font-medium text-lg">
                  {wisdom}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Placeholder for Spriggy's planting animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spriggy and seed planting animations will be added here with GSAP */}
      </div>
    </section>
  );
};

export default SceneWisdomGrove;
  