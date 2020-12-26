import { ComponentChildren, FunctionalComponent, h } from "preact";

interface Props {
    scrollToId: string;
    children: ComponentChildren;
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

    return <a onClick={handleClick}>{props.children}</a>;
};

export default SmoothScroll;
