import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { Stars } from "drei/Stars";
import { Controls, withControls } from "react-three-gui";
import Earth from "../components/Earth";

const Menu = () => {
  return (
    <Controls.Provider>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Earth position={[0, 20, 0]} />
        <Stars />
      </Canvas>
      {/* <Controls /> */}
    </Controls.Provider>
  );
};

export default Menu;
