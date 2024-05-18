import "../styles/views/footer.scss";

export default function Footer() {
    const MenuLinks = [
        {
            link: "Menu",
            href: "#",
        },
        {
            link: "Home",
            href: "#",
        },
        {
            link: "About",
            href: "#",
        },
        {
            link: "Membership",
            href: "#",
        },
    ];

    return (
        <section className="footer">
            <div className="footer__wrapper">
                <div className="footer__content">
                    <div className="footer__description">
                        <p className="footer__description__description">
                            Dive into a community buzzing with energy,
                            collaboration, and endless opportunities
                            <span>Book now</span>
                        </p>
                        <div className="footer__description__links">
                            <ul>
                                {MenuLinks.map((link) => {
                                    return (
                                        <li key={link.link}>
                                            <a href={link.href}>{link.link}</a>
                                        </li>
                                    );
                                })}
                            </ul>

                            <ul>
                                {MenuLinks.map((link) => {
                                    return (
                                        <li key={link.link}>
                                            <a href={link.href}>{link.link}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__title">
                        <div className="footer__title__text">
                            <h2>Freelancer</h2>
                        </div>

                        <div className="footer__title__policy">
                            <div className="footer__policy__term">
                                <p>Terms</p>
                                <p>privacy</p>
                            </div>
                            <div className="footer__rights">
                                <div className="footer__copyright__svg"></div>
                                <p>2023 Freelancer All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
