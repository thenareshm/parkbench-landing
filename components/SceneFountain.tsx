// components/SceneWelcome.tsx

import React from 'react';

// Scene 3: Fountain of Openness 💦
// Visual: Animated fountain; water words transition from "Anxiety," "Fear," "Isolation" to "Relief," "Openness," "Peace."
// Text Overlay:
// "Express yourself freely, anonymously."
// "Let your feelings flow without judgment."

const SceneFountain = () => {
  const transformations = [
    { from: 'Anxiety', to: 'Relief' },
    { from: 'Fear', to: 'Openness' },
    { from: 'Isolation', to: 'Peace' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-park-green/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-earth-brown mb-8">
          Express yourself freely, anonymously.
        </h2>
        <p className="text-xl md:text-2xl text-earth-brown/80 mb-12">
          Let your feelings flow without judgment.
        </p>

        {/* Fountain transformations container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {transformations.map(({ from, to }, index) => (
            <div
              key={index}
              className="relative p-6 bg-sunbeam-beige rounded-lg shadow-lg"
            >
              <div className="mb-4 text-earth-brown/60 line-through">
                {from}
              </div>
              <div className="text-earth-brown font-bold">
                {to}
              </div>
              {/* Placeholder for water animation */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Water animation will be added here with GSAP */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Placeholder for fountain animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main fountain animation will be added here with GSAP */}
      </div>
    </section>
  );
};

export default SceneFountain;
  