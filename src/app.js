/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let pronouns = ["her", "the"];
  let adjectives = ["clumsy", "suspicious"];
  let names = ["mother", "teacher"];
  let extensions = [".com", ".es"];

  const addPronounButton = document.getElementById("addPronounButton");
  const addAdjectiveButton = document.getElementById("addAdjectiveButton");
  const addNameButton = document.getElementById("addNameButton");
  const addExtensionButton = document.getElementById("addExtensionButton");

  const deletePronounButton = document.getElementById("deletePronounButton");
  const deleteAdjectiveButton = document.getElementById("deleteAdjectiveButton");
  const deleteNameButton = document.getElementById("deleteNameButton");
  const deleteExtensionButton = document.getElementById("deleteExtensionButton");


  //Domain generator
  function domainGenerator() {

    let domainExamples = "";

    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjectives.length; j++) {
        for (let k = 0; k < names.length; k++) {
          for (let l = 0; l < extensions.length; l++) {
            domainExamples += pronouns[i] + adjectives[j] + names[k] + extensions[l];
          }
        }
      }
    }
    return domainExamples;
  }
  document.querySelector("#domainButton")
    .addEventListener("click", function(event) {
      event.preventDefault();
      event.target.blur();
      let generatedDomain = domainGenerator();
      document.querySelector("#result").innerHTML = generatedDomain;
      console.log(generatedDomain);
    });

  //Adding user options

  function addPronoun() {
    const pronounInput = document.getElementById("pronounInput");
    const pronounValue = pronounInput.value.trim();

    if (pronounValue !== "" && !pronouns.includes(pronounValue)) {
      pronouns.push(pronounValue);
      showAlert(`${pronounValue} successfully added!`, "success");
      console.log("Word successfully added:" + pronounValue);
    } else {
      showAlert(`${pronounValue} not added, already exists`, "warning");
      console.log("Word not added, already exists:" + pronounValue);
    }
  }
  addPronounButton.addEventListener("click", () => {
    addPronoun();
    document.getElementById("pronounInput").value = ""});

  function addAdjective() {
    const adjectiveInput = document.getElementById("adjectiveInput");
    const adjectiveValue = adjectiveInput.value.trim();

    if (adjectiveValue !== "" && !adjectives.includes(adjectiveValue)) {
      adjectives.push(adjectiveValue);
      showAlert(`${adjectiveValue} successfully added!`, "success");
      console.log("Word successfully added:" + adjectiveValue);
    } else {
      showAlert(`${adjectiveValue} not added, already exists`, "warning");
      console.log("Word not added, already exists:" + adjectiveValue);
    }
  }
  addAdjectiveButton.addEventListener("click", () => {
    addAdjective();
    document.getElementById("adjectiveInput").value = ""});

function addName() {
  const nameInput = document.getElementById("nameInput");
  const nameValue = nameInput.value.trim();

  if (nameValue !== "" && !adjectives.includes(nameValue)) {
    names.push(nameValue);
    showAlert(`${nameValue} successfully added!`, "success");
    console.log("Word successfully added:" + nameValue);
  } else {
    showAlert(`${nameValue} not added, already exists`, "warning");
    console.log("Word not added, already exists:" + nameValue);
  }
}
addNameButton.addEventListener("click", () => {
  addName();
  document.getElementById("nameInput").value = ""});

  function addExtension() {
    const extensionInput = document.getElementById("extensionInput");
    const extensionValue = extensionInput.value.trim();
  
    if (extensionValue !== "" && !extensions.includes(extensionValue)) {
      extensions.push(extensionValue);
      showAlert(`${extensionValue} successfully added!`, "success");
      console.log("Word successfully added:" + extensionValue);
    } else {
      showAlert(`${extensionValue} not added, already exists`, "warning");
      console.log("Word not added, already exists:" + extensionValue);
    }
  }
  addExtensionButton.addEventListener("click", () => {
    addExtension();
    document.getElementById("extensionInput").value = ""});


  function showAlert(message, type) {
    const alertElement = document.getElementById("alert");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = "alert";
    alert.innerHTML = `${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    alertElement.appendChild(alert);

    setTimeout(() => {
      alert.classList.remove("show");
      alert.addEventListener("transitionend", () => alert.remove());
    }, 2000);
  }

  //deleting words
  function deletePronoun() {
    const pronounInput = document.getElementById("pronounInput");
    const pronounValue = pronounInput.value.trim();
    const pronounIndex = pronouns.indexOf(pronounValue)
  
    if (pronounIndex !== -1) {
      pronouns.splice(pronounIndex,1);
      showAlert(`${pronounValue} successfully deleted!`, "success");
      console.log("Word successfully dedeleted:" + pronounValue);
    } else {
      showAlert(`${pronounValue} not deleted, already exists`, "warning");
      console.log("Word not deleted, already exists:" + pronounValue);
    }
  }
  deletePronounButton.addEventListener("click", () => {
    deletePronoun();
    document.getElementById("pronounInput").value = ""});

function deleteAdjective() {
  const adjectiveInput = document.getElementById("adjectiveInput");
  const adjectiveValue = adjectiveInput.value.trim();
  const adjectiveIndex = adjectives.indexOf(adjectiveValue)

  if (adjectiveIndex !== -1) {
    adjectives.splice(adjectiveIndex,1);
    showAlert(`${adjectiveValue} successfully deleted!`, "success");
    console.log("Word successfully dedeleted:" + adjectiveValue);
  } else {
    showAlert(`${adjectiveValue} not deleted, already exists`, "warning");
    console.log("Word not deleted, already exists:" + adjectiveValue);
  }
}
deleteAdjectiveButton.addEventListener("click", () => {
  deleteAdjective();
  document.getElementById("adjectiveInput").value = ""});

function deleteName() {
  const nameInput = document.getElementById("nameInput");
  const nameValue = nameInput.value.trim();
  const nameIndex = names.indexOf(nameValue)

  if (nameIndex !== -1) {
    names.splice(nameIndex,1);
    showAlert(`${nameValue} successfully deleted!`, "success");
    console.log("Word successfully dedeleted:" + nameValue);
  } else {
    showAlert(`${nameValue} not deleted, already exists`, "warning");
    console.log("Word not deleted, already exists:" + nameValue);
  }
}
deleteNameButton.addEventListener("click", () => {
  deleteName();
  document.getElementById("nameInput").value = ""});

  function deleteExtension() {
    const extensionInput = document.getElementById("extensionInput");
    const extensionValue = extensionInput.value.trim();
    const extensionIndex = extensions.indexOf(extensionValue)
  
    if (extensionIndex !== -1) {
      extensions.splice(extensionIndex,1);
      showAlert(`${extensionValue} successfully deleted!`, "success");
      console.log("Word successfully dedeleted:" + extensionValue);
    } else {
      showAlert(`${extensionValue} not deleted, already exists`, "warning");
      console.log("Word not deleted, already exists:" + nameVaextensionValuelue);
    }
  }
  deleteExtensionButton.addEventListener("click", () => {
    deleteExtension();
    document.getElementById("extensionInput").value = ""});

  };