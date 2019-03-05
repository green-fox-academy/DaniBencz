/* Create a Station and a Car classes
Station
  gasAmount
  refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
  gasAmount
  capacity
  create constructor for Car where:
    initialize gasAmount -> 0
    initialize capacity -> 100 */


class Station {

  gasAmount: number;
  car;

  refill(car) {
    console.log('Car came for fuel-up');
    console.log(car);
    car.gasAmount = car.capacity;
    car.capacity = 0;
    console.log('Car got refueled');
    console.log(car);
  }
}

class Car {

  gasAmount: number;
  capacity: number;

  constructor(gmt: number = 0, cpt = 100) {
    this.gasAmount = gmt;
    this.capacity = cpt;
  }
}

const station1 = new Station;
const car1 = new Car;

station1.refill(car1);