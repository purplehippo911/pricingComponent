const toggle = document.querySelector('.toggle');
const ball = toggle.querySelector('.toggle .ball');
const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');
let i = 0;

function toggleOn() {
    i++;
    ball.classList.add('active');
    price1.textContent = "$199.99";
    price2.textContent = "$249.99";
    price3.textContent = "$399.99";
    console.log('hi')
    if(i == 2 || i == 4 || i == 6 || i == 8 || i == 10 || i == 12 || i == 14 || i == 16 || i == 18 || i == 20 || i == 22) {
        ball.classList.remove('active');
        price1.textContent = "$19.99";
        price2.textContent = "$24.99";
        price3.textContent = "$39.99";
    }
}

// This function is so toggleOn() can run when the keyboard arrows are clicked//
function keyboardInput(e) {
    switch(e.key) {
        case "ArrowRight":
            toggleOn();
            break;
        case "ArrowLeft":
            toggleOn();
            break;
    }
    return;
}

toggle.addEventListener('click', toggleOn);
window.addEventListener("keydown", keyboardInput);