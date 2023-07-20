import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Yang } from "./components/yang/Index";
import { Yin } from "./components/yin/Index";

function App() {
    return (
        <Canvas>
            <PerspectiveCamera>
                {/* 3D로 만듦 */}
                <OrbitControls
                    enablePan={false}
                    minPolarAngle={-2}
                    maxPolarAngle={2}
                />
            </PerspectiveCamera>

            {/* 광원 */}
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[3, 3, 5]} />

            {/* 캔버스 배경색 */}
            <color attach="background" args={["rgb(193,194,206)"]}></color>

            <Yin />
            <Yang />
        </Canvas>
    );
}

export default App;
