import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { createNoise2D } from 'simplex-noise';
import * as THREE from 'three';

const TerrainPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);
  
  const noise2D = useMemo(() => createNoise2D(), []);
  const clockRef = useRef(0);

  // High resolution plane geometry
  const width = 100;
  const height = 100;
  const wSegments = 80;
  const hSegments = 80;

  useFrame((state, delta) => {
    if (!geomRef.current) return;
    
    // Slow continuous forward scrolling illusion
    clockRef.current += delta * 1.5;
    const time = clockRef.current;
    
    const positions = geomRef.current.attributes.position.array;
    
    // Displace vertices to simulate rolling mountains
    for (let i = 0, j = 0; i < positions.length; i += 3, j++) {
      const x = positions[i];
      // Offset the Y sampling coordinate by time
      const y = positions[i + 1] + time; 
      
      // Multi-octave simplex noise with exponential sharpening for pointier mountains
      let baseNoise = noise2D(x * 0.04, y * 0.04);
      let elevation = Math.sign(baseNoise) * Math.pow(Math.abs(baseNoise), 1.5) * 12.0; // Sharp, tall primary peaks
      
      elevation += noise2D(x * 0.1, y * 0.1) * 3.0; // Mid-level jaggedness
      elevation += noise2D(x * 0.2, y * 0.2) * 1.0; // High-frequency details
      
      // Valley in the center using smoothstep logic
      const distanceToCenter = Math.abs(x);
      const valleyFactor = Math.min(1, distanceToCenter / 15);
      
      positions[i + 2] = elevation * valleyFactor; 
    }
    
    geomRef.current.attributes.position.needsUpdate = true;
    // Don't compute normals every frame to save massive CPU overhead (wireframe doesn't need shading)
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -5, 10]}>
      <planeGeometry ref={geomRef} args={[width, height, wSegments, hSegments]} />
      <meshBasicMaterial 
        color="#38bdf8" // Brighter, glowing neon blue to match the image
        wireframe={true}
        transparent={true}
        opacity={0.8} // Increased opacity for better visibility
      />
    </mesh>
  );
};

export function MeshLandscape() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-slate-950 dark:bg-[#020617]">
      {/* Heavy vignette gradient for realistic depth fading */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ 
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.85) 80%), linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.95) 100%)" 
        }} 
      />
      <Canvas camera={{ position: [0, 2, 18], fov: 60 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#020617', 5, 35]} />
        <TerrainPlane />
      </Canvas>
    </div>
  );
}
