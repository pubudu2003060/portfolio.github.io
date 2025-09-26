import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 200 }) {
  const mesh = useRef();
  const light = useRef();

  // Generate random positions for particles
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Blue theme colors
      colors[i * 3] = 0.2 + Math.random() * 0.3; // Red
      colors[i * 3 + 1] = 0.4 + Math.random() * 0.4; // Green
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // Blue
    }

    return { positions, colors };
  }, [count]);

  // Animate particles
  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (mesh.current) {
      mesh.current.rotation.x = time * 0.1;
      mesh.current.rotation.y = time * 0.15;

      // Update particle positions for floating effect
      const positions = mesh.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(time + i) * 0.01;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }

    if (light.current) {
      light.current.position.x = Math.sin(time) * 10;
      light.current.position.z = Math.cos(time) * 10;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.1} />
      <pointLight
        ref={light}
        position={[10, 10, 10]}
        intensity={0.5}
        color="#3b82f6"
      />

      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function ParticleSystem() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 75 }}
      style={{ background: "transparent" }}
    >
      <Particles count={150} />
    </Canvas>
  );
}

export default ParticleSystem;
