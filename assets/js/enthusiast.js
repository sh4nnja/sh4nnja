const txtPool = ['Graphic Design', 'Game Development', 'Robotics Programming', 'Video Editing', 'Multimedia'];
const textElement = document.getElementById("bold");

let currentIndex = 0;
let charIndex = 0;

function typeWriterEffect() {
    currentIndex = Math.floor(Math.random() * txtPool.length - 1);
    let currentText = txtPool[currentIndex];
    function type() {
        if (charIndex < currentText.length) {
            textElement.innerHTML += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            let currentTextContent = textElement.innerHTML;
            textElement.innerHTML = currentTextContent.slice(0, -1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            currentIndex = (currentIndex + 1) % txtPool.length;
            currentText = txtPool[currentIndex];
            charIndex = 0;
            setTimeout(type, 500);
        }
    }
  type();
}
window.addEventListener("load", typeWriterEffect);


