interface car {
    doors: number;
    color: string;
}


function printCar(myCar: car) {
     console.log(myCar)
}

const myCar = { color: 'red', doors: 10}
 

printCar(myCar)