function setDate() {
    console.log("I'm working!");
    var now = new Date();
    var seconds = now.getSeconds();
    console.log(seconds);
}

setInterval(setDate, 1000);