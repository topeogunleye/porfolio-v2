var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger);

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleHamburger);
});

// Resume
// Event listener for Resume
const resumes = document.querySelectorAll(".resume");

resumes.forEach((resume) => {
  resume.addEventListener("click", () => {
    const projects = document.querySelector(".projects");
    const contacts = document.querySelector("#contact");
    const abouts = document.querySelector("#about");

    resume.style.color = "blue";
    abouts.style.color = "#333333";
    projects.style.color = "#333333";
    contacts.style.color = "#333333";
  });
});
