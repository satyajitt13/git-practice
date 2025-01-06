// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// get hte current date and time
let today = new Date;

// get the day of the week
let day = today.getDay();

// array of day names
let dayList = ["sunday", "Monday", "Tuesday", "wednessday", "Thursday", "Friday", "Saturday"];

// display the current day
console.log("Today is: " + dayList[day] + ".");


// Get the current hour minutes and seconds
let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// determine if its Am or Pm
let prepand = (hour >= 12) ? "PM" : "AM";

// Check for special cases when hour is zero
if (hour === 0 && prepand === "PM") {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        prepand = "Noon"
    }else {
        hour = 12;
        prepand = "PM";
    }
}


// Check for special cases when hour is zero
if (hour === 0 && prepand === "AM") {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        prepand = "Midnight";
    }else {
        hour = 12;
        prepand = "AM";
    }
}


// Display the current date and time
console.log("Current Time : " + hour + prepand + " : " + minutes + " : " + seconds);

