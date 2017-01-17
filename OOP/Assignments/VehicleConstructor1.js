function VehicleConstructor(name, number_of_wheels, number_of_passengers){
  var vehicle = {};

  vehicle.name = name;
  vehicle.number_of_wheels = number_of_wheels;
  vehicle.number_of_passengers = number_of_passengers;

  vehicle.makeNoise = function(){
    console.log("making noise...");
  }
  return vehicle;
}

var Bike = VehicleConstructor("Bike", 2, 1);
Bike.makeNoise = function() {
    console.log("ring ring!");
}
// Bike.makeNoise();

var Sedan = VehicleConstructor("Sedan", 4, 5);
Sedan.makeNoise = function() {
  console.log("Honk Honk!");
}
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 4, 2);
Bus.pickUpPassengers = function(passengers) {
  this.number_of_passengers += passengers;
}
Bus.pickUpPassengers(10);
console.log(Bus.number_of_passengers);
