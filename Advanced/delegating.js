function leadBootcamp(language, leader) {
    var outcome = leader(language);
    console.log(outcome);
}

function Mike(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else{
    return "maybe not yet";
  }
}

function Charlie(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else{
    return "maybe not yet."
  }
}

charlie = leadBootcamp('javascript', Charlie);


function printResults(doSomething) {
  var result = doSomething();
  console.log(result);
}

printResults(function returnFive() {
  return 5;
})

function each(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

each([1,2], console.log);
