//Variable is an array for security
const marks = [78, 90, 67, 83, 70]; //add grades as an array

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (mark) {
  const average = calculateAverage (mark);
  if (average < 60) return 'F'; //Add appropriate grade or feedback
  if (average < 65) return 'D-'; //Add approriate conditional
  if (average == 65) return 'D';
  if (average < 70) return 'D+';
  if (average < 75) return 'C-';
  if (average == 75) return 'C';
  if (average < 80) return 'C+';
  if (average < 85) return 'B-';
  if (average == 85) return 'B';
  if (average < 90) return 'B+';
  if (average < 95) return 'A-';
  if (average == 95) return 'A';
  if (average < 101) return 'A+';

}
function calculateAverage (arrays) {
  let sum = 0;
  for (let array of arrays) sum += array; //Example of reading an array and one line to add up the sum of all the grades
  return sum / marks.length; //"Divide the total marks by the number of grades"
}

console.log ("My letter grade is", calculatedGrade (marks), "because my numerical average is", calculateAverage (marks));
