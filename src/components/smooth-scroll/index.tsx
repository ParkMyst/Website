import { ComponentChildren, FunctionalComponent, h } from "preact";
import * as style from "./style.css";

interface Props {
    scrollToId: string;
    children: ComponentChildren;
    title?: string
}

const SmoothScroll: FunctionalComponent<Props> = props => {
    const handleClick = () => {
        const relativeTop: number | undefined = document
            .querySelector(`#${props.scrollToId}`)
            ?.getBoundingClientRect().top;
        if (relativeTop) {
            const top = relativeTop + window.pageYOffset - 60;
            window.scrollTo({
                top,
                behavior: "smooth"
            })
        }
    };

    return <a className={style.menuItem } title={props.title} onClick={handleClick}> {props.children} </a>;
};

export default SmoothScroll;
