// Dark Mode

function toggleMode() {
  document.body.classList.toggle("dark");
}
// Mobile Menu Toggle

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
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
