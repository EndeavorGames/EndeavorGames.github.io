import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import Earth from "../components/Earth";
import { Stars } from "drei/Stars";

const PROD = process.env.NODE_ENV === "production";

const EarthScene = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Earth position={[0, 0, 0]} />
    <Stars />
  </Canvas>
);

const Game = () => {
  return <EarthScene />;
};

export default Game;
