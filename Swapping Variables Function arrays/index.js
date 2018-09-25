//Function goes here
function rewriteLastNameBaines (lastName1, lastname2) {
  return TaylorBaines[1] = lastname2;
}
function rewriteLastNameMunro (lastName1, lastname2) {
  return StephaneMunro[1] = lastname2;
}

let TaylorBaines = [];
let StephaneMunro = [];

// firstName, lastName, age, ageAfraid, hair, male, female
TaylorBaines = ["Taylor", "Baines", 16, null, null, true, false];
StephaneMunro = ["Stephane", "Munro", 16, null, null, true, false];

rewriteLastNameBaines (TaylorBaines[1], StephaneMunro[1]);
rewriteLastNameMunro (StephaneMunro[1], TaylorBaines[1]);

//code goes here
switch (TaylorBaines[1], StephaneMunro[1]);

// Print First names only
console.log("Last name of TaylorBaines is: " + TaylorBaines[1]);
console.log("Last name of TaylorBaines is: " + StephaneMunro[1]);



//console.log("Am I male? " + male);
