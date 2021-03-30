import React, { Suspense } from "react"
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'



import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>hello world</h1>
    <CanvasStyles>
      <Suspense>

      </Suspense>
    </CanvasStyles>
  </Layout>
)

export default IndexPage

const CanvasStyles = styled.canvas`
  width: 100%auto;
  height: auto;
  margin: 40px auto;
`