//Function goes here
function switch(lastName1, lastName2) {
  lastName1 = memory;
  lastName2 = lastName1;
  lastName2 = memory;
  lastName1 = lastName2
}

let TaylorBaines = [];
let StephaneMunro = [];

// firstName, lastName, age, ageAfraid, hair, male, female
TaylorBaines = ["Taylor", "Baines", 16, null, null, true, false];
StephaneMunro = ["Stephane", "Munro", 16, null, null, true, false];

//code goes here
TaylorBaines[1] = StephaneMunro[1];

// Print First names only
console.log("Last name of TaylorBaines is: " + TaylorBaines[1]);
console.log("Last name of TaylorBaines is: " + StephaneMunro[1]);



//console.log("Am I male? " + male);
