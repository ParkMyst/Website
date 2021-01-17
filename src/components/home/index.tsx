import {FunctionalComponent, h} from "preact";
import Discover from "../discover";
import Play from "../play";
import Title from "../title";
import * as style from "./style.css";
import AboutUs from "../about-us";
import Contact from "../contact";

const Home: FunctionalComponent = () => {
    return (
        <div className={style.home}>
            <Title/>
            <div className={style.container}>
                <Discover />
                <AboutUs/>
                <Contact/>
                <Play />
            </div>
        </div>
    );
};

export default Home;
