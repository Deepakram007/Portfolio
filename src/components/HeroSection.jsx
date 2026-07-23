import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import './HeroSection.css';

const RotatingCube = () => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color="#00f3ff" wireframe />
    </mesh>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#bc13fe" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <RotatingCube />
        </Canvas>
      </div>
      
      <div className="hero-content container">
        <h2 className="hero-subtitle">Hello, I'm</h2>
        <h1 className="hero-title text-gradient">Deepakram S</h1>
        <p className="hero-description">
          Computer Science undergraduate building distributed systems, AI-powered tools, and full-stack platforms.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
