document.addEventListener("DOMContentLoaded", function() {

    const [hoursDiv, separatorDiv, minutesDiv, ampmDiv] = document.querySelectorAll("#clock > div");

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');

    /**
     * Convert to 12-hour format (01 PM pour 13H)
     * --> Returns 03h PM instead of 15h (15%12 = 3) or 12 instead of 0 for 12%12. 
     * --> the modulo operation on a number n that is less than the divisor simply returns n
     */
    const hours12 = hours % 12 || 12; 
    hoursDiv.innerHTML = hours12.toString().padStart(2, '0');
    minutesDiv.innerHTML = minutes;
    ampmDiv.innerHTML = hours >= 12 ? 'PM' : 'AM';
    

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