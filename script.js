/* --- Typing Animation Logic --- */
const typingElement = document.querySelector("#typing-text");
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

// Only run typing animation if the element exists on the current page
if (typingElement) {
    (function type() {
        if (count === phrases.length) {
            count = 0;
        }
        currentText = phrases[count];
        letter = currentText.slice(0, ++index);

        typingElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause at the end
        } else {
            setTimeout(type, 100); // Typing speed
        }
    }());
}

/* --- Theme Toggle with Memory (LocalStorage) --- */
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// 1. Check if user previously chose dark mode
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

// 2. Handle the click event
if (themeToggle) {
    themeToggle.onclick = () => {
        body.classList.toggle("dark");

        // 3. Save the preference
        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    };
}