let dropdownContainer = document.getElementById("dropdownContainer");
let dropdownContentContainer = document.getElementById(
  "dropdownContentContainer",
);
dropdownContentContainer.style.maxHeight = "0px";
async function toggleDropdown() {
  console.log(dropdownContentContainer.style.maxHeight);
  if (dropdownContentContainer.style.maxHeight == "0px") {
    dropdownContentContainer.style.maxHeight = "500px";
    dropdownContentContainer.classList.add("animate-slide-dropdown");
  } else {
    dropdownContentContainer.style.maxHeight = "0px";
    dropdownContentContainer.classList.remove("animate-slide-dropdown");
  }
}

dropdownContainer.addEventListener("click", toggleDropdown);
