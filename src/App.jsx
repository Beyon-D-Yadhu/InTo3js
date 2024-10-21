import { useState } from 'react'
import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

function App() {
  const [count, setCount] = useState(0)

  return (
// tailwind css usage
    <div className={'absolute w-full h-screen p-0 top-0 left-0'}> 
      <div className={'h-full p-0 '}>
        <Canvas camera = {{
          position: [0,0,10],
          fov:30,

        }}>
          <color attach="background" args={["#ececec"]}/>
// three-drei usage
          <OrbitControls/> 
          <mesh rotation ={[Math.PI / 10,10,10]}>
// three-fiber usage
            <torusGeometry /> 
            {/* <sphereGeometry /> */}
            <meshNormalMaterial/>
          </mesh>
          {/* <mesh rotation={[Math.PI / 10,10,10]}>
            <torusGeometry />
            <meshToonMaterial />
          </mesh>*/}
        </Canvas>
      </div>
    </div>
  )
}

export default App
//fork example
//Still no changes, I will add a hexa hedrone after some time
