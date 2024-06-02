const box = document.getElementById('box');

let x = 0;
let y = 0;

const animationInterval = setInterval(() => {
    x += 2;
    y += 2;

    box.style.left = x + 'px';
    box.style.top = y + 'px';

    if (x >= window.innerWidth - box.offsetWidth || y >= window.innerHeight - box.offsetHeight) {
        clearInterval(animationInterval);
    }
}, 10);


const carousel = document.getElementById('carouselExample4');
carousel.addEventListener('DOMContentLoaded', () => {
    carousel.carousel('cycle');
});