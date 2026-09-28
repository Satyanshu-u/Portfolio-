const roles = [
  "Developer",
  "ML Enthusiast",
  "Computer Vision Builder",
  "NLP Explorer"
];

const typingText = document.getElementById("typingText");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");
const navMenu = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];

  typingText.textContent = deleting
    ? currentRole.slice(0, charIndex--)
    : currentRole.slice(0, charIndex++);

  let speed = deleting ? 48 : 90;

  if (!deleting && charIndex > currentRole.length) {
    deleting = true;
    speed = 1100;
  } else if (deleting && charIndex < 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    charIndex = 0;
    speed = 300;
  }

  setTimeout(typeRole, speed);
}

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  let currentSection = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 170;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark", dark);
  themeToggle.textContent = dark ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Switch to light theme" : "Switch to dark theme"
  );
  themeToggle.title = dark ? "Switch to light theme" : "Switch to dark theme";
}

const savedTheme = localStorage.getItem("satyanshu-theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark")
    ? "light"
    : "dark";

  localStorage.setItem("satyanshu-theme", nextTheme);
  applyTheme(nextTheme);
});

year.textContent = new Date().getFullYear();
typeRole();
