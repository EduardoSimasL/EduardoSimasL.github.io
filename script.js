
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const animatedElement = document.getElementById('animatedElement');
let position = 0;
let direction = 1;

function animate() {
    position += direction;
    animatedElement.style.left = position + 'px';

    if (position >= window.innerWidth - 100 || position <= 0) {
        direction *= -1;
    }

    requestAnimationFrame(animate);
}

animate();
