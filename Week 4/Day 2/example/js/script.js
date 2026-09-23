document.querySelector("button").addEventListener("click", gradeQuiz);


//<label></label>
//<input name="q1" type="radio" value="dropdown"> Dropdown

shuffleQ1();
function shuffleQ1(){

    let q1Choices = ["select", "option", "dropdown", "menu"];
    q1Choices = shuffleArray(q1Choices);
    console.log(q1Choices);
    
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
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         [ array[i], array[j] ] = [ array[j], array[i] ];
     }
     return array;
}


function gradeQuiz(){
    let q1Answer = "select"
    let userAnswerQ1 = document.querySelector("input[name=q1]:checked").value;
    //alert(userAnswerQ1);

    if (q1Answer == userAnswerQ1 ) {
        //display: the answer is right!
    }
}