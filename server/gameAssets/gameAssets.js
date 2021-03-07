const path = '';

const gameAssets = {
    characters: [
        { name: 'Male_Casual', path: `${path}/characters/AnimatedMen/FBX/Male_Casual.fbx`,price:100, gender:'male' },
        { name: 'Male_LongSleeve', path: `${path}/characters/AnimatedMen/FBX/Male_LongSleeve.fbx`,price:100,gender:'male' },
        { name: 'Male_Shirt', path: `${path}/characters/AnimatedMen/FBX/Male_Shirt.fbx`,price:100,gender:'male' },
        { name: 'Mail_Suit', path: `${path}/characters/AnimatedMen/FBX/Male_Suit.fbx`,price:100,gender:'male' },
        { name: 'Female_Alternative', path: `${path}/characters/AnimatedWomen/FBX/Female_Alternative.fbx`,price:100,gender:'female' },
        { name: 'Female_Casual', path: `${path}/characters/AnimatedWomen/FBX/Female_Casual.fbx`,price:100,gender:'female' },
        { name: 'Female_Dress', path: `${path}/characters/AnimatedWomen/FBX/Female_Dress.fbx`,price:100,gender:'female' },
        { name: 'Female_TankTop', path: `${path}/characters/AnimatedWomen/FBX/Female_TankTop.fbx`,price:100,gender:'female' }
    ],
    vehicles: [
        { name: 'BasicCar', level: 1, path: `${path}/vehicles/Cars/FBX/BasicCar.fbx`,price:100 },
        { name: 'CopCar', level: 1, path: `${path}/vehicles/Cars/FBX/CopCar.fbx`,price:100 },
        { name: 'RaceCar', level: 1, path: `${path}/vehicles/Cars/FBX/RaceCar.fbx`,price:100 },
        { name: 'SimpleCarHigh', level: 1, path: `${path}/vehicles/Cars/FBX/SimpleCarHigh.fbx`,price:100 },
        { name: 'SimpleCarShort', level: 1, path: `${path}/vehicles/Cars/FBX/SimpleCarShort.fbx`,price:100 },
        { name: 'Taxi', level: 1, path: `${path}/vehicles/Cars/FBX/Taxi.fbx`,price:100 },
        { name: 'Ambulance', level: 2, path: `${path}/Vehicles/PublicTransports/FBX/Ambulance.fbx`,price:100 },
        { name: 'Bus', level: 2, path: `${path}/Vehicles/PublicTransports/FBX/Bus.fbx`,price:100 },
        { name: 'SchoolBus', level: 2, path: `${path}/Vehicles/PublicTransports/FBX/SchoolBus.fbx`,price:100 },
        { name: 'Taxi', level: 2, path: `${path}/Vehicles/PublicTransports/FBX/Taxi.fbx`,price:100 },
        { name: 'Train', level: 2, path: `${path}/Vehicles/PublicTransports/FBX/Train.fbx`,price:100 },
        { name: 'Cop', level: 3, path: `${path}/vehicles/RealisticCars/FBX/Cop.fbx`,price:100 },
        { name: 'NormalCar1', level: 3, path: `${path}/vehicles/RealisticCars/FBX/NormalCar1.fbx`,price:100 },
        { name: 'NormalCar2', level: 3, path: `${path}/vehicles/RealisticCars/FBX/NormalCar2.fbx`,price:100 },
        { name: 'SportsCar1', level: 3, path: `${path}/vehicles/RealisticCars/FBX/SportsCar1.fbx`,price:100 },
        { name: 'SportsCar2', level: 3, path: `${path}/vehicles/RealisticCars/FBX/SportsCar2.fbx`,price:100 },
        { name: 'SUV', level: 3, path: `${path}/vehicles/RealisticCars/FBX/SUV.fbx`,price:100 },
        { name: 'Taxi', level: 3, path: `${path}/vehicles/RealisticCars/FBX/Taxi.fbx`,price:100 }
    ]
}

module.exports = gameAssets;
