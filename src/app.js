/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = [""];
  let adjectives = [""];
  let names = [""];
  let domains = [""];

  document
    .getElementById("domainForm")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      const pronounInput = document.getElementById("pronoun").value;
      const adjectiveInput = document.getElementById("adjective").value;
      const nameInput = document.getElementById("name").value;

      pronouns.push(pronounInput);
      adjectives.push(adjectiveInput);
      names.push(nameInput);

      const selectedExtension = document.querySelector(
        'input[name="extensionRadio"]:checked'
      ).value;

      domains.push(selectedExtension);
    });

  function result() {
    let userResult = [];

    const pronounInput = document.getElementById("pronoun").value;
    const adjectiveInput = document.getElementById("adjective").value;
    const nameInput = document.getElementById("name").value;

    userResult.push(pronounInput + adjectiveInput + nameInput);
    const selectedExtension = document.querySelector(
      'input[name="extensionRadio"]:checked'
    ).value;

    userResult.push(selectedExtension);

    return userResult;
  }
  document
    .getElementById("createDomainButton")
    .addEventListener("click", function(event) {
      event.preventDefault();

      let userResult = result();
      const resultElement = document.getElementById("result");
      resultElement.textContent = "Your domain is: " + userResult.join("");
    });
};
