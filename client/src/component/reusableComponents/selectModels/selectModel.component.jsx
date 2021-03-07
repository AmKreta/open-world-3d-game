import React, { useState, useRef } from 'react';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './selectModel.styles.scss';

extend({ OrbitControls });

const CameraControls = () => {
    const { camera, gl } = useThree();
    const cameraControllRef = useRef(null);
    useFrame((state) => cameraControllRef.current.update())
    return (
        <orbitControls ref={cameraControllRef} args={[camera, gl.domElement]} />
    );
}

const SelectModel = ({ modelUrlArray }) => {
    const [modelArray, setModelArray] = useState();
    return (
        <div className="selectModel">
            <Canvas>
                <ambientLight intensity={.5} />
                <spotLight position={[20, 20, 0]} intensity={.4} />
                <CameraControls />
                <mesh>
                    <boxBufferGeometry args={[2, 2, 2]} />
                    <meshPhongMaterial color='red' />
                </mesh>
            </Canvas>
        </div>
    );
}

export default SelectModel;