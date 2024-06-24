export default function collapse() {
  const servicios = document.getElementById("servicios");
  const collapsableContainers = Array.from(servicios.children);
  let hiddenContentContainers = [];

  async function toggleCollapse(event) {
    let hiddenContentContainer = event.currentTarget.children[1];

    if (hiddenContentContainer.style.maxHeight == "0px") {
      hiddenContentContainer.style.maxHeight = "500px";
      for (let i = 0; i < hiddenContentContainers.length; i++) {
        if (hiddenContentContainers[i] != hiddenContentContainer) {
          hiddenContentContainers[i].style.maxHeight = "0px";
        }
      }
    } else {
      hiddenContentContainer.style.maxHeight = "0px";
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
}
