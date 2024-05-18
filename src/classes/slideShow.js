import gsap from "gsap";

const NEXT = 1;
const PREV = -1;

export class Slideshow {
    DOMElements = {
        el: null,
        slides: null,
        slidesInner: null,
    };

    // initials
    current = 0;
    slidesTotal = 0;
    isAnimating = false;

    constructor(element) {
        this.DOMElements.el = element;
        this.DOMElements.slides = [
            ...this.DOMElements.el.querySelectorAll(".testimonial__slide"),
        ];

        this.DOMElements.slidesInner = this.DOMElements.slides.map((item) => {
            item.querySelector(
                ".testimonial__slide__media testimonial__slide__media__image"
            );
        });

        this.DOMElements.slides[this.current].classList.add(
            "testimonial__slide--current"
        );

        this.slidesTotal = this.DOMElements.slides.length;
    }

    next() {
        this.navigate(NEXT);
    }

    prev() {
        this.navigate(PREV);
    }

    navigate(direction) {
        if (this.isAnimating) return false;
        this.isAnimating = true;

        const previous = this.current;
        this.current =
            direction === 1
                ? this.current < this.slidesTotal - 1
                    ? ++this.current
                    : 0
                : this.current > 0
                ? --this.current
                : this.slidesTotal - 1;

        const currentSlide = this.DOMElements.slides[previous];
        const currentInner = this.DOMElements.slidesInner[previous];
        const upcomingSlide = this.DOMElements.slides[this.current];
        const upcomingInner = this.DOMElements.slidesInner[this.current];

        gsap.timeline({
            defaults: {
                duration: 1.4,
                ease: "power3.inOut",
            },

            onStart: () => {
                this.DOMElements.slides[this.current].classList.add(
                    "testimonial__slide--current"
                );
            },

            onComplete: () => {
                this.DOMElements.slides[previous].classList.remove(
                    "testimonial__slide--current"
                );

                this.isAnimating = false;
            },
        })

            .addLabel("start", 0)
            .to(
                currentSlide,
                {
                    xPercent: -direction * 100,
                },
                "start"
            )
            .to(
                currentInner,
                {
                    startAt: {
                        transformOrigin:
                            direction === NEXT ? "100% 50%" : "0% 50%",
                    },
                    scaleX: 5,
                },
                "start"
            )
            .fromTo(
                upcomingSlide,
                {
                    xPercent: direction * 100,
                },
                {
                    xPercent: 0,
                },
                "start"
            )
            .fromTo(
                upcomingInner,
                {
                    transformOrigin: direction === NEXT ? "0% 50%" : "100% 50%",
                    xPercent: -direction * 100,
                    scaleX: 4.5,
                },
                {
                    xPercent: 0,
                    scaleX: 1.3,
                },
                "start"
            );
    }
}
