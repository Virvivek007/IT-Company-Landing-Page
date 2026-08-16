// Navigation
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".navigation a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    document.querySelector(".toggleMenu").classList.remove("active");
    document.querySelector(".navigation").classList.remove("active");
  });
}
// Dark and light mode
function lightDark() {
  document.body.classList.toggle("dark-mode");
}

const sections = document.querySelectorAll("main > section[id]");
const navAnchors = document.querySelectorAll(".primary-links a");

const navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let id = entry.target.id;
        navAnchors.forEach(function (a) {
          if (a.getAttribute("href") === "#" + id) {
            a.classList.add("active-link");
          } else {
            a.classList.remove("active-link");
          }
        });
      }
    });
  },
  { threshold: 0.4 },
);

sections.forEach(function (sec) {
  navObserver.observe(sec);
});

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in"));
}

// Contact form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      formStatus.textContent = "Please fill in every field before sending.";
      return;
    }

    formStatus.textContent = "Sending…";

    setTimeout(function () {
      formStatus.textContent =
        "Thanks — we'll be in touch within one business day.";
      contactForm.reset();
    }, 600);
  });
}
