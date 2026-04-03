import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus } from "@react-three/drei";

function FloatingElement({ position, color, type = "sphere", scale = 1 }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
    }
  });

  const GeometryComponent = {
    sphere: Sphere,
    box: Box,
    torus: Torus,
  }[type];

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2.5}>
      <GeometryComponent
        ref={meshRef}
        position={position}
        scale={scale}
        args={type === "torus" ? [0.5, 0.2, 16, 100] : undefined}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.5}
        />
      </GeometryComponent>
    </Float>
  );
}

function FloatingElements() {
  const elements = [
    { position: [-8, 3, -2], color: "#06b6d4", type: "sphere", scale: 0.8 },
    { position: [6, -2, -3], color: "#3b82f6", type: "box", scale: 0.6 },
    { position: [-4, -4, -1], color: "#8b5cf6", type: "torus", scale: 0.5 },
    { position: [8, 4, -4], color: "#22d3ee", type: "sphere", scale: 0.4 },
    { position: [-6, -1, -5], color: "#6366f1", type: "box", scale: 0.7 },
    { position: [4, 2, -2], color: "#06b6d4", type: "torus", scale: 0.6 },
    { position: [-2, 5, -3], color: "#3b82f6", type: "sphere", scale: 0.5 },
    { position: [7, -3, -1], color: "#8b5cf6", type: "box", scale: 0.4 },
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
    </>
  );
}

export default FloatingElements;
