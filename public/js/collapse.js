const servicios = document.getElementById("servicios");
const collapsableContainers = Array.from(servicios.children);
let collapsableCards = [];

async function toggleCollapse(event) {
  let hiddenContentContainer = event.currentTarget.children[1];
  let infoIcon = event.currentTarget.children[0].querySelectorAll("img")[1];
  if (hiddenContentContainer.style.maxHeight == "0px") {
    infoIcon.src = "./icons/minus_icon.svg";
    hiddenContentContainer.classList.add("animate-slide-collapse");
    hiddenContentContainer.style.maxHeight = "500px";
  } else {
    infoIcon.src = "./icons/plus_icon.svg";
    hiddenContentContainer.style.maxHeight = "0px";
    hiddenContentContainer.classList.remove("animate-slide-collapse");
  }
}

for (let i = 0; i < collapsableContainers.length; i++) {
  collapsableCards.push(collapsableContainers[i].children[0].children[1]);
  collapsableCards[i].style.maxHeight = "0px";
  console.log("event");
  collapsableCards[i].parentNode.addEventListener("click", toggleCollapse);
}

/* collapseContainer.addEventListener("click", toggleCollapse);

let collapseContainer = document.getElementById("collapseContainer");
let collapseContentContainer = document.getElementById(
  "collapseContentContainer",
);

collapseContentContainer.style.maxHeight = "0px";

async function toggleCollapse() {
  if (collapseContentContainer.style.maxHeight == "0px") {
    infoIcon.src = "./icons/minus_icon.svg";
    collapseContentContainer.classList.add("animate-slide-collapse");
    collapseContentContainer.style.maxHeight = "500px";
  } else {
    infoIcon.src = "./icons/plus_icon.svg";
    collapseContentContainer.style.maxHeight = "0px";
    collapseContentContainer.classList.remove("animate-slide-collapse");
  }
}

collapseContainer.addEventListener("click", toggleCollapse);
 */
