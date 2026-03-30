/* game.js — reaction time test */

var box = document.getElementById("reaction-box");
var boxText = document.getElementById("box-text");
var resultText = document.getElementById("result-text");

var state = "waiting"; // waiting | ready | go
var startTime = 0;
var timer = null;

box.onclick = function () {
  if (state === "waiting") {
    // Start — turn red, wait a random delay then go green
    state = "ready";
    box.className = "reaction-box ready";
    boxText.textContent = "Wait for green...";
    resultText.textContent = "";

    var delay = Math.floor(Math.random() * 2500) + 1500; // 1.5s – 4s

    timer = setTimeout(function () {
      state = "go";
      box.className = "reaction-box go";
      boxText.textContent = "CLICK NOW!";
      startTime = Date.now();
    }, delay);
  } else if (state === "ready") {
    // Clicked too early
    clearTimeout(timer);
    state = "waiting";
    box.className = "reaction-box waiting";
    boxText.textContent = "Too early! Click to try again.";
    resultText.textContent = "";
  } else if (state === "go") {
    // Clicked in time — show result
    var ms = Date.now() - startTime;

    state = "waiting";
    box.className = "reaction-box waiting";
    boxText.textContent = "Click to Start";

    var rating = "Keep practicing!";
    if (ms < 200) {
      rating = "Incredible!";
    } else if (ms < 300) {
      rating = "Great!";
    } else if (ms < 500) {
      rating = "Not bad!";
    }

    resultText.textContent = "Your time: " + ms + "ms — " + rating;
  }
};

document.addEventListener("keydown", function (e) {
  if (state === "go" && e.key === "Enter") {
    var ms = Date.now() - startTime;

    state = "waiting";
    box.className = "reaction-box waiting";
    boxText.textContent = "Click to Start";

    var rating = "Keep practicing!";
    if (ms < 200) {
      rating = "Incredible!";
    } else if (ms < 300) {
      rating = "Great!";
    } else if (ms < 500) {
      rating = "Not bad!";
    }

    resultText.textContent = "Your time: " + ms + "ms — " + rating;
  }
});
