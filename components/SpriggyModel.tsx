'use client';
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export function SpriggyModel() {
  const gltf = useGLTF('/models/Spriggy.glb') as any;
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: '#8B5E3C',
            roughness: 0.8,
            metalness: 0.1,
          });
        }
      });
    }

    if (group.current) {
      gsap.to(group.current.position, {
        y: 2,
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      gsap.to(group.current.scale, {
        x: 4,
        y: 4,
        z: 4,
        scrollTrigger: {
          trigger: 'body',
          start: '20% top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <group ref={group} dispose={null} position={[0, -1, 0]} scale={[2.5, 2.5, 2.5]}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export function SpriggyCanvas() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0">
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
