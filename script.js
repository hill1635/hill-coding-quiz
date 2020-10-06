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
        if (startTime == 0) {
            listEl.remove()
            clearInterval(timeDecrease);
            enterScore();
        }
    }, 1000);
    startQuiz();
});

function startQuiz() {
    contentEl.textContent = "";
    startQuizBtn.remove();
    main.append(listEl);
    main.children[1].append(btn1);
    main.children[1].append(btn2);
    main.children[1].append(btn3);
    main.children[1].append(btn4);
    randQuest();
}

//Order doesn't matter right now
var listEl = document.createElement("ul");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");

btn1.setAttribute("id", "answer");
btn2.setAttribute("id", "answer");
btn3.setAttribute("id", "answer");
btn4.setAttribute("id", "answer");
var answerList = [btn1, btn2, btn3, btn4];
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

function randQuest() {
    var randomIndex = questions[Math.floor(Math.random() * questions.length)];
    h1El.textContent = randomIndex.quest;
    btn1.textContent = randomIndex.correct;
    btn2.textContent = randomIndex.wrong1;
    btn3.textContent = randomIndex.wrong2;
    btn4.textContent = randomIndex.wrong3;
}

//NEXT QUESTION AFTER CLICKING BUTTONS, LOGS SCORE
var score = 0;
for (i = 0; i < answerList.length; i++) {
    answerList[i].addEventListener("click", function nextQuest() {
        randQuest();
    });
}
btn1.onclick = function () {
    score++;
    console.log(score);
}
//ENTER SCORE PAGE
//Reinstate contentEl element, need layout and everything adjusted.
//Event delegation to add high scores
function enterScore() {
    h1El.textContent = "All done!";
    contentEl.textContent = "Your final score is:";

    var initInput = document.createElement("input");
    main.children[1].append(initInput);

    var submitBtn = document.createElement("button");
    main.children[1].append(submitBtn);
    submitBtn.textContent = "Submit";
}

//HIGH SCORE PAGE
//Reinstate contentEl element.
var highScore = document.querySelector(".highScorePage");
highScore.addEventListener("click", function viewPage() {
    h1El.textContent = "High Scores";
    contentEl.textContent = "Here are the high scores.";
    startQuizBtn.remove();
});
