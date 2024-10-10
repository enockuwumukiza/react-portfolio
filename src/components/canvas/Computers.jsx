import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader'; 

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./my_desktop/scene.gltf'); 

  return (
    <mesh>
  {/* Ambient light to brighten the entire scene */}
  <ambientLight intensity={0.4} />

  {/* Hemisphere light to add general illumination */}
  <hemisphereLight intensity={0.3} groundColor={"black"} />

  {/* Point light to focus on the computer setup */}
  <pointLight intensity={1.5} position={[5, 5, 5]} />

  {/* Additional spotlight to enhance visibility */}
  <spotLight
    position={[-20, 50, 10]}
    angle={0.12}
    penumbra={1}
    intensity={2}  // Increase intensity for better lighting
    castShadow
    shadow-mapSize={1024}
  />

  {/* The 3D Model */}
  <primitive
    object={computer.scene}
    scale={isMobile ? 0.7 : 0.75}
    position={isMobile ? [0, -3, -2.8] : [0.2, -3.25, -2]}
    rotation={[0, Math.PI/14, 0]}  // Ensure it's facing forward
  />
</mesh>

  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:600px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [0, 2, 10], fov: 35 }}  // Adjust camera to face the screen
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
