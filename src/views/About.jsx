import "../styles/views/about.scss";
import spaceOne from "/assests/Image.jpg";

export default function About() {
    return (
        <section className="about">
            <div className="about__wrapper">
                <div className="about__title">
                    <h2 className="about__title__title">
                        Where Productivity Meets Community
                    </h2>
                    <p className="about__title__description">
                        Step into our co-working sanctuary – where ambition
                        ignites and creativity flourishes. With top-notch
                        amenities and a vibrant community, fuel your drive and
                        feed your imagination. Welcome to the space where your
                        dreams take flight.
                    </p>
                </div>
                <div className="about__grid__marquee">
                    <div className="about__grid__marquee__wrapper">
                        <ul className="about__grid__marquee__items">
                            <li className="about__grid__marquee__Item">
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                            <li className="about__grid__marquee__Item">
                                {" "}
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                            <li className="about__grid__marquee__Item">
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                            <li className="about__grid__marquee__Item">
                                {" "}
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                            <li className="about__grid__marquee__Item">
                                {" "}
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                        </ul>
                        <ul
                            className="about__grid__marquee__items "
                            aria-hidden="true"
                        >
                            <li className="about__grid__marquee__Item">
                                {" "}
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                            <li className="about__grid__marquee__Item">
                                {" "}
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                            <li className="about__grid__marquee__Item">
                                {" "}
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                            <li className="about__grid__marquee__Item">
                                {" "}
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                            <li className="about__grid__marquee__Item">
                                {" "}
                                <figure>
                                    <img src={spaceOne} alt="" />
                                </figure>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
