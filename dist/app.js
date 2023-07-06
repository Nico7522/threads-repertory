import { displaySearchResults, divGenerator, search } from "./utils/div-generator.js";
import { potentielThreads, threads } from "./threads/threads.js";
const containerTotal = document.querySelector(".container-total");
const searchBar = document.querySelector(".search-bar");
if (document.title === "Tous les threads") {
    divGenerator(threads, containerTotal, "div-image");
}
if (document.title === "Farm") {
    divGenerator(potentielThreads, containerTotal, "farm-img-container");
}
searchBar.addEventListener("keyup", () => {
    const isFind = search(potentielThreads, searchBar);
    displaySearchResults(isFind, containerTotal);
    console.log(isFind);
});
