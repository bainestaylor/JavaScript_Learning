let hour = 21;

console.log("The hour is "  + hour); //Change this simulating automatically reading time from Internet Clock or System Tray Clock

if (hour > 5 && hour < 12) {
console.log('Good Morning');
}

else if (hour > 11 && hour < 19) {
console.log ('Good Afternoon');
}

else {
console.log("Good Evening");
}
