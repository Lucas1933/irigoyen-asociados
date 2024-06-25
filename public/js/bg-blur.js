const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.01, // Adjust this value to your needs; 0.1 means 10% of the element must be visible
});
const handshakeBg = document.getElementById("handshake");
const main = document.querySelector("main");
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      handshakeBg.classList.add("lg:blur");
    } else {
      handshakeBg.classList.remove("lg:blur");
    }
  });
}

export default function bgBlur() {
  observer.observe(main);
}
