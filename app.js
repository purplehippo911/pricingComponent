const toggle = document.querySelector('.toggle');
const ball = toggle.querySelector('.ball');
const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');

ball.addEventListener('click', () => {
    price1.textContent = "$199.99";
    price2.textContent = "$249.99"
    price3.textContent = "$399.99"

})


