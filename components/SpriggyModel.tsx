'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export function SpriggyModel() {
  const gltf = useGLTF('/models/Spriggy.glb') as any;
  return (
    <group dispose={null}>
      <primitive object={gltf.scene} scale={[12.5, 12.5, 12.5]} position={[0, -1.2, 0]} />

    </group>
  );
}

export function SpriggyCanvas() {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <SpriggyModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
