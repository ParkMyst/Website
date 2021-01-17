import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Contact: FunctionalComponent = () => {
    return (
        <div className={style.contact}>
            <a id="ContactUs"/>
            <h1 className={style.mainTitle}>Contact</h1>
            <div className={style.textWrapper}>
            <p>Donec pharetra libero nec lobortis tincidunt. In hac
                habitasse platea dictumst. Praesent ut feugiat lacus, vel
                lobortis mi. Integer sollicitudin, mauris sed accumsan
                imperdiet, sem lorem vehicula nibh, ut tristique risus nulla
                eget dui. Sed vestibulum lacus sed posuere placerat.
                Suspendisse odio erat, scelerisque nec dictum sed, suscipit
                at enim. Sed finibus placerat vehicula. Nullam pellentesque
                tellus ac purus faucibus congue quis eget quam. Cras
                eleifend nisi eu lectus tincidunt, eget convallis orci
                posuere. Vivamus malesuada imperdiet lorem auctor blandit.
                Ut nec nibh sem.</p>
            <p>Morbi vitae nisl suscipit nisl tristique egestas. Donec
                ultricies purus eu odio volutpat rutrum. Suspendisse in leo
                vitae tortor malesuada facilisis vel eu neque. Donec tempor
                nisi tellus, id facilisis ante viverra vitae. Cras facilisis
                hendrerit nulla, sit amet gravida nulla maximus a. Nam
                efficitur auctor accumsan. Donec a ligula sit amet libero
                sollicitudin fermentum. Quisque vel ante ac ligula interdum
                dignissim ut ut diam. Quisque non sodales eros. Maecenas
                vitae dolor molestie, venenatis nulla nec, ornare ante.
                Maecenas sed tempus odio, eget convallis odio. Pellentesque
                ipsum tortor, vestibulum at ultrices blandit, sagittis sed
                massa. Nullam in odio malesuada, fermentum lorem ac,
                convallis augue. Sed nulla sapien, pulvinar sed aliquet a,
                pellentesque vel arcu. Integer non commodo urna, a posuere
                nunc. Fusce et hendrerit velit.</p>
            </div>
        </div>
    );
};

export default Contact;
