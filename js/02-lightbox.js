import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divContainer = document.querySelector(".gallery");

const galleryImages = galleryItems
  .map(
    (galleryImage) =>
      `<a class="gallery__item" href="${galleryImage.original}">
  <img
    class="gallery__image"
    src="${galleryImage.preview}"
    alt="${galleryImage.description}"
   />
</a>`
  )
  .join("");

divContainer.innerHTML = galleryImages;

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});

