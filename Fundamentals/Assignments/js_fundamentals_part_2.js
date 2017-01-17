//1
function findSum(x, y) {
  var sum=0;
  if(x<=y){
    for(var i=x; i<=y; i++){
      sum+=i;
    }
  }
  else{
    for(var i=x; i>=y; i--){
      sum+=i;
    }
  }
  return sum;
}

//2
function findMin(array) {
  var min=array[0];
  var k=1;
  while(k<array.length){
    if(array[k]<min){
      min=array[k];
    }
    k++;
  }
  return min;
}

//3
function findAvg(array) {
  var sum=0;
  for(var index in array){
    sum+=array[index];
  }
  return sum/array.length;
}
// console.log("Anonymous:")
// var anonymousSum = findSum(1,-1);
// console.log("Sum: "+anonymousSum);
//
// var anonymousMin = findMin([-1,3,-5,0]);
// console.log("Min: "+anonymousMin)
//
// var anonymousAvg = findAvg([4,-2,1]);
// console.log("Avg: "+anonymousAvg)

// var obj={
//   sum: findSum,
//   min: findMin,
//   avg: findAvg,
// }
//
// console.log("Methods:");
// console.log("Sum: " + obj.sum(1,3));
// console.log("Min: " + obj.min([1,2,-5]));
// console.log("Avg: " + obj.avg([1,2,3]));

//PERSON
var person={
  name: "Xona",
  distance_traveled: 0,
  say_name: function(){
    console.log(this.name);
  },
  say_something: function(sth){
    console.log(this.name + " says \'" + sth +"\'" );
  },
  walk: function(){
    console.log(this.name + " is walking");
    this.distance_traveled+=3;
    console.log(this.distance_traveled);
  },
  run: function(){
    console.log(this.name + " is running");
    this.distance_traveled+=10;
    console.log(this.distance_traveled);
  },
  crawl: function(){
    console.log(this.name + " is crawling");
    this.distance_traveled+=1;
    console.log(this.distance_traveled);
  },
}

person.say_name();
person.say_something("I am cool");
person.walk();
person.run();
person.crawl();
