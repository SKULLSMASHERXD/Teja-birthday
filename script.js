document.addEventListener("DOMContentLoaded", () => {
  const correctPassword = "malkin's18bday@26/03";
  const passwordInput = document.querySelector(".modal-content input");
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";

    revealSecretMessage();
  } else {
    passwordInput.value = "";
    passwordInput.placeholder = "Wrong password 💫";
  }
});
  const title = document.querySelector("h1");
  const unlockBtn = document.querySelector(".unlock-btn");
  const modal = document.querySelector(".modal");

  // Fade-in on load
  setTimeout(() => {
    title.classList.add("show");
  }, 300);

  // Scroll fade
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const fadePoint = 200;

    let opacity = Math.max(0, 1 - scrollY / fadePoint);
    title.style.opacity = opacity;
  });

  // Open modal
  unlockBtn.addEventListener("click", () => {
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";
  });

  // Close modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.opacity = "0";
      modal.style.pointerEvents = "none";
    }
  });
  function revealSecretMessage() {
  const secretSection = document.querySelector(".secret-section");

  secretSection.classList.add("show");

  secretSection.scrollIntoView({
    behavior: "smooth"
  });
}
  const memoryCards = document.querySelectorAll(".memory-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

memoryCards.forEach((card) => {
  observer.observe(card);
});
const wishCards = document.querySelectorAll(".wish-card");

wishCards.forEach((card) => {
  observer.observe(card);
});

});
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
    const fadePoint = 200;
  let opacity = Math.max(0, 1 - scrollY / fadePoint);

  if (opacity < 0) opacity = 0;

  title.style.opacity = opacity;
});
const stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    alpha: Math.random(),
    alphaSpeed: Math.random() * 0.01 + 0.002
  });
}
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 215, 120, ${star.alpha})`;
    ctx.fill();

    star.alpha += star.alphaSpeed;

    if (star.alpha <= 0 || star.alpha >= 1) {
      star.alphaSpeed *= -1;
    }
  }

  requestAnimationFrame(drawStars);
}
drawStars();
window.addEventListener("load", () => {
  setTimeout(() => {
    title.classList.add("show");
  }, 300);
});
const wishCards = document.querySelectorAll(".wish-card");

const revealWishes = () => {
  const triggerBottom = window.innerHeight * 0.85;

  wishCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealWishes);
revealWishes();

const signature = document.querySelector(".signature");

function revealSignature() {

  const position = signature.getBoundingClientRect().top;
  const screenPosition = window.innerHeight * 0.9;

  if(position < screenPosition){
    signature.classList.add("show");
  }

}

window.addEventListener("scroll", revealSignature);
window.addEventListener("load", function(){

  const signature = document.querySelector(".signature");

  setTimeout(function(){
    signature.classList.add("show");
  }, 800);

});