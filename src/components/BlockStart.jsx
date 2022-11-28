import * as THREE from "three";
import { Float, Text } from "@react-three/drei";

export default function BlockStart({ position = [0, 0, 0] }) {
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });

  return (
    <group position={position}>
      {/* Floor1 */}
      <Float floatIntensity={0.75} rotationIntensity={0.85}>
        <Text
          font="./bebas-neue-v9-latin-regular.woff"
          scale={2}
          maxWidth={0.25}
          lineHeight={0.75}
          textAlign="right"
          position={[0.75, 0.65, 0]}
          rotation-y={-0.25}
          color={"#FF9F33"}
        >
          devDuck Game
          <meshBasicMaterial toneMapped={false} />
        </Text>
      </Float>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      >
        <meshStandardMaterial color="lime" />
      </mesh>
    </group>
  );
}
