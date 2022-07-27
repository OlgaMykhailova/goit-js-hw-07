import { galleryItems } from './gallery-items.js';
// Change code below this line

const divContainer = document.querySelector(".gallery");

const galleryImages = galleryItems
  .map(
    (galleryImage) => `<div class="gallery__item">
  <a class="gallery__link" href="${galleryImage.original}">
  <img
    class="gallery__image"
    src="${galleryImage.preview}"
    data-source="${galleryImage.original}"
    alt="${galleryImage.description}"
   />
</a>
      </div>
   
  </div>`
  )
  .join("");

divContainer.innerHTML = galleryImages;