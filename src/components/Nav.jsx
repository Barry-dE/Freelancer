import "../../src/styles/components/nav.scss";
import logo from "/assests/freelencer_logo.svg";
function Nav() {
    const links = [
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
        <header className="header">
            <nav className="navigation">
                <div className="navigation__logo">
                    <div className="navigation__logo__svg">
                        <figure>
                            <img src={logo} alt="freelencer logo" />
                        </figure>
                    </div>
                    <div className="navigation__text">
                        <p>Freelencer</p>
                    </div>
                </div>
                <div className="nav__Links">
                    <ul>
                        {links.map((link, index) => {
                            return (
                                <li key={index + 1}>
                                    <a href={link.link}> {link.link}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="nav__contact">
                    <div className="nav__contact__button">
                        <button>Contact Us</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
