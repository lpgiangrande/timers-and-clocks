/**
 * This file is an event that fires when the page loads. 
 * It retrieves the Date() object and uses it to fill HTML DIVs to create a simple digital clock.
 * 
 * The hours are converted to the 12-hour clock system, and a leading 0 is added when necessary (format: 00h:00mn).
 * AM or PM is added using the % operator on the const hours.
 * We make the " : " blink to represents seconds
 * 
 * Add the date 
 */

document.addEventListener("DOMContentLoaded", function() {

    const [hoursDiv, separatorDiv, minutesDiv, ampmDiv] = document.querySelectorAll("#time > div");
    const dateDiv = document.getElementById('date');
    const now = new Date();
    const currentDate = new Date();
    let hours = now.getHours();
    hours = hours % 12 || 12;  // Returns 03h PM instead of 15h (15%12 = 3) or 12 instead of 0 for 12%12 or n. 
    const minutes = now.getMinutes();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const day = currentDate.getDate();

    let daySuffix = 'th';
    if (day === 1 || day === 21 || day === 31) {
        daySuffix = 'st';
    } else if (day === 2 || day === 22) {
        daySuffix = 'nd';
    } else if (day === 3 || day === 23) {
        daySuffix = 'rd';
    }

    function addLeadingZero(n){
        return n.toString().padStart(2, '0');
    }


    hoursDiv.innerHTML = addLeadingZero(hours);
    minutesDiv.innerHTML = addLeadingZero(minutes);
    ampmDiv.innerHTML = hours >= 12 ? 'PM' : 'AM';
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