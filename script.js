const textArray = ["Front-End Web Developer", "UI/UX Designer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1500; // Delay before switching

const typedTextSpan = document.getElementById("typed-text");

function type() {
  const currentText = textArray[textIndex];

  if (isDeleting) {
    typedTextSpan.textContent = currentText.substring(0, charIndex--);
  } else {
    typedTextSpan.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex > currentText.length) {
    isDeleting = true;
    setTimeout(type, delayBetweenTexts);
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
function scrollToSection(id) {
  const element = document.querySelector(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'  // You can also use custom animation logic here
    });
  }
}

// Example: Attach to a nav link
document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
  e.preventDefault();
  scrollToSection('#projects');
});

// SERVICESS//////////////////
const cards = document.querySelectorAll('.card');
const leftBtn = document.querySelector('.nav.left');
const rightBtn = document.querySelector('.nav.right');

let currentIndex = 1;

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove('active', 'left', 'right');
    const cardText = card.querySelector('.card-text');
    cardText.innerHTML = ''; // Clear old text

    if (index === currentIndex) {
      card.classList.add('active');

      // Create and add title
      const h3 = document.createElement('h3');
      h3.textContent = descriptions[index].title;
      h3.className = 'animate__animated animate__zoomIn';
      h3.style.setProperty('--animate-duration', '0.6s');

      // Create and add description
      const p = document.createElement('p');
      p.textContent = descriptions[index].desc;
      p.className = 'animate__animated animate__fadeInUp';
      p.style.setProperty('--animate-duration', '0.8s');

      // Append to card text
      cardText.appendChild(h3);
      cardText.appendChild(p);
    } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
      card.classList.add('left');
    } else if (index === (currentIndex + 1) % cards.length) {
      card.classList.add('right');
    }
  });
}
const homeImage = document.getElementById('homeImage');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        homeImage.classList.remove('animate__fadeInLeft', 'animate__fadeOutLeft');

        if (entry.isIntersecting) {
          homeImage.classList.add('animate__fadeInLeft');
        } else {
          homeImage.classList.add('animate__fadeOutLeft');
        }
      });
    },
    {
      threshold: 0.3 // Trigger when 30% of the section is in view
    }
  );

  observer.observe(document.querySelector('#home'));
