import {FunctionalComponent, h} from "preact";
import SmoothScroll from "../smooth-scroll";
import * as style from "./style.css";

const Title: FunctionalComponent = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <a id="Title" className={style.anchor}/>
                <h1>ParkMyst</h1>
                <p>
                    Bring people <br/> together with the power <br/> of <span>entertainment</span>
                </p>
                <div id="buttons">
                    <SmoothScroll scrollToId="Discover">
                        <span className={style.roundButton}>Discover</span>
                    </SmoothScroll>
                    <SmoothScroll scrollToId="ContactUs">
                        <span>Contact us</span>
                    </SmoothScroll>
                </div>
            </div>
            <div className={style.playButtonWrapper}>
                <div>
                    <a href="https://play.parkmyst.hu">Let's play!</a>
                </div>
            </div>
        </div>
    );
};

export default Title;
