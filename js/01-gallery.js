import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryImages = galleryItems.map((galleryImage) => {
  galleryImage = `<div class="gallery__item">
    <a class="gallery__link" href="${galleryImage.original}">
      <img
        class="gallery__image"
        src="${galleryImage.preview}"
        data-source="${galleryImage.original}"
        alt="${galleryImage.description}"
      />
    </a>
  </div>`;
  return galleryImage;
});

const divContainer = document.querySelector(".gallery");

divContainer.insertAdjacentHTML("afterbegin", galleryImages.join(""));

divContainer.addEventListener("click", onClickImage);

function onClickImage(event) {
  if (event.target.nodeName !== "IMG") {
    // console.log(event.target.nodeName)
    console.log('no')
    return;
  }
  console.log(event.target.parentNode)
  console.log('yes')
  event.preventDefault();
  console.log(event.target.getAttribute('src'))
  event.target.setAttribute("src", event.target.parentNode.getAttribute('href'))
  console.log(event.target.getAttribute('src'))
  
//   console.log(event.target.parentNode.attributes);
//   console.log(event.target.style.src)
}
divContainer.addEventListener("click", onClickImage)
