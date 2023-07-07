import { displaySearchResults, divGenerator, search } from "./utils/div-generator.js";
import { farmThread, potentielThreads, threads } from "./threads/threads.js";
const containerTotal = document.querySelector(".container-total");
const searchBar = document.querySelector(".search-bar");
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
        const isFind = search(potentielThreads, searchBar);
        displaySearchResults(isFind, containerTotal);
        console.log(isFind);
    }
    ;
    if (document.title === "Farm") {
        const isFind = search(farmThread, searchBar);
        displaySearchResults(isFind, containerTotal);
        console.log(isFind);
    }
});
//# sourceMappingURL=app.js.map