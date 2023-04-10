document.addEventListener("DOMContentLoaded", function() {

    const [hoursDiv, separatorDiv, minutesDiv] = document.querySelectorAll("#clock > div");

    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;



    // Make separatorDiv " : " blink every second

    // Set an initial value for the visibility of the separator
    let separatorVisible = true;
    
    setInterval(() => {   // Create a timer that runs every second
        
        separatorVisible = !separatorVisible; // Toggle the visibility of the separator
  
        // Set the visibility of the separator
        separatorDiv.style.visibility = separatorVisible ? "visible" : "hidden";
    }, 1000);
    
  });