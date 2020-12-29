import React, { useRef, useState, useMemo } from "react";
import { useFrame, useThree, extend } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import earth from "../assets/earth.jpg";
import { useControl } from "react-three-gui";

extend({ OrbitControls });
const Earth = (props) => {
  const mesh = useRef();
  const controls = useRef();
  const [active, setActive] = useState(false);

  useControl("active", {
    type: "boolean",
    state: [active, setActive],
  });

  useFrame(() => {
    mesh.current.rotation.y += 0.001;
    controls.current.update();
  });

  const CameraControls = () => {
    const {
      camera,
      gl: { domElement },
    } = useThree();
    return (
      <orbitControls
        autoRotate={true}
        autoRotateSpeed={0.1}
        minZoom={2.0}
        maxZoom={20.0}
        ref={controls}
        args={[camera, domElement]}
      />
    );
  };

  const texture = useMemo(() => new THREE.TextureLoader().load(earth), []);

  return (
    <>
      <CameraControls />
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
        onClick={(e) => setActive(!active)}
      >
        <sphereBufferGeometry args={[1, 20, 20]} />
        <meshBasicMaterial
          attach="material"
          transparent
          side={THREE.DoubleSide}
        >
          <primitive attach="map" object={texture} />
        </meshBasicMaterial>
      </mesh>
    </>
  );
};
export default Earth;
