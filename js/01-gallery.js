import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryEl = document.querySelector(".gallery");
console.log(createGalleryMarkup(galleryItems));

setGalleryToListHTML(`beforeend`, createGalleryMarkup(galleryItems));
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview }) =>
        `<li><a href=""><img class ="gallery__image" src="${preview}" alt="${description}"></a></li>`
    )
    .join("");
}

function setGalleryToListHTML(place, gallery) {
  listGalleryEl.insertAdjacentHTML(place, gallery);
}
