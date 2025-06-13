
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import { Group } from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface InteractiveSceneProps {
  mousePosition: { x: number; y: number };
}

export const InteractiveScene = ({ mousePosition }: InteractiveSceneProps) => {
  const groupRef = useRef<Group>(null);
  const cubeRef = useRef<Group>(null);
  const torusRef = useRef<Group>(null);

  // Animate objects to follow mouse movement
  useFrame(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        x: mousePosition.y * 0.1,
        y: mousePosition.x * 0.1,
        duration: 2,
        ease: "power2.out"
      });
    }
  });

  useGSAP(() => {
    // Initial entrance animation
    if (cubeRef.current && torusRef.current) {
      gsap.fromTo(cubeRef.current.scale, 
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 2, ease: "elastic.out(1, 0.3)" }
      );
      
      gsap.fromTo(torusRef.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 2, delay: 0.5, ease: "elastic.out(1, 0.3)" }
      );
    }
  }, []);

  return (
    <group ref={groupRef}>
      {/* Interactive Cube */}
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={cubeRef} position={[-4, 2, 0]}>
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <MeshTransmissionMaterial
              backside
              backsideThickness={5}
              thickness={2}
              transmission={1}
              ior={1.5}
              chromaticAberration={0.06}
              anisotropy={0.1}
              distortion={0.1}
              distortionScale={0.1}
              temporalDistortion={0.0}
              color="#3b82f6"
            />
          </mesh>
        </group>
      </Float>

      {/* Interactive Torus */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
        <group ref={torusRef} position={[4, -2, 0]}>
          <mesh>
            <torusGeometry args={[1.5, 0.6, 16, 32]} />
            <MeshTransmissionMaterial
              backside
              backsideThickness={5}
              thickness={2}
              transmission={1}
              ior={1.5}
              chromaticAberration={0.06}
              anisotropy={0.1}
              distortion={0.1}
              distortionScale={0.1}
              temporalDistortion={0.0}
              color="#6366f1"
            />
          </mesh>
        </group>
      </Float>

      {/* Floating Particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Float key={i} speed={0.5 + Math.random()} rotationIntensity={0.1} floatIntensity={0.1}>
          <mesh
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20
            ]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};