import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Test() {
    const myMesh = useRef(null);
    let t = 0;

    useFrame((_, delta) => {
        if (myMesh.current) {
            t += delta; // increment time
            const radius = 2; // radius of the circle

            myMesh.current.position.x = radius * Math.cos(t);
            myMesh.current.position.y = radius * Math.sin(t);
        }
    });

    return (
        <mesh ref={myMesh}>
            {/* 정사면체 */}
            {/* <boxGeometry args={[1, 1, 1]} /> */}

            {/* 구 */}
            <sphereGeometry args={[0.2, 32, 32]} />

            {/* 입체로 만듦 */}
            {/* <meshStandardMaterial /> */}
        </mesh>
    );
}

function App() {
    return (
        <Canvas>
            {/* 3D로 만듦 */}
            <OrbitControls />

            {/* 광원 */}
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[3, 3, 5]} />

            {/* 캔버스 배경색 */}
            <color attach="background" args={["rgb(193,194,206)"]}></color>

            <Test />
        </Canvas>
    );
}

export default App;
