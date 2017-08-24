var secondHand = document.querySelector('.sec-hand');

//setting the date and getting the current time
function setDate() {
    console.log(Date());
    //getting current date and time
    var now = new Date();
    //getting the seconds of the current date and time
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
}

//setInterval causes the called function to be excuted every 1000 milliseconds
setInterval(setDate, 1000);