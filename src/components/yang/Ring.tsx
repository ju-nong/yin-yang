import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Ring() {
    const myMesh = useRef<Mesh>(null);
    let t = 0;

    useFrame((_, delta) => {
        if (myMesh.current) {
            t += delta; // increment time
            const radius = 1; // radius of the circle

            myMesh.current.position.x = radius * Math.cos(t) * -1;
            myMesh.current.position.y = radius * Math.sin(t) * -1;
        }
    });

    return (
        <mesh ref={myMesh}>
            {/* 링 */}
            <ringGeometry args={[0.25, 0.95, 32]} />

            {/* 색깔을 검정색으로 뒷면도 보이게 side=2 */}

            <meshStandardMaterial side={2} />
        </mesh>
    );
}

export { Ring };
