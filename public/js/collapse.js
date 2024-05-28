const servicios = document.getElementById("servicios");
const collapsableContainers = Array.from(servicios.children);
let hiddenContentContainers = [];

async function toggleCollapse(event) {
  let hiddenContentContainer = event.currentTarget.children[1];
  let infoIcon = event.currentTarget.children[0].querySelectorAll("img")[1];
  if (hiddenContentContainer.style.maxHeight == "0px") {
    infoIcon.src = "./icons/minus_icon.svg";
    hiddenContentContainer.classList.add("animate-slide-collapse");
    hiddenContentContainer.style.maxHeight = "500px";
    for (let i = 0; i < hiddenContentContainers.length; i++) {
      if (hiddenContentContainers[i] != hiddenContentContainer) {
        hiddenContentContainers[i].style.maxHeight = "0px";
        hiddenContentContainers[i].parentNode.children[0].querySelectorAll(
          "img",
        )[1].src = "./icons/plus_icon.svg";
      }
    }
  } else {
    infoIcon.src = "./icons/plus_icon.svg";
    hiddenContentContainer.style.maxHeight = "0px";
    hiddenContentContainer.classList.remove("animate-slide-collapse");
  }
}

for (let i = 0; i < collapsableContainers.length; i++) {
  hiddenContentContainers.push(
    collapsableContainers[i].children[0].children[1],
  );
  hiddenContentContainers[i].style.maxHeight = "0px";
  hiddenContentContainers[i].parentNode.addEventListener(
    "click",
    toggleCollapse,
  );
}
