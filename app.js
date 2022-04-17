const toggle = document.querySelector('.toggle');
const ball = toggle.querySelector('.toggle .ball');
const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');
let i = 0;

ball.addEventListener('click', () => {
    i++;
    ball.classList.add('active');
    price1.textContent = "$199.99";
    price2.textContent = "$249.99";
    price3.textContent = "$399.99";
    console.log('hi')
    if(i == 2 || i == 4 || i == 6 || i == 8 || i == 10 || i == 12 || i == 14 || i == 16 || i == 18 || i == 20) {
        ball.classList.remove('active');
        price1.textContent = "$19.99";
        price2.textContent = "$24.99";
        price3.textContent = "$39.99";
    }
})
