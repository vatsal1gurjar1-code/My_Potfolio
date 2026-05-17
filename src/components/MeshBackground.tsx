import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { createNoise2D } from 'simplex-noise';
import * as THREE from 'three';

const TerrainGrid = () => {
  // Create a single geometry instance to be shared by both lines and points
  const geometry = useMemo(() => {
    // 100x100 size, 40x40 segments for that classic low-poly grid look
    return new THREE.PlaneGeometry(100, 100, 40, 40);
  }, []);
  
  const noise2D = useMemo(() => createNoise2D(), []);
  const clockRef = useRef(0);

  useFrame((state, delta) => {
    // Slow continuous forward scrolling illusion
    clockRef.current += delta * 1.5;
    const time = clockRef.current;
    
    const positions = geometry.attributes.position.array;
    
    // Displace vertices to simulate rolling, jagged mountains
    for (let i = 0, j = 0; i < positions.length; i += 3, j++) {
      const x = positions[i];
      const y = positions[i + 1] + time; // Move forward in time
      
      // Lower frequency makes the mountains much wider and less chaotic
      let baseNoise = noise2D(x * 0.02, y * 0.02);
      
      // Reduce the extreme height multiplier so they don't stretch into tall spikes
      let elevation = Math.sign(baseNoise) * Math.pow(Math.abs(baseNoise), 1.2) * 5.0; 
      
      // Add very subtle mid-level detail so it stays mostly clean
      elevation += noise2D(x * 0.05, y * 0.05) * 1.5; 
      
      // Valley in the center using smoothstep logic (creates a path in the middle)
      const distanceToCenter = Math.abs(x);
      const valleyFactor = Math.min(1, distanceToCenter / 15);
      
      positions[i + 2] = elevation * valleyFactor; 
    }
    
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -5, 10]}>
      {/* 1. The Wireframe Lines */}
      <mesh geometry={geometry}>
        <meshBasicMaterial 
          color="#3b82f6" // Classic neon blue
          wireframe={true}
          transparent={true}
          opacity={0.4}
        />
      </mesh>
      
      {/* 2. The Glowing Vertices (Dots at intersections) */}
      <points geometry={geometry}>
        <pointsMaterial 
          color="#93c5fd" // Lighter, brighter cyan for the glowing dots
          size={0.15} // Size of the glowing dots
          transparent={true}
          opacity={0.9}
        />
      </points>
    </group>
  );
};

export function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-1000">
      
      {/* Light Mode Vignette (Fades edges perfectly into white background) */}
      <div 
        className="absolute inset-0 z-10 dark:hidden" 
        style={{ 
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(248,250,252,0.85) 80%), linear-gradient(to bottom, rgba(248,250,252,1) 0%, rgba(248,250,252,0) 40%, rgba(248,250,252,0) 60%, rgba(248,250,252,1) 100%)" 
        }} 
      />

      {/* Dark Mode Vignette (Fades edges perfectly into black background) */}
      <div 
        className="absolute inset-0 z-10 hidden dark:block" 
        style={{ 
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(2,6,23,0.85) 80%), linear-gradient(to bottom, rgba(2,6,23,1) 0%, rgba(2,6,23,0) 40%, rgba(2,6,23,0) 60%, rgba(2,6,23,1) 100%)" 
        }} 
      />
      
      <Canvas camera={{ position: [0, 2, 18], fov: 60 }} dpr={[1, 2]}>
        <TerrainGrid />
      </Canvas>
    </div>
  );
}
