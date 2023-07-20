import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Yang } from "./components/yang/Index";

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

            <Yang />
        </Canvas>
    );
}

export default App;
