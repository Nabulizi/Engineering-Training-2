console.log("Engineering Training");
const modalButton = document.getElementById("modalButton");
const modalContainer = document.getElementById("modalContainer");
const closeModalButton = document.getElementsByClassName("close-modal-button");

const jiraLinks = [
  "https://totalwine.atlassian.net/browse/TT-2",
  "https://totalwine.atlassian.net/browse/TT-16",
  "https://totalwine.atlassian.net/browse/TT-17",
  "https://totalwine.atlassian.net/browse/TT-18",
  "https://totalwine.atlassian.net/browse/TT-19",
];
const jiraTitles = [
  "Create a public repository under your GitHub account",
  "Create a new script file, and import it into index.html and add a console log",
  "JavaScript: Variables",
  "JavaScript: Event Listeners - Add Toggle Button Inside of Modal",
  "JavaScript: Functions - Write a function to toggle hidden class on modal",
];

const jirasArray = [];

for (let i = 0; i < jiraLinks.length; i++) {
  jirasArray.push({
    link: jiraLinks[i],
    title: jiraTitles[i],
  });
}

jirasArray.forEach((element) => {
  console.log("jira: ", element);
  let listItem = document.createElement("li");
  let listElement = document.querySelector(".grid-container");

  const myLiterals = `<li class="item">
  <a href=${element.link}>
  <i class="bi bi-check-circle-fill"></i>${element.title}</a>
  </li>`;

  listItem.innerHTML = myLiterals; // Assigning myLiterals to innerHTML of listItem
  listElement.append(listItem);   // Appending listItem to listElement
});

const iterateLinks = jiraLinks.forEach((links) => {
  console.log(links);
});
const iterateTitle = jiraTitles.forEach((titles) => {
  console.log(titles);
});

console.log("jiraTitles", jiraTitles);
console.log("jiraLinks", jiraLinks);
// console.log("jirasArray", jirasArray);

modalButton.addEventListener("click", () => {
  console.log("clicked button!!");
  modalContainer.classList.toggle("hidden");
});

closeModalButton[0].addEventListener("click", () => {
  modalContainer.classList.toggle("hidden");
});

console.log("modalButton : ", modalButton);
console.log("closeModalButton : ", closeModalButton);
