import { OrbitControls, ScrollControls } from '@react-three/drei'
import React from 'react'
import { Office } from './Office'
import { Overlay } from './Overlay';

const Experience = () => {
  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Office />
        <Overlay />
      </ScrollControls>
    </>
  );
}

export default Experience