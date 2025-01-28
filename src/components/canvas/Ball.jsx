/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useTexture, Float, Decal } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.5]} />
      <mesh castShadow receiveShadow scale={isMobile ? 2.75 : 2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2*Math.PI, 0, 6.25]}
          scale={isMobile ? 1 : 1}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const mq = window.matchMedia("(max-width: 640px)");
      setIsMobile(mq.matches);
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }

      mq.addEventListener('change', handleMediaQueryChange);
      return () => mq.removeEventListener('change', handleMediaQueryChange);
    }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1,2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon}  isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default BallCanvas