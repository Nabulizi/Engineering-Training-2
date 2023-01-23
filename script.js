console.log("Engineering Training");
const modalButton = document.getElementById("modalButton");
const modalContainer = document.getElementById("modalContainer");
modalButton.addEventListener("click", () => {
  console.log("clicked button!!");
});
modalButton.addEventListener("click", () => {
  const list = modalContainer.classList;
  list.toggle("hidden");
});
console.log("modalButton : ", modalButton);
