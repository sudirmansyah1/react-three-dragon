import { Suspense, useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber";
import { Loading, MusicPlay } from './components'
import { IslandModels, DragonModels } from "./models"
import "./App.css"

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingDone(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-screen h-screen bg-sky-100	">
                <Canvas
                    camera={{
                        position: [0, 0, 0.5],
                        fov: 100,
                        near: 0.1,
                        far: 100,
                    }}
                    >
                    <directionalLight position={[0, 0, 1]} intensity={2.5} />
                    <ambientLight intensity={1} />
                    <pointLight position={[5, 10, 0]} intensity={2} />

                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />
                    <Suspense fallback={<Loading />}>
                        <DragonModels
                          position={[0.0, -0.3, 0.2]}
                          rotation={[0.1, 1.50, -0.1]}
                          scale={[0.1, 0.1, 0.1]}
                        />
                        <IslandModels
                        position={[0.0, -0.5, -3.0]}
                        rotation={[0.3, 4.7, 0.0]}
                        scale={[0.1, 0.1, 0.1]}
                        />
                    </Suspense>
                </Canvas>
                {loadingDone && <MusicPlay />}
        </section>
  )
}

export default App
