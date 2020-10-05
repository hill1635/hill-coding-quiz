//HOMEPAGE LAYOUT
var body = document.body;
var main = body.children[1];
var h1El = document.createElement("h1");
var contentEl = document.createElement("p");
var startQuizBtn = document.createElement("button");

main.setAttribute("style", "text-align:center;");
h1El.textContent = "Coding Quiz Challenge";
contentEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score by ten seconds!";
startQuizBtn.textContent = "Start Quiz";

main.append(h1El);
main.append(contentEl);
main.append(startQuizBtn);

//BUTTONS AND TIMERS
var timer = document.querySelector(".timer");
var startTime = 60;

startQuizBtn.addEventListener("click", function countdown() {
    var timeDecrease = setInterval(function () {
        startTime--;
        timer.textContent = "Time: " + startTime;
        startQuiz();
        if (startTime == 0) {
            clearInterval(timeDecrease);
            enterScore();
        }
    }, 1000);
});

function startQuiz() {
    contentEl.textContent = "";
    main.children[1].append(listEl);
    main.children[1].children[0].append(li1);
    main.children[1].children[0].append(li2);
    main.children[1].children[0].append(li3);
    main.children[1].children[0].append(li4);
    randQuest();
    startQuizBtn.remove();
}

//Order doesn't matter
var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
//Below not working.
listEl.setAttribute("style", "");


//QUIZ QUESTIONS AND STUFF
var q1 = {
    quest: "Commonly used data types DO NOT include:",
    correct: "Alerts",
    wrong1: "Booleans",
    wrong2: "Strings",
    wrong3: "Numbers"
};
var q2 = {
    quest: "The condition in an if/else statement is enclosed within ____.",
    correct: "Parentheses",
    wrong1: "Curly Brackets",
    wrong2: "Parentheses",
    wrong3: "Square Brackets"
};

var q3 = {
    quest: "Arrays in JavaScript can be used to store ____.",
    correct: "All of the above",
    wrong1: "Numbers and strings",
    wrong2: "Other Arrays",
    wrong3: "Booleans"
};

var q4 = {
    quest: "String values must be enclosed within ____ when being assigned to variables.",
    correct: "Quotes",
    wrong1: "Commas",
    wrong2: "Curly Brackets",
    wrong3: "Parentheses"
};

var questions = [q1, q2, q3, q4];
//For loop to go through Q's
var randomIndex = questions[Math.floor(Math.random() * questions.length)];
//Put in randomizing functions
function randQuest() {
    h1El.textContent = randomIndex.quest;
    li1.textContent = randomIndex.correct;
    li2.textContent = randomIndex.wrong1;
    li3.textContent = randomIndex.wrong2;
    li4.textContent = randomIndex.wrong3;
}

//NEXT QUESTION

//ENTER SCORE PAGE
//"Works", need layout adjusted.
function enterScore() {
    h1El.textContent = "All done!";
    contentEl.textContent = "Your final score is:";

    var initInput = document.createElement("input");
    main.children[1].append(initInput);

    var submitBtn = document.createElement("button");
    main.children[1].append(submitBtn);
    submitBtn.textContent = "Submit";
}
