import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import React, { Suspense } from "react"
import { Galaxy } from "../components/Galaxy"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath'; 
import { Float } from "@react-three/drei"
import { useState } from "react"
import Loader from "../components/Loader"
import { LinkPreview } from "../components/LinkPreview"

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const handleGalaxyClick = () => {
    window.open('https://linktr.ee/wlmrcstnd', '_blank');
  };
  return (
    <section className="flex items-start justify-center
    md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        
        <HeroText />
        <ParallaxBackground />
        
        <figure className="absolute inset-0" 
        style={{ width:"100vw", height: "100vh"}}
        >

          <Canvas camera={{ position: [0, 1, 3]}}>
            <Suspense fallback={<Loader />}>
              <Float>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <group onClick={handleGalaxyClick}>
                  <Galaxy
                    scale={isMobile && 1.7}
                    position={isMobile && [-0.5, -1.3, 0.4]}
                  />
                </group>
              </Float>
              <Rig />
            </Suspense>
          </Canvas>

        </figure>
        
    </section>
    
  )
}

function Rig(){
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, 
      [state.mouse.x/10, 
      1+state.mouse.y/10, 3,
    ], 0.25, delta)
})
}

export default Hero