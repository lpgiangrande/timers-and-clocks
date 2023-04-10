document.addEventListener("DOMContentLoaded", function() {

    const [hoursDiv, separatorDiv, minutesDiv] = document.querySelectorAll("#clock > div");

    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;

    /**
     * Make separatorDiv " : " blink every second
     * 
     * The function toggles the value of separatorVisible between true and false 
     * by using the logical NOT operator (!) -> toggle classes each second
     * 
     */
    function blink() {
        let separatorVisible = true; // Set an initial value for the visibility of the separator
    
        setInterval(() => { 
            separatorVisible = !separatorVisible; // Toggle the visibility of the separator
            separatorDiv.style.visibility = separatorVisible ? "visible" : "hidden"; // Set the visibility of the separator
        }, 1000);
    }
    blink();
    
  });