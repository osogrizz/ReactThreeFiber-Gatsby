/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/puma2/source/scene.glb')
  return (
    <group ref={group} {...props} dispose={null} position={[0, 0, 0]} scale={[0.02, 0.02, 0.02]} >
      <mesh
        material={nodes.Mandible.material}
        geometry={nodes.Mandible.geometry}
        position={[-30.83, 61.36, -10.58]}
        rotation={[1.55, 0.04, -1.65]}
      />
      <mesh
        material={nodes.Cranium.material}
        geometry={nodes.Cranium.geometry}
        position={[44.35, 45.21, 2.69]}
        rotation={[1.55, 0.04, -1.65]}
      />
    </group>
  )
}

useGLTF.preload('/scene.glb')
