import React, { useRef, useState, useEffect, useCallback, useContext } from 'react';
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PCFSoftShadowMap, AnimationMixer, Clock } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import './shop.styles.scss';
import axios from 'axios';

//importing services
import { server, GET_GAME_ASSETS } from '../../../services/services';

//importing reusable components
import Icon from '../../../reusableComponents/icon/icon.component';
import Button from '../../../reusableComponents/button/button.component';

//importing icons
import { ImManWoman } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import coinLogo from './coin.svg';

//importing context
import ThemeContext from '../../../theme/themeContext/theme.context';
import CurrentUserContext from '../../../globalContext/currentUser.context';

//importing services 
import { BUY_ITEM } from '../../../services/services';


//*****************************************creating orbit controls************************************

extend({ OrbitControls });
const CameraControls = () => {
    const cameraControlsRef = useRef(null);
    const { camera, gl } = useThree();
    useFrame((state) => {
        cameraControlsRef.current.update();
    });
    return (
        <orbitControls args={[camera, gl.domElement]} ref={cameraControlsRef} />
    );
}


//********************************************** model component ***************************************

const Model = ({ model }) => {
    const [currentModel, setCurrentModel] = useState(null);
    const currentModelRef = useRef(null);
    const [mixer, setMixer] = useState([]);
    let clock = new Clock();

    useFrame(() => {
        if (mixer.length) {
            mixer.forEach(item => item.update(clock.getDelta()));
        }
        else if (currentModelRef.current) {
            currentModelRef.current.rotation.y += .02;
        }
    });

    useEffect(() => {
        //effect to empty mixer every time a new model is loaded
        setMixer([]);
    }, [model]);

    useEffect(() => {
        //effect to fetch model , every time a new model is passed
        model && new FBXLoader().load(`${server}${model.path}`, setCurrentModel)
    }, [setCurrentModel, model]);

    useEffect(() => {

        //effect to animate every time current model is changed
        if (currentModel) {
            if (currentModel.animations.length) {
                let m = new AnimationMixer(currentModel.children[0]);
                let action = m.clipAction(currentModel.animations[0]);//walking animation
                setMixer([m]);
                action.play();
            }
        }
    }, [currentModel]);

    return (
        currentModel && <primitive object={currentModel} scale={[.009, .009, .009]} ref={currentModelRef} />
    );
}


//**************************************************component****************************************

const Shop = () => {

    const [characters, setCharacters] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [showItem, setShowItem] = useState('characters');
    const [currentModelIndex, setCurrentModelIndex] = useState(1);
    const theme = useContext(ThemeContext);
    const { currentUser } = useContext(CurrentUserContext);

    // now only vehicles will be shown
    const setShowItemVehicles = useCallback(() => {
        setShowItem('vehicles');
    }, [setShowItem]);


    //now only characters will be shown
    const setShowItemCharaters = useCallback(() => {
        setShowItem('characters');
    }, [setShowItem]);


    //show next model
    const incrementCurrentModelIndex = useCallback((e) => {
        let currentModelsArray = showItem === 'characters' ? characters : vehicles;
        if (currentModelIndex < currentModelsArray.length - 1) {
            setCurrentModelIndex(prevState => prevState + 1);
        }
    }, [setCurrentModelIndex, currentModelIndex, showItem, characters, vehicles]);


    //show prev model
    const decrementCurrentModelIndex = useCallback((e) => {
        if (currentModelIndex >= 1) {
            setCurrentModelIndex(prevState => prevState - 1);
        }
    }, [setCurrentModelIndex, currentModelIndex]);

    //buy item button click handler
    const buyItem = useCallback(() => {
        let item = showItem === 'characters' ? characters[currentModelIndex] : vehicles[currentModelIndex];
        axios
            .post(BUY_ITEM, { _id: currentUser._id, ...item, type: showItem })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                alert('unable ot buy item');
                console.log(err);
            });
    }, [showItem, characters, vehicles, currentModelIndex]);


    //effect for fetching models url
    useEffect(() => {
        axios
            .get(GET_GAME_ASSETS)
            .then(res => {
                //setShowItem('characters');  //will trigger next useEffect
                setCharacters(res.data.payload.characters);
                setVehicles(res.data.payload.vehicles);
            })
            .catch(err => {
                console.log(err);
                alert(`unable to fetch game assets`);
            });
    }, [setCharacters, setVehicles]);


    useEffect(() => {
        //every time show item is changed , this index will be set to 0
        //so thant we can show thing from starting in that list
        setCurrentModelIndex(0);
    }, [showItem]);


    return (
        <div className="shop">
            <Canvas
                onCreated={(gl) => {
                    gl.shadowMapEnabled = true;
                    gl.shadowMapType = PCFSoftShadowMap
                }}
            >
                <ambientLight intensity={.5} />
                <spotLight intensity={.5} position={[20, 20, 20]} />
                <CameraControls />
                <Model model={showItem === 'characters' ? characters[currentModelIndex] : vehicles[currentModelIndex]} />
            </Canvas>
            <div className="typeSelector">
                <Icon className={`${showItem === 'characters' ? `${theme} primary text` : null}`} onClick={setShowItemCharaters}>
                    <ImManWoman />
                </Icon>
                <Icon className={`${showItem === 'vehicles' ? `${theme} primary text` : null}`} onClick={setShowItemVehicles}>
                    <AiFillCar />
                </Icon>
            </div>
            <div className="currentCoins">
                <img src={coinLogo} alt='coin' title='buy more coins' />
                <p>TotalCoins : 300</p>
            </div>
            <div className="prevNextArrow">
                <Icon onClick={decrementCurrentModelIndex}>
                    <FaArrowAltCircleLeft />
                </Icon>
                {
                    showItem === 'characters'
                        ? characters.map((item, index) => (
                            <div
                                className={`showItemsIndexVisualizer ${index === currentModelIndex ? 'active' : null}`}
                                onClick={(e) => setCurrentModelIndex(index)}
                                key={index}
                            />
                        ))
                        : vehicles.map((item, index) => (
                            <div
                                className={`showItemsIndexVisualizer ${index === currentModelIndex ? 'active' : null}`}
                                onClick={(e) => setCurrentModelIndex(index)}
                                key={index}
                            />
                        ))
                }
                <Icon onClick={incrementCurrentModelIndex}>
                    <FaArrowAltCircleRight />
                </Icon>
            </div>

            <div className="buyItemButton">
                <Button
                    label={`buy for 20 coins`}
                    className={`${theme} primary contained`}
                    onClick={buyItem}
                />
            </div>
        </div>
    );
}

export default Shop;
