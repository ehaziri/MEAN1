function VehicleConstructor(name, number_of_wheels, number_of_passengers, speed){
  //Private
  var self = this;
  var distance_travelled = 0;
  this.name = name;
  this.number_of_wheels = number_of_wheels;
  this.number_of_passengers = number_of_passengers;
  this.speed = speed;

  var updateDistanceTravelled = function(){
    distance_travelled += self.speed;
  }

  this.makeNoise = function(){
    console.log("making noise...");
    return this;
  }

  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
    return this;
  }

  this.checkMiles = function() {
    console.log(distance_travelled);
    return this;
  }
}

var Bike = new VehicleConstructor("Bike", 2, 1, 9);
Bike.makeNoise = function() {
    console.log("ring ring!");
}
Bike.checkMiles().move().checkMiles().move().checkMiles();


// var Sedan = new VehicleConstructor("Sedan", 4, 5, 60);
// Sedan.makeNoise = function() {
//   console.log("Honk Honk!");
// }
// Sedan.makeNoise();
//
// var Bus = new VehicleConstructor("Bus", 4, 4, 40);
// Bus.pickUpPassengers = function(passengers) {
//   this.number_of_passengers += passengers;
// }
// Bus.pickUpPassengers(10);
// console.log(Bus.number_of_passengers);
