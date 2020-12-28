import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

import earth from "./assets/earth.jpg";

const Earth = (props) => {
  const mesh = useRef();
  const [active, setActive] = useState(false);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
  });

  const texture = useMemo(() => new THREE.TextureLoader().load(earth), []);

  return (
    <>
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
        onClick={(e) => setActive(!active)}
      >
        <sphereBufferGeometry args={[1]} />
        <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
          <primitive attach="map" object={texture} />
        </meshBasicMaterial>
      </mesh>
    </>
  );
}

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Earth position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
