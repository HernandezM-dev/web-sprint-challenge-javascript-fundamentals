// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: function nestedFunction can access internal as closure allows nested functions to access variables outside of its scope whether the function has been terminated or not. nestedFunction is within myFunction.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let numArray = []
  for(let i = 0; i <= num; i++){
    numArray.push(num - i);
  }

  function add(){
    numArray.reduce((total, arr) => {return total+=arr}, 0);
  }

  return (add());
}
console.log(summation(10));