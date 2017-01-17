// //1
// function runningLogger(){
//   console.log("I am running!");
// }
// runningLogger();
//
// //2
// function multiplyByTen(num){
//   if(typeof(num) == 'number'){
//     return num * 10;
//   }
// }
// console.log(multiplyByTen(5));

//3
function stringReturnOne(){
  return "1";
}
function stringReturnTwo() {
  return "2";
}

// //4
// function functionRunner(param) {
//   if(typeof(param) == "function"){
//     return param();
//   }
// }
// var c = functionRunner(function(){ return "Run!";})
// console.log(c);

//5
function myDoubleConsoleLog(param1, param2){
  if(typeof(param1) == "function" && typeof(param2) == "function"){
    console.log(param1(), param2());
  }
}
//myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

//6
function caller2(param){
  console.log('starting');
  setTimeout(function(){
    if (typeof(param)=='function'){
      param(stringReturnOne, stringReturnTwo);
    }
    console.log('ending');
  }, 2000);

  return "interesting";
}

caller2(myDoubleConsoleLog);
