var secondHand = document.querySelector('.sec-hand');
var hourHand = document.querySelector('.hour-hand');
var minuteHand = document.querySelector('.min-hand');

//setting the date and getting the current time
function setDate() {
    console.log(Date());
    //getting current date and time
    var now = new Date();
    //getting the seconds of the current date and time
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    //getting the hours of the current date and time
    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(seconds);

    //getting the minutes of the current date and time
    var minutes = now.getHours();
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;


}

//setInterval causes the called function to be excuted every 1000 milliseconds
setInterval(setDate, 1000);