import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { useInView } from 'react-intersection-observer';
import { Float, Stars } from '@react-three/drei';

interface HeroSceneProps {
  mousePosition: React.RefObject<{ x: number; y: number }>;
}

const HeroScene: React.FC<HeroSceneProps> = ({ mousePosition }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [ref, inView] = useInView();

  useFrame((state) => {
    if (groupRef.current && mousePosition.current) {
      // Smooth follow mouse movement
      groupRef.current.rotation.y = MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition.current.x * 0.2,
        0.05
      );
      groupRef.current.rotation.x = MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePosition.current.y * 0.2,
        0.05
      );
    }
  });

  return (
    <>
      <color attach="background" args={['#080420']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.7} color="#9370DB" />
      <directionalLight position={[-10, -10, -5]} intensity={0.2} color="#FFFFFF" />
      
      {/* Stars in the background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* 3D Objects */}
      <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Dodecahedron position={[-2, 1, 0]} scale={0.6} color="#8A2BE2" />
          <Cube position={[2, -1, -2]} scale={0.7} color="#9370DB" />
          <Sphere position={[3, 1.5, -4]} scale={1.2} color="#B19CD9" />
          <Torus position={[-3, -1.5, -2]} scale={0.6} color="#4B0082" />
        </Float>
      </group>

      {/* Glowing orb in center */}
      <mesh position={[0, 0, -3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#F0E6FF" 
          emissive="#8A2BE2"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </>
  );
};

// Individual shape components
const Cube: React.FC<{ position: [number, number, number], scale: number, color: string }> = ({ position, scale, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere: React.FC<{ position: [number, number, number], scale: number, color: string }> = ({ position, scale, color }) => {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Dodecahedron: React.FC<{ position: [number, number, number], scale: number, color: string }> = ({ position, scale, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Torus: React.FC<{ position: [number, number, number], scale: number, color: string }> = ({ position, scale, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[0.7, 0.3, 16, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default HeroScene;