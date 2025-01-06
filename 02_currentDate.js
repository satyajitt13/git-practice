// print the current date in various formats
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


// get the current date
let today = new Date();

// get the day of the month
let month = today.getMonth() + 1;

// get the year
let year = today.getFullYear();

// get the day;
let day = today.getDay();

// add leading zero if day is less than 10
if (day < 10) {
    day = "0" + day;
}

// add leading zero if month is less than 10
if (month < 10) {
    month = "0" + month;
}

// Format the date as mm-dd-yyyy and log it
today = month + "-" + day + "-" + year
console.log(today);


// Format the date as dd-mm-yyyy and log it
today = day + '-' + month + '-' + year;
console.log(today);

// Format the date as dd/mm/yyyy and log it
today = day + '/' + month + '/' + year;
console.log(today); 
