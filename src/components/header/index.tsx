import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import SmoothScroll from "../smooth-scroll";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    const [transparent, setTransparent] = useState<boolean>(true);

    const handleScroll = () => {
        const distance = document
            .querySelector(`#Discover`)
            ?.getBoundingClientRect().top;
        if (distance && distance < 120) {
            setTransparent(false);
        } else {
            setTransparent(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const classes = [style.header];
    if (!transparent) {
        classes.push(style.solidHeader);
    }

    return (
        <header className={classes.join(" ")}>
            <SmoothScroll scrollToId="Title" title="Go to the top of the page">
                <img src="../../assets/parkmyst_logo.png" alt="Parkmyst logo"/>
            </SmoothScroll>
            <nav>
                <SmoothScroll scrollToId="Discover">Discover</SmoothScroll>
                <SmoothScroll scrollToId="AboutUs">About us</SmoothScroll>
                <SmoothScroll scrollToId="ContactUs">Contact</SmoothScroll>
                <SmoothScroll scrollToId="HowToPlay">Play</SmoothScroll>
            </nav>
            <div style={{visibility: transparent ? "hidden" : "visible", opacity: transparent ? "0" : "1"}}>
                <a href="https://play.parkmyst.hu">Login</a>
            </div>
        </header>
    );
};

export default Header;
