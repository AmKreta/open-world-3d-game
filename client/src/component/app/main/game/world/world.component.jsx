import React, { useState, useEffect } from 'react';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

//importing services
import { GET_WORLD_MTL, GET_WORLD_OBJ } from '../../../../services/services';

const World = () => {
    const [model, setModel] = useState(null);

    useEffect(() => {
        new MTLLoader().load(GET_WORLD_MTL, object => {
            object.preload();
            let objLoader = new OBJLoader();
            objLoader.setMaterials(object);
            objLoader.load(GET_WORLD_OBJ, setModel);
        })
    }, [setModel]);

    useEffect(() => {
        console.log(model);
    }, [model]);

    return model && <primitive object={model} position={[0, 0, 0]} scale={[1,2,1]}/>
}

export default World;
