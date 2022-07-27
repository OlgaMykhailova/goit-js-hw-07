import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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

divContainer.addEventListener("click", onOpenModal);

function onOpenModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280">
`);
  instance.show();

  window.addEventListener("keydown", onCloseModal);

  function onCloseModal(event) {
    if (basicLightbox.visible() && event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onCloseModal);
    }
  }
}
