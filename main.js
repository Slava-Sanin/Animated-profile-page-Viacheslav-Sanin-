import './style.css'

// Создаем анимированные частицы на фоне
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            top: ${Math.random() * 100}vh;
            left: ${Math.random() * 100}vw;
            pointer-events: none;
            transform: translate(-50%, -50%);
        `;

        particlesContainer.appendChild(particle);

        // Анимация частиц
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const duration = Math.random() * 3 + 2;
    const xDistance = (Math.random() - 0.5) * 200;
    const yDistance = (Math.random() - 0.5) * 200;

    particle.animate([
        { transform: 'translate(-50%, -50%)' },
        { transform: `translate(calc(-50% + ${xDistance}px), calc(-50% + ${yDistance}px))` }
    ], {
        duration: duration * 1000,
        direction: 'alternate',
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}

// Добавляем эффект параллакса при движении мыши
function addParallaxEffect() {
    const card = document.querySelector('.profile-card');
    const avatar = document.querySelector('.avatar');

    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        avatar.style.transform = `translateZ(20px) scale(1.05) rotateY(${-xAxis}deg) rotateX(${-yAxis}deg)`;
    });

    // Возвращаем в исходное положение при уходе мыши
    document.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0) rotateX(0)';
        avatar.style.transform = 'translateZ(0) scale(1)';
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    addParallaxEffect();
});