const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const button = document.getElementById('btn');

button.addEventListener("click", function () {
    let acak = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = acak;
    document.getElementsByClassName('color')[0].innerHTML = acak;
});

//Instructions
// 1. declare btn(id) and color(class) object by using dom syntax (getElementById and querySelector)
// 2. setup addEventListener on clicked btn object
// 3. setup the click event listener to manipulate the body document
// 4. setup btn event listener to get random number between 0-3(base on our color length)
// 5. setup btn event to change the background color base of randomNumber
// 6. create getRandomNumber function to create exact number (this is logic challenge and length is considerable)
// there is a clue (by using math JS function)