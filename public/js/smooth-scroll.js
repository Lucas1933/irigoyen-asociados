export default function smoothScroll() {
  document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor tags with href starting with #
    const links = document.querySelectorAll('a[href^="#"]');

    // Add a click event listener to each link
    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        // Get the target element by its ID
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Scroll to the target element smoothly
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  });
}
