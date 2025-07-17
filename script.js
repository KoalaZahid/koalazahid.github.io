// Dark Mode Toggle
document.querySelector(".day-night input").addEventListener("change", () => {

  setTimeout(() => { // delays for 5ms
    document.querySelector(":root").classList.toggle("light");
  }, 5);

});

// Header Scroll effect
const header = document.getElementById("site-header");
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})