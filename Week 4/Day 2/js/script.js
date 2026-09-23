document.querySelector("button").addEventListener("click", gradeQuiz);

let q1Choices = ['q1', 'q2', 'q3']
shuffleArray(q1Choices)
console.log(q1Choices)

    for (let i of q1Choices) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;
    
        let labelElement = document.createElement("label");
        labelElement.textContent = i;

        labelElement.prepend(inputElement);

        document.querySelector("#q1Choices").append(labelElement);
    }

let textChoice = document.querySelector("#textInput").value;

let selectChoice = document.querySelector("#selectInput").value;

let numberChoice = document.querySelector("#numberInput").value;


function gradeQuiz() {
    let results = [false, false, false, false]
    let q1Answer = "select";
    let userAnswerQ1 = document.querySelector("input[name=q1]:checked").value;
    //alert(userAnswerQ1);
    console.log(userAnswerQ1);

    let q2Answer = "blue";
    let userAnswerQ2 = document.querySelector("input[type=text]").value;
    console.log(userAnswerQ2);

    let q3Answer = "September";
    let userAnswerQ3 = document.querySelector("#selectInput").value;
    console.log(userAnswerQ3);

    let q4Answer = "4";
    let userAnswerQ4 = document.querySelector("#numberInput").value;
    console.log(userAnswerQ4);

    if (q1Answer == userAnswerQ1 ) {
        results[0] = true;
    }

    if (q2Answer == userAnswerQ2) {
        results[1] = true;
    }


}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         [ array[i], array[j] ] = [ array[j], array[i] ];
     }
}
