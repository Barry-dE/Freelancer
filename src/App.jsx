import Audience from "./views/Audience";
import Home from "./views/Home";
import Preloader from "./components/Preloader";
import Team from "./views/Team";
import FAQs from "./views/FAQs";
import Testimonial from "./views/Testimonial";
import slider from "./animations/slider";
import { useEffect } from "react";
import Titles from "./animations/headers";
import Footer from "./views/Footer";
import Services from "./views/Services";
import About from "./views/About";
import Preload from "./classes/preload";

function App() {
    useEffect(() => {
        slider();
        new Titles();
        // new Preload();
    }, []);

    return (
        <div className="wrapper">
            <Preloader />
            <Home />
            <About />
            <Audience />
            {/* <Services /> */}
            <Team />
            <Testimonial />
            <FAQs />
            <Footer />
        </div>
    );
}

export default App;
