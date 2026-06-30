// ===== Theme toggle (persisted) =====
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.setAttribute("data-theme", "light");
}
syncThemeIcon();

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  syncThemeIcon();
});

function syncThemeIcon() {
  const isLight = root.getAttribute("data-theme") === "light";
  themeToggle.textContent = isLight ? "☀️" : "🌙";
}

// ===== Mobile menu =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ===== Navbar shadow on scroll =====
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

// ===== Typed role effect =====
const roles = [
  "B.Tech CSE (AI) Student",
  "Aspiring ML Engineer",
  "Web Developer",
  "Problem Solver",
];
const typedEl = document.getElementById("typed");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  typedEl.textContent = deleting
    ? current.slice(0, charIndex--)
    : current.slice(0, charIndex++);

  if (!deleting && charIndex > current.length) {
    deleting = true;
    setTimeout(typeLoop, 1400);
    return;
  }
  if (deleting && charIndex < 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    charIndex = 0;
  }
  setTimeout(typeLoop, deleting ? 45 : 90);
}
typeLoop();

// ===== Reveal sections on scroll =====
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
document.querySelectorAll(".section").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
