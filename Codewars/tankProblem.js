const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let miles = distanceToPump / mpg
    if (miles <= fuelLeft) {
        console.log("es reicht noch")
        return true

    } else {
        console.log("es reicht nicht mehr")
        return false
    };
};


zeroFuel(50, 25, 1)