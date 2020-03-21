import React, { useRef, useCallback } from 'react'
import './App.css'
import { Canvas } from 'react-three-fiber'
import Box from './Components/Box'
import Controls from './Components/Controls'

function App() {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  )
  return (
    <Canvas
      onMouseMove={onMouseMove}
      camera={{
        position: [0, 0, 10],
      }}
    >
      <Controls />
      <ambientLight />
      <Box />
    </Canvas>
  )
}

export default App
