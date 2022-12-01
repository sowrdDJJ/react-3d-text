import Experience from "./components/Experience"
import { Canvas } from "@react-three/fiber"


function App() {

  return (
    <Canvas shadows orthographic camera={{ position: [10, 200, 20], zoom: 80 }} gl={{ preserveDrawingBuffer: true }}>
      <Experience />
    </Canvas>
  )
}

export default App
