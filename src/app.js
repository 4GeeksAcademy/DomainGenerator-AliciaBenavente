/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let combinators = [
    ["her", "the", "my", "their"], //pronoum
    ["clumsy", "childish", "suspicious", "hot"], //adj
    ["mother", "moment", "teacher", "relation"], //noum
    [".com", ".es", ".org", ".net"]
  ]; //domain;

  function domainGenerator(combinators) {
    let combinations = [];

    for (let str1 of combinators[0]) {
      for (let str2 of combinators[1]) {
        for (let str3 of combinators[2]) {
          for (let str4 of combinators[3]) {
            let combination = str1 + str2 + str3 + str4;
            combinations.push(combination);
          }
        }
      }
    }
    return combinations.join("\n");
  }
  let generatedDomain = domainGenerator(combinators);
  document.querySelector("#domain").innerHTML = generatedDomain;
  console.log(generatedDomain);
};
