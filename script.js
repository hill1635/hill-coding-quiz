var body = document.body;
var main = body.children[1];
main.setAttribute("style", "text-align:center;");

//PAGE LAYOUT HOMEPAGE
var h1El = document.createElement("h1");
h1El.textContent = "Coding Quiz Challenge";
body.children[1].append(h1El);
console.log(h1El);

var contentEl = document.createElement("p");
contentEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score by ten seconds!";
body.children[1].append(contentEl);

var startQuizBtn = document.createElement("button");
startQuizBtn.textContent = "Start Quiz";
body.children[1].append(startQuizBtn);

//startQuizBtn.setAttribute("class", "startquiz"); KEEP IF THIS DOESNT WORK

//BUTTONS AND TIMERS
var timer = document.querySelector(".timer");
//var startBtn = document.querySelector(".startquiz");  KEEP IF THIS DOESNT WORK

var startTime = 60;

startQuizBtn.addEventListener("click", function countdown() {
    var timeDecrease = setInterval(function () {
        startTime--;
        timer.textContent = "Time: " + startTime;
        startQuiz();
        if (startTime == 0) {
            clearInterval(timeDecrease);
        }
    }, 1000);
});

//Function works, need to link randomly selected questions/answers
function startQuiz() {
    h1El.textContent = q1.Q;
    contentEl.textContent = "";
    main.children[1].append(listEl);
    main.children[1].append(li1);
    main.children[1].append(li2);
    main.children[1].append(li3);
    main.children[1].append(li4);
    startQuizBtn.remove();
}

//Order doesn't matter
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = "Poop";
li2.textContent = "Poop";
li3.textContent = "Poop";
li4.textContent = "Poop";


//QUIZ QUESTIONS AND STUFF
var q1 = {
    Q: "What is your name?",
    A1: "Bob",
    A2: "Bobby",
    Correct: "Bobert",
    A4: "Robert"
}

var questions = [q1, q2, q3, q4]
//For loop to go through Q's
