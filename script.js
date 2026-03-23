// The text that will appear and disappear
const phrases = [
    "Mobile App Developer",
    "ICT Instructor",
    "IT Researcher",
    "Network Administrator"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === phrases.length) {
        count = 0;
    }
    currentText = phrases[count];
    letter = currentText.slice(0, ++index);

    document.querySelector("#typing-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause at the end of a phrase
    } else {
        setTimeout(type, 100); // Speed of typing
    }
}());