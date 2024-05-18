import { Slideshow } from "../classes/slideShow";

function slider() {
    const slides = document.querySelector(".testimonial__slides");
    const slideShow = new Slideshow(slides);
    document
        .querySelector(".testimonial__slides-navigation__item--prev")
        .addEventListener("click", () => slideShow.prev());
    document
        .querySelector(".testimonial__slides-navigation__item--next")
        .addEventListener("click", () => slideShow.next());
}

export default slider;
