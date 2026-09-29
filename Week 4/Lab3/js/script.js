document.addEventListener("DOMContentLoaded", function () {
    let quiz = document.querySelector("#quiz");

    console.log("Quiz form:", quiz);

    if (quiz != null) {
        quiz.addEventListener("submit", gradeQuiz);
    }
});

let q1Choices = [
    ["select", "HyperText Markup Language"],
    ["style", "Hyperlink Text Styling Language"],
    ["script", "Home Tool Markup Language"]
];

shuffleArray(q1Choices)
console.log(q1Choices)

for (let i = 0; i < q1Choices.length; i++) {
    let inputElement = document.createElement("input");
    inputElement.type = "radio";
    inputElement.name = "q1";
    inputElement.value = q1Choices[i][0];

    let labelElement = document.createElement("label");
    labelElement.appendChild(inputElement);
    labelElement.appendChild(
        document.createTextNode(" " + q1Choices[i][1])
    );

    document
        .querySelector("#q1Choices .choice-list")
        .appendChild(labelElement);
}

let attempts = localStorage.getItem("quizAttempts");

if (attempts == null) {
    attempts = 0;
}

document.querySelector("#attemptCount").textContent = attempts;

let textChoice = document.querySelector("#textInput").value;

let selectChoice = document.querySelector("#selectInput").value;

let numberChoice = document.querySelector("#numberInput").value;




function gradeQuiz(event) {
    event.preventDefault();

    let score = 0;
    let answered = 0;

    let q1Input = document.querySelector("input[name=q1]:checked");
    let userAnswerQ1 = "";

    if (q1Input != null) {
        userAnswerQ1 = q1Input.value;
        answered++;
    }

    if (userAnswerQ1 == "select") {
        score += 20;
        showFeedback(1, true, "Correct!");
    } else if (userAnswerQ1 == "") {
        showFeedback(1, false, "Cannot be blank");
    } else {
        showFeedback(
            1,
            false,
            "The correct answer is HyperText Markup Language."
        );
    }

    let userAnswerQ2 = document.querySelector("#textInput").value;

    if (userAnswerQ2 != "") {
        answered++;
    }

    if (userAnswerQ2 == "blue") {
        score += 20;
        showFeedback(2, true, "Correct!");
    } else if (userAnswerQ2 == "") {
        showFeedback(2, false, "Cannot be blank");
    } else {
        showFeedback(2, false, "The answer is blue!");
    }

    let userAnswerQ3 = document.querySelector("#selectInput").value;

    if (userAnswerQ3 != "") {
        answered++;
    }

    if (userAnswerQ3 == "September") {
        score += 20;
        showFeedback(3, true, "Correct!");
    } else if (userAnswerQ3 == "") {
        showFeedback(3, false, "Cannot be blank");
    } else {
        showFeedback(3, false, "The answer is September!");
    }

    let userAnswerQ4 = document.querySelector("#numberInput").value;

    if (userAnswerQ4 != "") {
        answered++;
    }

    if (userAnswerQ4 == "4") {
        score += 20;
        showFeedback(4, true, "Correct!");
    } else if (userAnswerQ4 == "") {
        showFeedback(4, false, "Cannot be blank");
    } else {
        showFeedback(4, false, "The answer is 4!");
    }

    let checkedAnswers = document.querySelectorAll(
        "input[name=q5]:checked"
    );

    let hasColor = false;
    let hasSize = false;
    let hasWrongAnswer = false;

    for (let i = 0; i < checkedAnswers.length; i++) {
        if (checkedAnswers[i].value == "color") {
            hasColor = true;
        }

        if (checkedAnswers[i].value == "size") {
            hasSize = true;
        }

        if (checkedAnswers[i].value == "squid") {
            hasWrongAnswer = true;
        }
    }

    if (
        hasColor == true &&
        hasSize == true &&
        hasWrongAnswer == false &&
        checkedAnswers.length == 2
    ) {
        score += 20;
        showFeedback(5, true, "Correct!");
    }

    attempts = Number(attempts) + 1;

    localStorage.setItem("quizAttempts", attempts);

    document.querySelector("#attemptCount").textContent = attempts;

    let results = document.querySelector("#results");

    results.hidden = false;

    results.textContent =
        "Your score: " +
        score +
        "/100. You answered " +
        answered +
        "/5 questions.";

    if (score > 80) {
        results.textContent += " Congratulations!";
    }
}

function showFeedback(questionNumber, correct, message) {
    let feedback = document.querySelector(
        "#feedback" + questionNumber
    );

    let icon = document.createElement("span");

    if (correct == true) {
        icon.textContent = "✓";
        icon.className = "feedback-icon correct";
        feedback.className = "feedback correct";
    } else {
        icon.textContent = "✗";
        icon.className = "feedback-icon incorrect";
        feedback.className = "feedback incorrect";
    }

    feedback.replaceChildren(
        icon,
        document.createTextNode(" " + message)
    );
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
