// Mobile nav toggle
const mobileToggle = document.getElementById("mobileMenuToggle");
const navMobile = document.getElementById("navMobile");

if (mobileToggle && navMobile) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = navMobile.style.display === "flex";
    navMobile.style.display = isOpen ? "none" : "flex";
  });

  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.style.display = "none";
    });
  });
}

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
