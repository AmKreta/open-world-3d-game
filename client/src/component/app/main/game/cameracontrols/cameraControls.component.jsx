import React, { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useFrame, useThree, extend } from 'react-three-fiber';

extend({ OrbitControls });

const CameraControls = () => {
    const cameraControlsRef = useRef(null);
    const { camera, gl } = useThree();
    useFrame(state => {
        if (cameraControlsRef.current) {
            cameraControlsRef.current.update();
        }
    });

    return < orbitControls args={[camera, gl.domElement]} ref={cameraControlsRef} />
}

export default CameraControls;