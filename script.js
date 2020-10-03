var timer = document.querySelector(".timer");
var startBtn = document.querySelector(".startquiz");

var startTime = 60;

// Working timer.
startBtn.addEventListener("click", function countdown() {
    var timeDecrease = setInterval(function () {
        startTime--;
        timer.textContent = "Time: " + startTime;
        console.log(startTime);
        if (startTime == 0) {
            clearInterval(timeDecrease);
            alert("Times Up!")
        }
    }, 1000);
});
