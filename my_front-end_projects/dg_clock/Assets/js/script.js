function updateClock() {
   //comment- another logic(code) to execute 
   /* const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
   */
   let date = new Date();
   let hours = date.getHours(); //% 12 || 12;
   let minutes = date.getMinutes().toString().padStart(2, "0");
   let seconds = date.getSeconds().toString().padStart(2, "0");
   let am_pm = "am";
   if (hours >= 12) {
      if (hours > 12) hours -= 12;
      am_pm = "pm";
   } else if (hours == 0) {
      hours = 12;
      //am_pm = "PM"
   }

   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;

   document.getElementById("seconds").innerHTML = seconds;
   document.getElementById("ampm").innerHTML = am_pm;


}

//  hours = hours < 10 ? "0" + hours : hours;
//  minutes = minutes < 10 ? "0" + minutes : minutes;
//  seconds = seconds < 10 ? "0" + seconds : seconds;

//  const time = hours + ':' + minutes + ':' + seconds;
//  document.getElementById('clock').textContent = time;


//update the clock every second
setInterval(updateClock, 1000);
updateClock();

//Initialize the clock

