import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import ParkMystLogo from '../../assets/parkmyst_logo.png';
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
        <header class={classes.join(" ")}>
            <img src={ParkMystLogo} />
            <nav>
                <SmoothScroll scrollToId="Title">Home</SmoothScroll>
                <SmoothScroll scrollToId="AboutUs">About us</SmoothScroll>
                <SmoothScroll scrollToId="ContactUs">Contact</SmoothScroll>
                <SmoothScroll scrollToId="HowToPlay">How to Play</SmoothScroll>
            </nav>
        </header>
    );
};

export default Header;
