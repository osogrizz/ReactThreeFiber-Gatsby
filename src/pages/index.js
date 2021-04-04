import React, { Suspense } from "react"
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, ContactShadows, Preload } from '@react-three/drei'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Speeder from '../components/Speeder'
import Galaxy from '../components/Galaxy'
import Puma2 from '../components/Puma2'
import KingTut from '../components/KingTut'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>hello world</h1>
    <div style={{ display: `flex`, flexWrap: `wrap`, gap: `20px`, justifyContent: `space-around` }} >

      <Canvas className="display-box " camera={{ position: [0, 0, 5] }} style={{ width: `600px`, height: `600px`, background: `black` }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.3} position={[5, 20, 20]} />
        <Suspense fallback={null}>
          <Speeder />
          <OrbitControls autoRotate />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} blur={2} far={1} />
          <Preload all />
        </Suspense>
      </Canvas>


      <Canvas className="display-box black-box" style={{ width: `600px`, height: `600px`, background: `black` }}>
        {/* <ambientLight intensity={0.5} /> */}
        <Suspense fallback={null}>
          <Galaxy />
          <OrbitControls autoRotate />
          <Preload all />
        </Suspense>
      </Canvas>

      <Canvas className="display-box black-box" style={{ width: `600px`, height: `auto`, background: `black` }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={200} position={[10, 40, 40]} args={[`red`]} />
        {/* <spotLight intensity={20} position={[-1250, 400, -400]} args={[`red`]} /> */}
        <Suspense fallback={null}>
          <KingTut />
          <OrbitControls autoRotate />
          {/* <ContactShadows position={[0, -0.8, 0]} opacisty={0.25} blur={2} far={1} /> */}
          <Preload all />
        </Suspense>
      </Canvas>

      <Canvas className="display-box " camera={{ position: [0, 0, 5] }} style={{ width: `600px`, height: `600px`, background: `#000` }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={2} position={[10, 5, 5]} args={[`#fff`]} />
        <spotLight intensity={2} position={[-130, -50, -100]} args={[`#fff`]} />
        <Suspense fallback={null}>
          <Puma2 position={[2, 0, 5]} />
          <PerspectiveCamera camera={[-10, 0, -40]} />
          <OrbitControls autoRotate />
          {/* <ContactShadows position={[0, -0.8, 0]} opacity={0.25} blur={2} far={1} /> */}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  </Layout>
)

export default IndexPage

const CanvasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px ;
  justify-content: space-around;
  background: black;
`