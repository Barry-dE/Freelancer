import Nav from "../components/Nav";
import "../../src/styles/views/home.scss";
import hero_image from "/assests/hero-background.jpg";

function Home() {
    return (
        <section className="home">
            <div className="home__wrapper">
                <div className="home__backgroud__media">
                    <figure>
                        <img
                            className="home__background__media__image"
                            src={hero_image}
                            alt="hero background image"
                        />
                    </figure>
                </div>
                <Nav />
                <div className="home__content">
                    <div className="home__title">
                        <h1 data-animation="header">Create Innovate Connect</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
