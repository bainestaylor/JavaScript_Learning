//hello world function
function greet (firstName, lastName){
  console.log('Hello ' + firstName + ' World ' + lastName);
}
function square (number) {
  return number*number;
}

// Create 10 Variables about myself
let TaylorBaines = ["Taylor", "Baines", 16, null, null, true, false];
let StephaneMunro = ["Stephane", "Munro", 16, null, null, true, false];

//calling functions, with arguments
greet(TaylorBaines[0], TaylorBaines[1])
greet(StephaneMunro[0], StephaneMunro[1])
greet(square(TaylorBaines[2]), StephaneMunro[2])
