import React, { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { extend, useFrame, useThree } from 'react-three-fiber'

extend({ OrbitControls })

const Controls = () => {
  const { camera, gl } = useThree()
  const orbitRef = useRef()
  useFrame(() => {
    orbitRef.current.update()
  })
  return <orbitControls ref={orbitRef} args={[camera, gl.domElement]} />
}

export default Controls
