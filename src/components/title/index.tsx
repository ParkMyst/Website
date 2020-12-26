import { FunctionalComponent, h } from "preact";
import SmoothScroll from "../smooth-scroll";
import * as style from "./style.css";

const Title: FunctionalComponent = () => {
    return (
        <div class={style.title}>
            <a id="Title" />
            <h1>ParkMyst</h1>
            <p>
                Bring people <br /> together with the power <br /> of <span>entertainment</span>
            </p>
            <div id="buttons">
                <SmoothScroll scrollToId="Discover">
                    <span class={style.roundButton}>Discover</span>
                </SmoothScroll>
                <SmoothScroll scrollToId="ContactUs">
                    <span>Contact us</span>
                </SmoothScroll>
            </div>
        </div>
    );
};

export default Title;
