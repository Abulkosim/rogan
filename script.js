let container = document.querySelector('#container');
let joe = document.querySelector('#joe');
let gorilla = document.querySelector('#gorilla');

container.addEventListener('click', () => {
  if (joe.classList != 'animation') {
    joe.classList.add('animation');
  }

  setTimeout(() => {
    joe.classList.remove('animation');
  }, 750)
})

let score = 0;
let wrecked = setInterval(function () {
  let joeTop = parseInt(window.getComputedStyle(joe).getPropertyValue('top'));
  let gorillaLeft = parseInt(window.getComputedStyle(gorilla).getPropertyValue('left'));

  if (gorillaLeft < 50 && gorillaLeft > 0 && joeTop >= 180) {
    gorilla.style.animation = 'none';
    gorilla.style.display = 'none';
    document.querySelector('h2').innerText = `Game Over! Score: ${+Math.floor(score / 100)} (CTRL+R)`;
    score = 0;
    gorilla.style.animation = "gorilla 1s infinite linear";

  } else {
    score++;
  }
}, 15)