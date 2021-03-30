import React, { Suspense } from "react"
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Speeder from '../components/Speeder'
import Galaxy from '../components/Galaxy'
import Puma from '../components/Puma'
import KingTut from '../components/KingTut'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>hello world</h1>
    <CanvasContainer>
      <Canvas className="display-box ">
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.3} position={[5, 20, 20]} />
        <Suspense fallback={null}>
          <Speeder />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>

      <Canvas className="display-box black-box">
        {/* <ambientLight intensity={0.5} /> */}
        <Suspense fallback={null}>
          <Galaxy />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>

      <Canvas className="display-box black-box">
        <ambientLight intensity={0.9} />
        {/* <spotLight intensity={0.3} position={[50, 200, 200]} /> */}
        <Suspense fallback={null}>
          <KingTut />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>

      <Canvas className="display-box ">
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[5, 20, 20]} />
        <Suspense fallback={null}>
          <Puma />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  </Layout>
)

export default IndexPage

const CanvasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  

  .display-box {
    width: 600px;
    height: 600px;
  }

  .black-box {
    background: black;
  }
`