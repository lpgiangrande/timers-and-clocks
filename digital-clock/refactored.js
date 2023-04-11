/**
 * DIGITAL CLOCK
 * 
 * - It retrieves the Date() object and uses it to fill HTML DIVs to create a simple digital clock.
 * - AM or PM is added using the % operator on the const hours.
 * - We make the " : " blink to represents seconds
 * - Displays YY MM DD
 */

document.addEventListener("DOMContentLoaded", function() {

    const [hoursDiv, separatorDiv, minutesDiv, ampmDiv] = document.querySelectorAll("#time > div");
    const dateDiv = document.getElementById('date');
    const now = new Date();
    const currentDate = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const day = currentDate.getDate();


    function addLeadingZero(n){
        return n.toString().padStart(2, '0');
    }

    let daySuffix = 'th';
    if (day === 1 || day === 21 || day === 31) {
        daySuffix = 'st';
    } else if (day === 2 || day === 22) {
        daySuffix = 'nd';
    } else if (day === 3 || day === 23) {
        daySuffix = 'rd';
    }


    hoursDiv.innerHTML = addLeadingZero(hours % 12 || 12); // hours format : return 12 if %0 or 3 for 15h, etc...
    minutesDiv.innerHTML = addLeadingZero(minutes);
    ampmDiv.innerHTML = hours < 12 ? 'AM' : 'PM';
    dateDiv.innerHTML = `${year}, ${month.toUpperCase()} ${day}${daySuffix.toLowerCase()}`;


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