import Navbar from './components/Navbar';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

export function Model(props) {
  // const { scene } = useGLTF('../scene.gltf');
  // return <primitive object={scene} />;

  const group = useRef();
  const mesh = useRef();
  const { nodes, materials, animations } = useGLTF('/scene.gltf', '/scene.bin');
  const { actions } = useAnimations(animations, group);

  const { scene } = useGLTF('/scene.gltf');
  return <primitive object={scene} />;
}

useGLTF.preload('/scene.gltf');

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome Home Baby</h1>

      <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}
