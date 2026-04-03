import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Particles({ count = 250 }) {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

      // Cyan / Blue / Violet color palette
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Cyan
        colors[i * 3] = 0.02;
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else if (colorChoice < 0.66) {
        // Blue
        colors[i * 3] = 0.2 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.3 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.9 + Math.random() * 0.1;
      } else {
        // Violet
        colors[i * 3] = 0.5 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.9 + Math.random() * 0.1;
      }
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (mesh.current) {
      mesh.current.rotation.x = time * 0.05;
      mesh.current.rotation.y = time * 0.08;

      const positions = mesh.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(time + i) * 0.008;
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
      <ambientLight intensity={0.15} />
      <pointLight
        ref={light}
        position={[10, 10, 10]}
        intensity={0.4}
        color="#06b6d4"
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
          size={0.07}
          vertexColors
          transparent
          opacity={0.7}
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
      <Particles count={200} />
    </Canvas>
  );
}

export default ParticleSystem;
