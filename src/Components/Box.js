import React from 'react'

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[7, 4, 4]} />
      <meshPhongMaterial attach="material" color="blue" />
    </mesh>
  )
}

export default Box
