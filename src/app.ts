import { displaySearchResults, divGenerator, search } from "./utils/div-generator.js";
import { farmThread, potentielThreads, threads } from "./threads/threads.js";
import { Thread } from "types/threads-array.js";


const containerTotal = document.querySelector(
  ".container-total"
) as HTMLDivElement;
const searchBar = document.querySelector(".search-bar") as any

if (document.title === "Tous les threads") {
  divGenerator(threads, containerTotal, "div-image");
}

if (document.title === "Potentiel") {
  divGenerator(potentielThreads, containerTotal, "farm-img-container");
}

if (document.title === "Farm") {
  divGenerator(farmThread, containerTotal, "farm-img-container");
}


searchBar.addEventListener("keyup", () => {
  if (document.title === "Potentiel") {
    const isFind: Thread[] = search(potentielThreads, searchBar);
    displaySearchResults(isFind, containerTotal)
    console.log(isFind);
  };
  if (document.title === "Farm") {
    const isFind: Thread[] = search(farmThread, searchBar);
    displaySearchResults(isFind, containerTotal)
    console.log(isFind);
    
  }
});
console.log("efdf");