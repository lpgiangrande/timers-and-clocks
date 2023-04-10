// make sure code runs only after the HTML content has been loaded :
document.addEventListener("DOMContentLoaded", function() {

    // Get the #hours div element
    const hoursDiv = document.getElementById("hours");
    const minutesDiv = document.getElementById("minutes");
    // Get the current date and time
    const now = new Date();
  
    // Get the hours value
    const hours = now.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const minutes = now.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  
    // Set the #hours div element's innerHTML to the hours value
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
  });