import { extend } from "react-three-fiber";

class vehicle {
    constructor() {
        this.damage = 0;
        this.speed = 0;
        this.accelration = 0;
        this.deacceleration = 0;
        this.model = null;
    }
};

export class levelOneVehicles extends vehicle { 
    constructor() { 
        super();
        this.life = 50;
        this.mass = 20;
    }
}

export class levelTwoVehicles extends vehicle { 
    constructor() { 
        super();
        this.life = 100;
        this.mass = 30;
    }
}

export class levelThreeVehicles extends vehicle { 
    constructor() { 
        super();
        this.life = 150;
        this.mass = 40;
    }
}