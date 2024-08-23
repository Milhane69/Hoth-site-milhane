document.addEventListener("DOMContentLoaded", function () {
    const background = document.querySelector('.background');

    for (let i = 0; i < 100; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';

        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;

        const size = Math.random() * 4 + 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.animationDuration = `${Math.random() * 2 + 1}s`;

        background.appendChild(star);
    }

    const asteroidsContainer = document.getElementById("asteroids-container");

    function createAsteroid() {
        const asteroid = document.createElement("div");
        asteroid.className = "asteroid";
        asteroidsContainer.appendChild(asteroid);

        const randomTop = Math.floor(Math.random() * window.innerHeight);
        const randomLeft = Math.floor(Math.random() * window.innerWidth);
        asteroid.style.top = randomTop + "px";
        asteroid.style.left = randomLeft + "px";

        animateAsteroid(asteroid);
    }

    function animateAsteroid(asteroid) {
        const animationDuration = Math.floor(Math.random() * (4 - 2 + 1) + 2);
        asteroid.style.animation = `moveAsteroid ${animationDuration}s linear infinite`;
    }

    for (let i = 0; i < 5; i++) {
        createAsteroid();
    }
});
