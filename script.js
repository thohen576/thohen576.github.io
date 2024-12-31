document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for contacting me!');
});

let score = 0; // Initialize score

// Function to check answers to my quiz!
function checkAnswer(questionIndex, userAnswer) {
  const resultElement = document.getElementById("result");
  if (answers[questionIndex] === userAnswer) {
    score++;
    resultElement.textContent = `Correct! Your score: ${score}`;
  } else {
    resultElement.textContent = `Wrong! Your score: ${score}`;
  }

  // Disable buttons after answering
  const questionDiv = document.querySelectorAll(".question")[questionIndex];
  questionDiv.querySelectorAll("button").forEach(button => {
    button.disabled = true;
    button.style.backgroundColor = "Gray"; // Visual feedback for disabled button
    button.style.cursor = "not-allowed";
  });
}
