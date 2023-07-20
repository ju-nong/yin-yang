import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";

function Shape() {
    const myMesh = useRef<Mesh>(null);

    useEffect(() => {
        const shape = new THREE.Shape();

        if (myMesh.current) {
            myMesh.current.geometry = new THREE.ShapeGeometry(shape);
        }
    }, []);

    let t = 0;

    useFrame((_, delta) => {
        if (myMesh.current) {
            t += delta; // increment time

            // myMesh.current.rotation.z = t;
        }
    });

    return (
        <mesh ref={myMesh}>
            {/* 링
            <shapeGeometry /> */}

            <meshStandardMaterial side={2} />
        </mesh>
    );
}

export { Shape };
