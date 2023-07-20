import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Sphere() {
    const myMesh = useRef(null);
    let t = 0;

    useFrame((_, delta) => {
        if (myMesh.current) {
            t += delta; // increment time
            const radius = 1; // radius of the circle

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

export { Sphere };
