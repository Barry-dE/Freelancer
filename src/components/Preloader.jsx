import "../../src/styles/components/preloader.scss";
import logo from "/assests/freelencer_logo.svg";

export default function Preloader() {
    return (
        <section className="preloader">
            <div className="preloader__wrapper">
                <div className="preloader__content">
                    <div className="preloader__logo">
                        <svg
                            className="preloader__logo__image"
                            data-src={logo}
                            alt="freelancer logo"
                        />
                    </div>
                    <div className="preloader__text">Freelancer</div>
                </div>
            </div>
        </section>
    );
}
