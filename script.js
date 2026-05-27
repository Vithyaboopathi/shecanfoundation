// Dark Mode

function toggleMode() {
  document.body.classList.toggle("dark");
}
// Mobile Menu Toggle

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

//Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
// Volunteer Button

document.getElementById("volunteerBtn").addEventListener("click", function () {
  alert("Thank you for showing interest in volunteering ");
});

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
