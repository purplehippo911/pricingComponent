const toggle = document.querySelector('.toggle');
const ball = toggle.querySelector('.toggle .ball');
const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');

function toggleOn() {
    i++;
    ball.classList.toggle('active');
    price1.textContent = "$199.99";
    price2.textContent = "$249.99";
    price3.textContent = "$399.99";
    console.log('hi')
    if(ball.classList = "active") {
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
