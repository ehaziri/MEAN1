// function outerScope(){
//     var count = 0;
//     return function innerScope(){
//         count ++
//         console.log(count);
//         return count;
//     }
// }
//
// var counter = outerScope();
//
// counter();//1
// counter();//2
// counter();//3
//


function outerScope(count){
  var count = count || 0;
  count ++
  console.log(count);
  return count;

}

var counter = outerScope();//1
counter = outerScope(counter);//2
counter = outerScope(counter);//3
