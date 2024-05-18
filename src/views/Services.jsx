import "../styles/views/services.scss";

export default function Services() {
    return (
        <section className="services">
            <div className="services__wrapper">
                <div className="services__content">
                    <div className="services__text">
                        <h2 className="services__text__title">
                            Unlocking Potential, Together
                        </h2>
                    </div>
                    <div className="services__grid">
                        <div className="services__grid__items">
                            <figure className="services__grid__icon">
                                <img data-src="" alt="" />
                            </figure>

                            <h3 className="services__title">
                                High-Speed Internet
                            </h3>
                            <p className="services__description">
                                Experience reliable, lightning-fast internet for
                                seamless productivity
                            </p>
                        </div>
                        <div className="services__grid__items">
                            <figure className="services__grid__icon">
                                <img data-src="" alt="" />
                            </figure>

                            <h3 className="services__title">Meeting Rooms</h3>
                            <p className="services__description">
                                Bookable meeting rooms equipped with AV
                                facilities for presentations and conferences.
                            </p>
                        </div>
                        <div className="services__grid__items">
                            <figure className="services__grid__icon">
                                <img data-src="" alt="" />
                            </figure>

                            <h3 className="services__title">
                                Printing and Scanning
                            </h3>
                            <p className="services__description">
                                On-site printing, scanning, and copying services
                                for documents.
                            </p>
                        </div>
                        <div className="services__grid__items">
                            <figure className="services__grid__icon">
                                <img data-src="" alt="" />
                            </figure>

                            <h3 className="services__title">Tech Support</h3>
                            <p className="services__description">
                                Basic IT support for troubleshooting
                                connectivity or equipment issues
                            </p>
                        </div>
                        <div className="services__grid__items">
                            <figure className="services__grid__icon">
                                <img data-src="" alt="" />
                            </figure>

                            <h3 className="services__title">
                                Networking Opportunities
                            </h3>
                            <p className="services__description">
                                Introductions to potential collaborators,
                                mentors, or investors within the coworking
                                community.
                            </p>
                        </div>
                        <div className="services__grid__items">
                            <figure className="services__grid__icon">
                                <img data-src="" alt="" />
                            </figure>

                            <h3 className="services__title">Mail Handling</h3>
                            <p className="services__description">
                                Reception services for mail and packages, with
                                secure storage for members.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
