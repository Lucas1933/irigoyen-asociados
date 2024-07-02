const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "-700px",
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
});

const main = document.querySelector("main");
const header = document.querySelector("header");

let isHeaderResized = false;

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isHeaderResized) {
      header.classList.add("lg:mx-44");
      isHeaderResized = true;
    } else if (!entry.isIntersecting && isHeaderResized) {
      header.classList.remove("lg:mx-44");
      isHeaderResized = false;
    }
  });
}

export default function headerRezise() {
  observer.observe(main);
}
