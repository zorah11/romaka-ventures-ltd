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
const whatsapp = document.createElement("a");
whatsapp.className = "whatsapp-float";
whatsapp.href = "https://wa.me/256702733634";
whatsapp.target = "_blank";
whatsapp.rel = "noopener";
whatsapp.setAttribute("aria-label", "Chat with Romaka Ventures on WhatsApp");
whatsapp.textContent = "WhatsApp";
document.body.append(whatsapp);
document.querySelector("#contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent(
    `Website enquiry from ${data.get("name")}`,
  );
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nOrganisation: ${data.get("company") || "Not provided"}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email") || "Not provided"}\n\nMessage:\n${data.get("message")}`,
  );
  e.currentTarget.querySelector(".form-status").textContent =
    "Opening your email app to send this message to Romaka.";
  window.location.href = `mailto:romakainvestments@gmail.com?subject=${subject}&body=${body}`;
});
