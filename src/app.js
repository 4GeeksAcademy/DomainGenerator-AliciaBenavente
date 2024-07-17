/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["her", "the"];
  let adjectives = ["clumsy", "suspicious"];
  let names = ["mother", "teacher"];
  let domains = [".com", ".es"];

  function domainGenerator(array1, array2, array3, array4) {
    let combinations = [];

    for (let str1 of array1) {
      for (let str2 of array2) {
        for (let str3 of array3) {
          for (let str4 of array4) {
            let combination = str1 + str2 + str3 + str4;
            combinations.push(combination);
          }
        }
      }
    }
    return combinations.join("\n");
  }
  let generatedDomain = domainGenerator(pronouns, adjectives, names, domains);
  document.querySelector("#domain").innerHTML = generatedDomain;
  console.log(generatedDomain);

  document
    .getElementById("domainForm")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      const selectedPronoun = document.getElementById("pronoun").value;
      const selectedName = document.getElementById("name").value;
      const selectedAdjective = document.getElementById("adjective").value;
      const selectedExtension = document.querySelector(
        "input[name=extensionRadio]:checked"
      ).value;

      pronouns.push(selectedPronoun);
      names.push(selectedName);
      adjectives.push(selectedAdjective);
      domains.push(selectedExtension);

      const resultElement = document.getElementById("result");
      resultElement.textContent = `Your personalize domain is: ${
        pronouns[Math.floor(Math.random() * pronouns.length)]
      }${names[Math.floor(Math.random() * names.length)]}${
        adjectives[Math.floor(Math.random() * adjectives.length)]
      }${domains[Math.floor(Math.random() * domains.length)]}`;
    });
};
