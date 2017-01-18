// function each(array, callback) {
//   for (var i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// }
//
//  each([1,2], console.log);
// // each([1,2, 3], function(num) {
// //   console.log(num + " I am from the callback!");
// // })

var _ = {
  map: function(array, callback) {
    var mapArr = [];
    for (var i = 0; i < array.length; i++) {
      mapArr[i] = callback(array[i]);
    }
    return mapArr;
  },
  reduce: function(array, callback, memo) {
    var k = 0;
    if(memo == array[0])
        k++;
    //console.log(k);
    while(k<array.length){
      memo = callback(array[k], memo);
      k++;
    }
    return memo;
  },
  find: function(array, callback) {
    var found = false;
    var result = "Not found";
    var k = 0;
    while(!found){
      if(callback(array[k]) == true) {
        found = true;
        result = array[k];
      }
      else{
        k++;
      }
    }
    return result;
  },
  filter: function(array, callback) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
      if(callback(array[i]) == true){
        //console.log(array[i], " Even Number.");
        newArr.push(array[i]);
      }
      // else{
      //   console.log(array[i], " Odd number.");
      // }
    }
    return newArr;
  },
  reject: function(array, callback) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
      if(callback(array[i]) == true){
        array.splice(i, 1);
      }
    }
    return array;
  },
}

var mapping = _.map([1,2,3,4,5,6], function(value){
  return value * 3;
});
console.log("Map: ", mapping);

var remove = _.reject([1,2,3,4,5,6], function(value){
  return value % 2 == 0; //to remove even numbers
});
console.log("Reject: ", remove);

var evens = _.filter([1,2,3,4,5,6], function(value){
  return value % 2 == 0;
});
console.log("Filter: ", evens);

var find2 = _.find([1,2,3,4,5,6], function(value){
  return value == 2;
});
console.log("Find: ", find2);

var reducing = _.reduce([1,2,3], function(value, memo){
  return memo + value;
}, 0);
console.log("Reduce: ", reducing);
