import * as THREE from 'three';
import { useRef, useMemo, useEffect } from 'react'; // Import useEffect
import { useFrame } from '@react-three/fiber';
import { useTheme } from './ThemeProvider'; // Import useTheme

interface StarryBackgroundProps {
  count?: number;
  depth?: number;
  size?: number;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({ count = 5000, depth = 100, size = 0.75 }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const colorAttributeRef = useRef<THREE.BufferAttribute>(null!); // Ref for the color attribute
  const { theme } = useTheme(); // Get current theme

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    // Determine base color based on theme
    const baseColor = theme === 'light' ? new THREE.Color('#000000') : new THREE.Color('#FFFFFF');

    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3 + 0] = (Math.random() - 0.5) * 200 * (depth / 50) ; // x, spread wider with depth
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200 * (depth / 50) ; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * depth * 20; // z, spread much further in z

      // Color variation
      const randomFactor = Math.random() * 0.5 + 0.5; // 0.5 to 1.0
      const starColor = baseColor.clone().multiplyScalar(randomFactor);
      colors[i * 3 + 0] = starColor.r;
      colors[i * 3 + 1] = starColor.g;
      colors[i * 3 + 2] = starColor.b;
    }
    return { positions, colors };
  }, [count, depth, theme]); // Add theme to dependency array

  // Effect to update the color attribute when particles.colors changes
  useEffect(() => {
    if (colorAttributeRef.current) {
      // The array prop of bufferAttribute should get a new instance from useMemo,
      // and R3F should handle this. Setting needsUpdate = true is an explicit way
      // to ensure the GPU gets the new data.
      colorAttributeRef.current.needsUpdate = true;
    }
  }, [particles.colors]); // Trigger when the colors array instance changes

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.005;
      pointsRef.current.rotation.y += delta * 0.007;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          ref={colorAttributeRef} // Assign ref to the color attribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        sizeAttenuation={true} // Stars further away appear smaller
        vertexColors={true} // Use colors from bufferAttribute
        transparent={true}
        opacity={0.9}
        depthWrite={false} // Important for blending with other transparent objects
      />
    </points>
  );
};

export default StarryBackground;
