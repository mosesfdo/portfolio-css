const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-anchor");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => observer.observe(section));

// Example: Animate email button on hover
const emailButton = document.querySelector('.email-button');
if (emailButton) {
  emailButton.addEventListener('mouseenter', function() {
    emailButton.style.backgroundColor = '#222';
    emailButton.style.color = '#fff';
  });
  emailButton.addEventListener('mouseleave', function() {
    emailButton.style.backgroundColor = '';
    emailButton.style.color = '';
  });
}
