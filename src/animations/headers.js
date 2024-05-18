import { split } from "../utils/utils";
import { map } from "lodash";
import gsap from "gsap";

export default class Titles {
    constructor() {
        this.titles = document.querySelectorAll("[data-animation='header']");
        this.splitTitle();
        this.animateSpan = this.selectChildSpan();
        this.animateIn();
    }

    splitTitle() {
        map(this.titles, (title) => {
            split({ element: title, expression: " ", append: true });
        });
    }

    selectChildSpan() {
        map(this.titles, (title) => {
            return (this.titleSpan = title.querySelectorAll("span span"));
        });
    }

    animateIn() {
        console.log(this, this.titleSpan);
    }

    //observe if element is intersecting with the viewport
    observer() {}
}

// import Animation from '../classes/animation'
// import { calculate, split } from '../utils/text'
// import { each } from 'lodash'

// export default class Title extends Animation {
//     constructor({ element, elements }) {
//         super({
//             element,
//             elements,
//         })

//         split({ element: this.element, append: true })
//         split({ element: this.element, append: true })

//         this.elementLinesSpans = this.element.queryselectorAll('span span')
//     }

//     animateIn() {
//         this.timelineIn = gsap.timeline({
//             delay: 0.5,
//         })
//         this.timelineIn.set(this.element, {
//             autoAlpha: 1,
//         })

//         each(this.elementLines, (line, index) => {
//             this.timelineIn.fromTo(
//                 line,
//                 {
//                     y: '100%',
//                 },
//                 {
//                     delay: index * 0.2,
//                     duration: 1.5,
//                     ease: 'expo.out',
//                     y: '0%',
//                 },
//                 0,
//             )
//         })
//     }

//     animateOut() {
//         this.animateedIn = false
//         gsap.set(this.element, {
//             autoAlpha: 0,
//         })
//     }

//     //calculate the number of lines as the browser gets resized
//     // onResize() {
//     //     this.elementLines = calculate(this.elementLinesSpans)
//     // }
// }

// //Titles in called in Page.js
