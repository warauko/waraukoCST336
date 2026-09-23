//empty array named colors
let colors = [];

//checking the length of an array
console.log(colors.length);

//pre-populated array
let toppings = ['lettuce', 'tomato', 'cheese'];

//adding to an array (basic)
//pushing adds to the end of the array
colors.push('red');
colors.push('green');

//splice is a function that lets you insert elements between other elements

//looking up a value in an array 
colors[0] //the first value (counting from 0)
colors[1] // the second value (counting form 0)

//querySelectorAll lets you group html elements into an array
let toppingsInputs = document.querySelectorAll("input[name=toppings]");
let buttons = document.querySelectorAll(".confirm-btn");

//FOR EACH loop
//makes a "bookmark" or "iterator" variable (color) that slides
//across the array and points to each item in it
//this happnes as many times as the array is long
console.log("LOOP DEMO");
for (let color of colors) {
    console.log(color);
}

//loop through elements to check if they're all checked
//generate a list of paragraph elements from an array of strings

