const menu = document.querySelector(".menu"),
  nav = document.querySelector("#nav");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }),
);
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }),
  { threshold: 0.14 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
document.querySelector("[data-year]").textContent = new Date().getFullYear();
document.querySelector("#contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  e.currentTarget.querySelector(".form-status").textContent =
    "Thank you — this sample form is ready to connect to Romaka’s preferred inbox.";
});
