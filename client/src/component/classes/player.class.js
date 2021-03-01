import { levelOneVehicles, levelTwoVehicles, levelThreeVehicles } from './vehicles.class';
//import { AnimationMixer } from 'three';

class player {
    constructor() {
        this.position = { x: 0, y: 0, z: 0 };
        this.life = 100;
        this.level = 1;
        this.speed = level / 50;
        this.model = null;

    }

    walk = () => {

    }

    run = () => {

    }
    idle = () => {

    }
    sitting = () => {

    }
    standing = () => {

    }
    swordSlash = () => {

    }
    runningJump = () => {

    }
    clap = () => {

    }
    punch = () => {

    }
    gotHit = () => { 

    }
}

export class male extends player {
    constructor() {
        super();
        this.animationNames = {
            walk: "MAN_Walk",
            run: "MAN_Run",
            die: "MAN_Death",
            idle: "MAN_Idle",
            sit: "MAN_Sitting",
            stand: "MAN_Standing",
            swordSlash: "MAN_SwordSlash",
            runningJump: "MAN_RunningJump",
            clap: "MAN_Clapping",
            punch: "MAN_Punch"
        };
    }
}

export class female extends player {
    constructor() {
        super();
        this.animationNames = {
            walk: "FEMALE_Walk",
            run: "FEMALE_Run",
            die: "FEMALE_Death",
            idle: "FEMALE_Idle",
            sit: "FEMALE_Sitting",
            stand: "FEMALE_Standing",
            swordSlash: "FEMALE_SwordSlash",
            runningJump: "FEMALE_RunningJump",
            clap: "FEMALE_Clapping",
            punch: "FEMALE_Punch"
        };
    }
}