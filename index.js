// Ask the user to enter their birth date
var input = prompt("Enter your Birth Date (YYYY-MM-DD):");

// Create Dates
var birthDate = new Date(input);
var currentDate = new Date();


// Check if the date is valid
if (isNaN(birthDate.getTime())) {
    console.log("Invalid Date!");
}
else if (birthDate > currentDate) {
    console.log("Birth date cannot be in the future!");
}
else {

    // Calculate difference in milliseconds
    var difference = currentDate - birthDate;

    // Convert into different units
    var milliseconds = difference;
    var seconds = Math.floor(milliseconds / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var weeks = Math.floor(days / 7);
    var months = Math.floor(days / 30.44);
    var years = Math.floor(days / 365.25);

    // Display the results
    
    console.log("Birth Date      : " + birthDate.toDateString());
    console.log("Current Date    : " + currentDate.toDateString());
    console.log("Years Lived     : " + years);
    console.log("Months Lived    : " + months);
    console.log("Weeks Lived     : " + weeks);
    console.log("Days Lived      : " + days);
    console.log("Hours Lived     : " + hours);
    console.log("Minutes Lived   : " + minutes);
    console.log("Seconds Lived   : " + seconds);
    console.log("Milliseconds    : " + milliseconds);
}