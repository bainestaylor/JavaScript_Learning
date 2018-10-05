//Max of 2 Numbers
let number = [34, 34]; //Boundary Numbers
console.log("Numbers are " + number[0] + " and " + number[1]);

if (number[0] > number[1]){
  console.log(number[0] + " Is the largest number");
}
else if (number[0] < number[1]){
  console.log(number[1] + " Is the largest number");
}
else if (number[0] = number[1]){
  console.log("Both numbers are the same");
}

console.log(" ");

//Portrait or landscape
let width = 82;
let height = 82;

console.log("Width is " + width)
console.log("Height is " + height)

if (width > height){
  console.log("The display is Landscape");
}
else if (width < height){
  console.log("The display is portrait");
}
else if (width = height){
  console.log("It is a square display");
}
