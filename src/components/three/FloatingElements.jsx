import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

function FloatingElement({ position, color, type = "sphere", scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
    }
  });

  const GeometryComponent = {
    sphere: Sphere,
    box: Box,
    torus: Torus,
  }[type];

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <GeometryComponent
        ref={meshRef}
        position={position}
        scale={scale}
        args={type === "torus" ? [0.5, 0.2, 16, 100] : undefined}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </GeometryComponent>
    </Float>
  );
}

function CodeSymbols() {
  const symbols = ["</", "{", "}", "()", "[]", "fn", "++", "=>"];

  return (
    <>
      {symbols.map((symbol, index) => (
        <Float
          key={index}
          speed={2 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={3}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
        >
          <mesh>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function FloatingElements() {
  const elements = [
    { position: [-8, 3, -2], color: "#3b82f6", type: "sphere", scale: 0.8 },
    { position: [6, -2, -3], color: "#60a5fa", type: "box", scale: 0.6 },
    { position: [-4, -4, -1], color: "#93c5fd", type: "torus", scale: 0.5 },
    { position: [8, 4, -4], color: "#dbeafe", type: "sphere", scale: 0.4 },
    { position: [-6, -1, -5], color: "#1e40af", type: "box", scale: 0.7 },
    { position: [4, 2, -2], color: "#3b82f6", type: "torus", scale: 0.6 },
    { position: [-2, 5, -3], color: "#60a5fa", type: "sphere", scale: 0.5 },
    { position: [7, -3, -1], color: "#93c5fd", type: "box", scale: 0.4 },
  ];

  return (
    <>
      {elements.map((element, index) => (
        <FloatingElement
          key={index}
          position={element.position}
          color={element.color}
          type={element.type}
          scale={element.scale}
        />
      ))}
      <CodeSymbols />
    </>
  );
}

export default FloatingElements;
