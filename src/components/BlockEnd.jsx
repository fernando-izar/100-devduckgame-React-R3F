import * as THREE from "three";
import { Float, Text, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function BlockEnd({ position = [0, 0, 0] }) {
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });

  const duck = useGLTF("duck.glb");

  duck.scene.children[0].children[1].castShadow = true;

  return (
    <group position={position}>
      {/* Floor1 */}
      <Float speed={10} floatIntensity={4} rotationIntensity={5}>
        <Text
          font="./bebas-neue-v9-latin-regular.woff"
          color={"#B833FF"}
          scale={8}
          position={[0, 4, 2]}
        >
          COME ON DEV!!!
          <meshBasicMaterial toneMapped={false} />
        </Text>
      </Float>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      >
        <meshStandardMaterial color="limegreen" />
      </mesh>
      <RigidBody
        type="fixed"
        colliders="hull"
        position={[0, 0, 0]}
        restitution={0.2}
        friction={0}
      >
        <primitive
          object={duck.scene}
          scale={1.2}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </RigidBody>
    </group>
  );
}
