import React from 'react';

// Scene 4: Parkbench of Healing Conversations 🪑
// Visual: Cozy park bench with figures in meaningful conversations.
// Text Overlay:
// "Feel deeply heard, deeply understood."
// "Every conversation sparks healing."

const SceneBench = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-sunbeam-beige relative overflow-hidden">
      <div className="absolute inset-0 bg-park-green/10" />
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-earth-brown mb-8">
          Feel deeply heard, deeply understood.
        </h2>
        <p className="text-xl md:text-2xl text-earth-brown/80 mb-12">
          Every conversation sparks healing.
        </p>

        {/* Bench visualization container */}
        <div className="relative w-full max-w-3xl mx-auto aspect-video bg-park-green/20 rounded-lg shadow-xl">
          {/* Placeholder for bench and figures */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/3 h-1/3 bg-earth-brown/20 rounded-lg">
              {/* Bench shape placeholder */}
            </div>
          </div>
          {/* Placeholder for conversation bubbles */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Conversation animations will be added here with GSAP */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SceneBench;
  