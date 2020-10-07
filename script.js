//VARIABLES
var body = document.body;
var main = body.children[1];
var highScore = document.querySelector(".highScorePage");
var timer = document.querySelector(".timer");
var h1El = document.createElement("h1");
var contentEl = document.createElement("p");
var startQuizBtn = document.createElement("button");

main.append(h1El);
main.append(contentEl);

var listEl = document.createElement("ul");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var answerList = [btn1, btn2, btn3, btn4];

btn1.setAttribute("id", "answer");
btn2.setAttribute("id", "answer");
btn3.setAttribute("id", "answer");
btn4.setAttribute("id", "answer");

var finalScore = document.createElement("span");
var initInput = document.createElement("input");
var submitBtn = document.createElement("button");

var startTime = 60;
var score = 0;

//HOMEPAGE LAYOUT
function mainScreen() {
    main.append(startQuizBtn);
    h1El.textContent = "Coding Quiz Challenge";
    contentEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score by ten seconds!";
    startQuizBtn.textContent = "Start Quiz";
    highScore.textContent = "view-high-scores.html";
}
mainScreen();

//BUTTONS AND TIMERS
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
    randQuest();
}

function randQuest() {
    var randomIndex = questions[Math.floor(Math.random() * questions.length)];
    h1El.textContent = randomIndex.quest;
    btn1.textContent = randomIndex.correct;
    btn2.textContent = randomIndex.wrong1;
    btn3.textContent = randomIndex.wrong2;
    btn4.textContent = randomIndex.wrong3;
//For loop to populate button answers, how to randomize?
    for (i = 0; i < answerList.length; i++) {
        main.children[1].append(answerList[i]);
    }
}

//NEXT QUESTION AFTER CLICKING BUTTONS, LOGS SCORE
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
//Need layout and everything adjusted.
//Event delegation to add high scores
function enterScore() {
    h1El.textContent = "All done!";
    contentEl.textContent = "Your final score is: ";
    finalScore.textContent = score;
    submitBtn.textContent = "Submit";

    main.children[1].append(finalScore);
    main.children[1].append(initInput);
    main.children[1].append(submitBtn);
}

//HIGH SCORE PAGE
//Event delegation to add high scores, timer still there
highScore.addEventListener("click", function scorePage() {
    h1El.textContent = "High Scores";
    highScore.textContent = "Take the test!";
    highScore.onclick = function () {
        mainScreen();
    };
    contentEl.textContent = "Here are the high scores.";
    startQuizBtn.remove();
});

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