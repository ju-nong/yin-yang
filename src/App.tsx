// import { useEffect } from "react";
// import * as dat from "dat.gui";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Yang } from "./components/yang/Index";
import { Yin } from "./components/yin/Index";
// import { Mesh } from "three";

// const Taiji = () => {
//     const upperHemisphere = React.useRef<Mesh>(null!);
//     const lowerHemisphere = React.useRef<Mesh>(null!);

//     return (
//         <group position={[0, 0, 0]}>
//             <mesh ref={upperHemisphere}>
//                 <sphereGeometry args={[1, 32, 32, 0, Math.PI]} />
//                 <meshBasicMaterial attach="material" color="white" side={2} />
//             </mesh>
//             <mesh ref={lowerHemisphere}>
//                 <sphereGeometry args={[1, 32, 32, Math.PI, Math.PI]} />
//                 <meshBasicMaterial attach="material" color="black" side={2} />
//             </mesh>
//         </group>
//     );
// };

function App() {
    // useEffect(() => {
    //     const gui = new dat.GUI();
    //     const obj = { x: 0, y: 30 };
    //     gui.add(obj, "x").min(-10).max(10).step(0.01);
    //     gui.add(obj, "y").min(0).max(100).step(1);
    // }, []);

    return (
        <Canvas>
            {/* 3D로 만듦 */}
            <OrbitControls />

            {/* 광원 */}
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[3, 3, 5]} />

            {/* 캔버스 배경색 */}
            <color attach="background" args={["rgb(193,194,206)"]}></color>

            <Yin />
            <Yang />

            {/* <Taiji /> */}
        </Canvas>
    );
}

export default App;
