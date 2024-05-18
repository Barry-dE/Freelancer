import "../styles/views/testimonials.scss";
import testimonialImageOne from "/assests/testimonial-1.jpg";
import testimonialImagetwo from "/assests/workspace-2.jpg";
import testimonialImageThree from "/assests/testimonial-4.jpg";

export default function Testimonial() {
    return (
        <section className="testimonial">
            <div className="testimonial__wrapper">
                <nav className="testimonial__slides__navigation">
                    <button className="testimonial__slides__navigation__item testimonial__slides-navigation__item--prev">
                        &larr;
                    </button>
                    <button className="testimonial__slides__navigation__item testimonial__slides-navigation__item--next">
                        &rarr;
                    </button>
                </nav>
                <div className="testimonial__slides">
                    <div className="testimonial__slide">
                        <figure className="testimonial__slide__media">
                            <img
                                className="testimonial__slide__media__image"
                                src={testimonialImageOne}
                                alt=""
                                width={400}
                            />
                        </figure>
                        <div className="testimonial__text">
                            <p>
                                The environment at Freelancer is super
                                inclusive. I love coming here knowing i’m going
                                to have a fun, productive day
                            </p>
                            <p>Courtney Henry</p>
                        </div>
                    </div>
                    <div className="testimonial__slide">
                        <figure className="testimonial__slide__media">
                            <img
                                className="testimonial__slide__media__image"
                                src={testimonialImagetwo}
                                alt=""
                                width={400}
                            />
                        </figure>
                        <div className="testimonial__text">
                            <p>
                                Working at The Collaboratory has been an
                                absolute joy. The sense of community here is
                                unmatched, and I&apos;ve never felt more
                                supported in my endeavors.
                            </p>
                            <p>Emily Johnson</p>
                        </div>
                    </div>
                    <div className="testimonial__slide">
                        <figure className="testimonial__slide__media">
                            <img
                                className="testimonial__slide__media__image"
                                src={testimonialImageThree}
                                alt=""
                                width={400}
                            />
                        </figure>
                        <div className="testimonial__text">
                            <p>
                                I can&apos;t say enough good things about The
                                Workspace. From the modern amenities to the
                                friendly staff, everything is top-notch.
                            </p>
                            <p>Julia Jones</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
