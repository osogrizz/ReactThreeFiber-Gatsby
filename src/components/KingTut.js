/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Nate Loper 🏔️ #ArizonaGuide (https://sketchfab.com/arizonaguide)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pharoah-tutankhamun-king-tut-x-ray-scan-d3d117272d914b2290d2a11b676fde72
title: Pharoah Tutankhamun, King Tut X-Ray Scan
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/king_tut/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments material={materials.Material_0} geometry={nodes.mesh_0.geometry} />
        <mesh material={materials.Material_0} geometry={nodes.mesh_1.geometry} />
        <mesh material={materials.Material_0} geometry={nodes.mesh_2.geometry} />
        <mesh material={materials.Material_0} geometry={nodes.mesh_3.geometry} />
        <mesh material={materials.Material_0} geometry={nodes.mesh_4.geometry} />
        <mesh material={materials.Material_0} geometry={nodes.mesh_5.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('/king_tut/scene.gltf')