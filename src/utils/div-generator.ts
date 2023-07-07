import { Thread } from "types/threads-array.js";

export const divGenerator = (
  array: Thread[],
  div: HTMLDivElement,
  classImg: string
) => {
  array.map((thread: any) => {
    let threadContainer = document.createElement("div") as HTMLDivElement;
    threadContainer.classList.add("thread-container");
    let title = document.createElement("h2");
    title.classList.add("title-thread");
    title.innerText = thread.title;
    let image = document.createElement("img");
    image.src = thread.img;
    let link = document.createElement("a");
    link.href = thread.link;
    link.target = "_blank";
    link.innerText = "Voir";
    link.classList.add("link");
    let divImage = document.createElement("div");
    divImage.classList.add(classImg);
    divImage.appendChild(image);

    threadContainer.appendChild(title);
    threadContainer.appendChild(divImage);
    threadContainer.appendChild(link);
    div?.appendChild(threadContainer);

    return div;
  });
};

export const search = (array: Thread[], searchbar: HTMLInputElement): Thread[] => {
    let value: Thread[] = [];
    const query = searchbar.value.toLowerCase();
  

  array.forEach((thread) => {
    if (thread.title.toLowerCase().includes(query)) {
      value.push(thread)
    }
  });

  return value;
};

export const displaySearchResults = (results: Thread[],container: HTMLDivElement) => {
    container.innerHTML = ""
    divGenerator(results, container, "farm-img-container");
    
 
  }

