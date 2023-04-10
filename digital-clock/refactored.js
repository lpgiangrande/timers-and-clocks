// make sure code runs only after the HTML content has been loaded :
document.addEventListener("DOMContentLoaded", function() {

    // Get the #hours and # minutes div element
    const [hoursDiv, separatorDiv, minutesDiv] = document.querySelectorAll("#clock > div");

    // Get the current date and time
    const now = new Date();
  
    // Get the hours value
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    // Set the #hours div element's innerHTML to the hours value
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;



    // Make separatorDiv blink every second

    // Set an initial value for the visibility of the separator
    let separatorVisible = true;
    
    // Create a timer that runs every second
    setInterval(() => {
        // Toggle the visibility of the separator
        separatorVisible = !separatorVisible;
  
        // Set the visibility of the separator
        separatorDiv.style.visibility = separatorVisible ? "visible" : "hidden";
    }, 1000);
    
  });