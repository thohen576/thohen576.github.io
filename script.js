document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for contacting me!');
});

// Correct answers array
const answers = [false, true, true, false]; // Sequence of correct answers

let score = 0; // Initialize score

// Function to check answers to the quiz
function checkAnswer(questionIndex, userAnswer) {
  const resultElement = document.getElementById("result");

  // To check if the user's answer matches the correct answer
  if (answers[questionIndex] === userAnswer) {
    score++;
    resultElement.textContent = `Correct! Your score: ${score}`;
  } else {
    resultElement.textContent = `Wrong! Your score: ${score}`;
  }

  // Disable buttons after answering the current question
  const questionDiv = document.querySelectorAll(".question")[questionIndex];
  questionDiv.querySelectorAll("button").forEach(button => {
    button.disabled = true; // Disable the button
    button.style.backgroundColor = "Gray"; // Visual feedback for disabled button
    button.style.cursor = "not-allowed"; // Show "not-allowed" cursor
  });
}
