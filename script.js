// Creates page elements
var body = document.body;
var main = body.children[1];
var highScoreLink = document.querySelector(".highScorePage");
var timer = document.querySelector(".timer");
var h1El = document.createElement("h1");
var contentEl = document.createElement("p");
var startBtn = document.querySelector(".startBtn");

// Creates page
main.append(h1El);
main.append(contentEl);

// Quiz variables
var score = 0;
var startTime = 60;
var questCount = 0;
var scoresArray = [];

// Timer
function countdown() {
  var timeDecrease = setInterval(function () {
    startTime--;
    timer.textContent = "timer.js: " + startTime;
    if (startTime == 0 || questCount == questions.length) {
      listEl.remove();
      clearInterval(timeDecrease);
      enterScore();
    }
  }, 1000);
  randQuest();
}

// Start button function
function startQuiz() {
  var listEl = document.createElement("ul");
  contentEl.textContent = "";
  startBtn.remove();
  main.append(listEl);
  randQuest();
}

//Random question generator
function randQuest() {
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var btn3 = document.createElement("button");
  var btn4 = document.createElement("button");
  var answerList = [btn1, btn2, btn3, btn4];
  var randomIndex = questions[Math.floor(Math.random() * questions.length)];

  h1El.textContent = randomIndex.quest;
  btn1.textContent = randomIndex.correct;
  btn2.textContent = randomIndex.wrong1;
  btn3.textContent = randomIndex.wrong2;
  btn4.textContent = randomIndex.wrong3;

  for (i = 0; i < answerList.length; i++) {
    main.children[1].append(answerList[i]);
  }

  for (i = 0; i < answerList.length; i++) {
    answerList[i].addEventListener("click", function nextQuest() {
      questCount++;
      randQuest();
    });
  }

  for (i = 1; i < answerList.length; i++) {
    answerList[i].onclick = function () {
      startTime = startTime - 10;
    };
  }

  btn1.onclick = function () {
    score++;
  };
}

// Enter score page
function enterScore() {
  var finalScore = document.createElement("span");
  var initInput = document.createElement("input");
  var submitBtn = document.createElement("button");
  var scoreDiv = document.createElement("div");
  var submitDiv = document.createElement("div");

  h1El.textContent = "All done!";
  contentEl.textContent = "yourFinalScore = ";
  finalScore.textContent = score;
  submitBtn.textContent = "<Submit>";

  contentEl.setAttribute("style", "color: rgb(156 220 254);");
  finalScore.setAttribute("style", "font-weight: bold; color: rgb(181 206 168);");
  initInput.setAttribute("style", "background-color: rgb(51 51 51); color: white; border: solid; border-color: rgb(51 51 51)");
  submitBtn.setAttribute("style", "font-weight: bold; color: rgb(0 169 96);");

  main.children[1].append(scoreDiv);
  main.children[1].append(submitDiv);
  main.children[1].children[0].append(finalScore);
  main.children[1].children[1].append(initInput);
  main.children[1].children[1].append(submitBtn);
  submitBtn.addEventListener("click", addScore);
}

// Adds score to high scores
function addScore() {
  var scoreDisplay = {
    name: initInput.value,
    final: score,
  };
  scoresArray.push(scoreDisplay);
  scorePage();
}

// Displays high scores
function renderScore() {
  for (var i = 0; i < scoresArray.length; i++) {
    var highScoreListEL = document.createElement("li");
    main.children[2].append(highScoreListEL);
    highScoreListEL.textContent =
      scoresArray[i].name + " - " + scoresArray[i].final;
  }
}

// Renders score page
function scorePage() {
  startBtn.remove();
  highScoreLink.textContent = "";

  h1El.textContent = "High Scores";
  contentEl.textContent = "";

  var highScoreList = document.createElement("ul");
  main.append(highScoreList);

  var homeBtn = document.createElement("button");
  main.append(homeBtn);
  homeBtn.textContent = "<Take the Quiz>";
  homeBtn.setAttribute("style", "font-weight: bold; color: rgb(0 169 96);");
  homeBtn.onclick = function () {
    mainScreen();
    homeBtn.remove();
    highScoreList.remove();
  };
  renderScore();
}


// Questions
var q1 = {
    quest: "Commonly used data types DO NOT include:",
    correct: "Alerts",
    wrong1: "Booleans",
    wrong2: "Strings",
    wrong3: "Numbers",
};
var q2 = {
    quest: "The condition in an if/else statement is enclosed within ____.",
    correct: "Parentheses",
    wrong1: "Curly Brackets",
    wrong2: "Parentheses",
    wrong3: "Square Brackets",
};

var q3 = {
    quest: "Arrays in JavaScript can be used to store ____.",
    correct: "All of the above",
    wrong1: "Numbers and strings",
    wrong2: "Other Arrays",
    wrong3: "Booleans",
};

var q4 = {
    quest:
    "String values must be enclosed within ____ when being assigned to variables.",
    correct: "Quotes",
    wrong1: "Commas",
    wrong2: "Curly Brackets",
    wrong3: "Parentheses",
};
var questions = [q1, q2, q3, q4];

// Event listeners
highScoreLink.addEventListener("click", scorePage);
startBtn.addEventListener("click", countdown);