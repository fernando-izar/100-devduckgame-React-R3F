import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function BlockLimbo({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const y = Math.sin(time + timeOffset) + 1.15;
    obstacle.current.setNextKinematicTranslation({
      x: position[0],
      y: position[1] + y,
      z: position[2],
    });
  });

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const floor2Material = new THREE.MeshStandardMaterial({
    color: "greenyellow",
  });
  const obstacleMaterial = new THREE.MeshStandardMaterial({
    color: "orangered",
  });

  return (
    <group position={position}>
      {/* Floor2 */}
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      >
        <meshStandardMaterial color="limegreen" />
      </mesh>
      {/* Obstacle */}
      <RigidBody
        ref={obstacle}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}
