import React from 'react';
import { Canvas, extend } from 'react-three-fiber';
import './game.styles.scss';

//importing custom components
import World from './world/world.component';
import CameraControls from './cameracontrols/cameraControls.component';

const Game = () => {
    return (
        <div className="game">
            <Canvas>
                <hemisphereLight args={['0xffffbb', '0x080820', .5]} />
                <ambientLight intensity={.3} />
                <World />
                <CameraControls />
            </Canvas>
        </div>
    );
}

export default Game;