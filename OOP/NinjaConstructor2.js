function NinjaConstructor(name, age, prevOccupation){
  //PRIVATE
  var self = this;
  var privateVar = "This is a private variable.";
  var privateMethod = function() {
    console.log(self);
  }
  //PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation;

  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " +
    this.prevOccupation + " and now I\'m a Ninja!");
    privateMethod();
    console.log(privateVar);
  }
}

var Andrew = new NinjaConstructor("Andrew", 24, "Teacher");
Andrew.introduce();

var Michael = new NinjaConstructor("Michael", 34, "Founder");

Michael.introduce = function(){
  console.log("I am the Sensei!");
}
Michael.introduce();
