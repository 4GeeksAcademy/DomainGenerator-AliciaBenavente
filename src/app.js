/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //examples for the user
  function domainExampleGenerator() {
    let pronouns = ["her", "the"];
    let adjectives = ["clumsy", "suspicious"];
    let names = ["mother", "teacher"];
    let extensions = [".com", ".es"];

    let domainExamples = [];

    for (let str1 of pronouns) {
      for (let str2 of adjectives) {
        for (let str3 of names) {
          for (let str4 of extensions) {
            let combination = str1 + str2 + str3 + str4;
            domainExamples.push(combination);
          }
        }
      }
    }

    let pronounIndex = Math.floor(Math.random() * pronouns.length);
    let adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    let nameIndex = Math.floor(Math.random() * names.length);
    let extensionIndex = Math.floor(Math.random() * extensions.length);

    let randomDomain =
      pronouns[pronounIndex] +
      "" +
      adjectives[adjectiveIndex] +
      "" +
      names[nameIndex] +
      "" +
      extensions[extensionIndex];
    return randomDomain;
  }
  document
    .querySelector("#exampleDomainButton")
    .addEventListener("click", function(event) {
      event.preventDefault();
      event.target.blur();
      let generatedDomain = domainExampleGenerator();
      document.querySelector("#result").innerHTML = generatedDomain;
      console.log(generatedDomain);
    });
  //

  //saving user options

  let emptyPronouns = [""];
  let emptyAdjectives = [""];
  let emptyNames = [""];
  let emptyExtensions = [""];

  function addPronoun() {
    let pronounInput = document.getElementById("pronounInput").value.trim();
    let pronoun = pronounInput.trim();

    if (pronoun !== "" && !emptyPronouns.includes(pronoun)) {
      emptyPronouns.push(pronoun);
      pronounInput = "";
      showAlert("Word successfully added: " + pronoun);
      console.log("Word successfully added:" + pronoun);
    } else {
      showAlert("Word not added, already exists: " + pronoun);
      console.log("Word not added, already exists:" + pronoun);
    }
  }
  document.getElementById("addPronoun").addEventListener("click", () => {
    const addedPronoun = addPronoun();
    if (addedPronoun) {
      return showSaveAlert();
    }
  });

  function addAdjective() {
    let adjectiveInput = document.getElementById("adjectiveInput").value.trim();
    let adjective = adjectiveInput.trim();

    if (adjective !== "" && !emptyAdjectives.includes(adjective)) {
      emptyAdjectives.push(adjective);
      adjectiveInput = "";
      showAlert("Word successfully added: " + adjective);
      console.log("Word successfully added:" + adjective);
    } else {
      showAlert("Word not added, already exists: " + adjective);
      console.log("Word not added, already exists:" + adjective);
    }
  }
  document.getElementById("addAdjective").addEventListener("click", () => {
    const addedAdjective = addAdjective();
    if (addedAdjective) {
      return showSaveAlert();
    }
  });

  function addName() {
    let nameInput = document.getElementById("nameInput").value.trim();
    let name = nameInput.trim();

    if (name !== "" && !emptyNames.includes(name)) {
      emptyNames.push(name);
      nameInput = "";
      showAlert("Word successfully added: " + name);
      console.log("Word successfully added:" + name);
    } else {
      showAlert("Word not added, already exists: " + name);
      console.log("Word not added, already exists:" + name);
    }
  }

  document.getElementById("addName").addEventListener("click", () => {
    const addedName = addName();
    if (addedName) {
      return showSaveAlert();
    }
  });

  function addExtension() {
    let extensionInput = document.getElementById("extensionInput").value.trim();
    let extension = extensionInput.trim();

    if (extension !== "" && !emptyExtensions.includes(extension)) {
      emptyExtensions.push(extension);
      extensionInput = "";
      showAlert("Word successfully added: " + extension);
      console.log("Word successfully added:" + extension);
    } else {
      showAlert("Word not added, already exists: " + extension);
      console.log("Word not added, already exists:" + extension);
    }
  }

  document.getElementById("addExtension").addEventListener("click", () => {
    const addedExtension = addExtension();
    if (addedExtension) {
      return showSaveAlert();
    }
  });
  function showSaveAlert(message) {
    const alertElement = document.getElementById("savedWordMessage");
    alertElement.innerText = message;
  }

  //deleting words
  function deletePronoun() {
    let pronounInput = document.getElementById("pronounInput").value.trim();
    let pronoun = pronounInput.trim();

    if (emptyPronouns.includes(pronoun)) {
      emptyPronouns.splice(emptyPronouns.indexOf(pronoun), 1);
      pronounInput.value = "";
      showAlert("Word successfully deleted: " + pronoun);
      console.log("Word successfully deleted: " + pronoun);
    } else {
      showAlert(`The word "${pronounInput}" was not found in the variable.`);
      console.log(`The word "${pronounInput}" was not found in the variable.`);
    }
  }

  document.getElementById("deletePronoun").addEventListener("click", () => {
    let deletedPronoun = deletePronoun();
    if (deletedPronoun) {
      return showDeleteAlert();
    }
  });

  function deleteAdjective() {
    let adjectiveInput = document.getElementById("adjectiveInput").value.trim();
    let adjective = adjectiveInput.trim();

    if (emptyAdjectives.includes(adjective)) {
      emptyAdjectives.splice(emptyAdjectives.indexOf(adjective), 1);
      adjectiveInput.value = "";
      showAlert("Word successfully deleted: " + adjective);
      console.log("Word successfully deleted: " + adjective);
    } else {
      showAlert(`The word "${adjectiveInput}" was not found in the variable.`);
      console.log(
        `The word "${adjectiveInput}" was not found in the variable.`
      );
    }
  }

  document.getElementById("deleteAdjective").addEventListener("click", () => {
    let deletedAdjective = deleteAdjective();
    if (deletedAdjective) {
      return showDeleteAlert();
    }
  });

  function deleteName() {
    let nameInput = document.getElementById("nameInput").value.trim();
    let name = nameInput.trim();

    if (emptyNames.includes(name)) {
      emptyNames.splice(emptyNames.indexOf(name), 1);
      nameInput.value = "";
      showAlert("Word successfully deleted: " + name);
      console.log("Word successfully deleted: " + name);
    } else {
      showAlert(`The word "${nameInput}" was not found in the variable.`);
      console.log(`The word "${nameInput}" was not found in the variable.`);
    }
  }

  document.getElementById("deleteName").addEventListener("click", () => {
    let deletedName = deleteName();
    if (deletedName) {
      return showDeleteAlert();
    }
  });

  function deleteExtension() {
    let extensionInput = document.getElementById("extensionInput").value.trim();
    let extension = extensionInput.trim();

    if (emptyExtensions.includes(extension)) {
      emptyExtensions.splice(emptyExtensions.indexOf(extension), 1);
      extensionInput.value = "";
      showAlert("Word successfully deleted: " + extension);
      console.log("Word successfully deleted: " + extension);
    } else {
      showAlert(`The word "${extensionInput}" was not found in the variable.`);
      console.log(
        `The word "${extensionInput}" was not found in the variable.`
      );
    }
  }

  document.getElementById("deleteExtension").addEventListener("click", () => {
    let deletedExtension = deleteExtension();
    if (deletedExtension) {
      return showDeleteAlert();
    }
  });
  function showDeleteAlert(message) {
    const alertElement = document.getElementById("deletedWordMessage");
    alertElement.innerText = message;
  }

  //showing result from user option
  function userPossibilities() {
    let userResult = [];

    for (let pronounValue of emptyPronouns) {
      for (let adjectiveValue of emptyAdjectives) {
        for (let nameValue of emptyNames) {
          for (let extensionValue of emptyExtensions) {
            let userCombination =
              pronounValue + adjectiveValue + nameValue + extensionValue;
            userResult.push(userCombination);
          }
        }
      }
    }
    return userResult.join("/n");
  }
  document
    .getElementById("domainPossibilities")
    .addEventListener("click", function(event) {
      event.preventDefault();

      let userResult = userPossibilities();
      const resultElement = document.getElementById("possibilities");
      resultElement.textContent =
        "Your possible domains: " + userResult.join("");
      displayConfirmationAlert();
    });

  //display User Possibilities
  function displayUserPossibilities() {
    const possibilities = [];

    emptyPronouns.forEach(pronoun => {
      emptyAdjectives.forEach(adjective => {
        emptyNames.forEach(name => {
          emptyExtensions.forEach(extension => {
            possibilities.push(`${pronoun}${adjective}${name}.${extension}`);
          });
        });
      });
    });

    return possibilities;
  }
  document
    .getElementById("domainForm")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      const pronounInput = document.getElementById("pronoun").value;
      const adjectiveInput = document.getElementById("adjective").value;
      const nameInput = document.getElementById("name").value;
      const extensionInput = document.getElementById("extension").value;

      emptyPronouns.push(pronounInput);
      emptyAdjectives.push(adjectiveInput);
      emptyNames.push(nameInput);
      emptyExtensions.push(extensionInput);

      deleteWordFromArray(pronounInput, emptyPronouns);
      deleteWordFromArray(adjectiveInput, emptyAdjectives);
      deleteWordFromArray(nameInput, emptyNames);

      displayUserPossibilities();
    });
};
