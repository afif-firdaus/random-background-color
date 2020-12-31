const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn');

function randomColor() {
    var arr = [];
    for (var i = 0; i < 6; i++) {
        var acak = hex[Math.floor(Math.random() * 16)];
        arr.push(acak);
    }
    return "#" + arr.join("")
}
button.addEventListener("click", function () {
    let random = randomColor();
    document.body.style.backgroundColor = random;
    document.getElementsByClassName('color')[0].innerHTML = random
});

//Instructions
// 1. declare btn(id) and color(class) object by using dom syntax (getElementById and querySelector)
// 2. setup addEventListener on clicked btn object
// 3. declare the hexColor with # + 6 random number from hex array variable by using for loop function
// 4. create function getRandomNumber() by Math function to get random number of hex variable (length is considerable)
// there is a clue (by using math JS function)