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
            myMesh.current.position.z = radius * Math.sin(t) * -1;

            myMesh.current.rotation.x = 67.5; // mesh 를 회전 시킴
        }
    });

    return (
        <mesh ref={myMesh}>
            {/* 구 */}
            <circleGeometry args={[0.2, 32, 32]} />

            {/* 색깔을 검정색으로 뒷면도 보이게 side=2 */}
            <meshStandardMaterial color={"black"} side={2} />
        </mesh>
    );
}

export { Ring };
