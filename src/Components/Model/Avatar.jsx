import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Environment, OrbitControls} from '@react-three/drei'
import { useRef } from 'react';


const Avatar = () => {
    const ref = useRef()
    useFrame((delta, state) => {
        ref.current.rotation.y += 0.022
    })
    const gltf = useLoader(GLTFLoader, "../../../public/scene.gltf")
    return (
        <>
            <primitive ref={ref} position={[0, -3, 0]} object={gltf.scene} scale={2.7} />
            <ambientLight intensity={5}/>
            <pointLight position={[10, 10, 10]} color={'red'} />
            <Environment preset='city'backgroundIntensity={3}/>
            <OrbitControls enableZoom={false}/>
        </>
    );
};
export default Avatar