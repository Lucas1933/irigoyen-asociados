const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.1, // Adjust this value to your needs; 0.1 means 10% of the element must be visible
});
const handshakeBg = document.getElementById("handshakeMobileId");
/* const main = document.querySelector("main"); */
const presentationText = document.getElementById("presentationTextId");
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      handshakeBg.classList.add("blur");
    } else {
      handshakeBg.classList.remove("blur");
    }
  });
}

export default function bgBlurMobile() {
  observer.observe(presentationText);
}
