function setTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var day = dateTime.getDate();
    var years = dateTime.getFullYear();
    var am_pm = document.getElementById("am-Pm"); 

    var month_name = ["January", "February", "March",
     "April", "May", "June", "July", "August", 
     "September", "October", "November", "December"];
    var month = dateTime.getMonth();
    var monthName = month_name[month];
 
    if(hours >= 12){
        am_pm.innerHTML = "PM";
    }else{
        am_pm.innerHTML = "AM";
    }

    if (hours > 12){
     hours = hours - 12;
    }

     if (hours < 10){
        hours = "0" + hours;
    }

     if (minutes < 10){
        minutes = "0" + minutes;
     }
     
     if (seconds < 10){
        seconds = "0" + seconds;
     }


   if (date < 10){
    date = "0" + date ;
   }
     
    document.getElementById("day").innerHTML = day;
    document.getElementById("monthName").innerHTML = monthName;
    document.getElementById("dayName").innerHTML = dayName;
    document.getElementById("years").innerHTML = years;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    }
  setInterval(setTime, 1000);