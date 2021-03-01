export class powerUps {
    constructor() {
        this.powerUps = {
            
        };
    }

    addPower = (powerUp) => {
        if (this.powerUps[powerUp]) {
            this.powerUps[powerUp] += 1;
        }
        else {
            this.powerUps[powerUp] = 1;
        }
    }
};

//array is like {powerType:'',count:''}