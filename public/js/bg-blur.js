const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: "400px",
  threshold: 0.1, // Adjust this value to your needs; 0.1 means 10% of the element must be visible
});
const handshakeBg = document.getElementById("handshake");
const main = document.querySelector("main");
/* const presentationText = document.getElementById("presentationTextId"); */
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    let containsBlur = handshakeBg.classList.contains("lg:blur");
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
