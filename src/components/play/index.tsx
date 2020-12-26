import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Play: FunctionalComponent = () => {
    return (
        <div class={style.play}>
            <a id="HowToPlay"></a>

            <div class={style.column}>
                <img src="http://via.placeholder.com/360x360"></img>
                <h1>Fun</h1>
                <p>
                    Play to your heart’s content. I am going to write more text
                    here. Just wait and see.
                </p>
            </div>

            <div class={style.column}>
                <img src="http://via.placeholder.com/360x360"></img>
                <h1>Customisable</h1>
                <p>
                    Make your own. I am going to write more text here. Just wait
                    and see.
                </p>
            </div>

            <div class={style.column}>
                <img src="http://via.placeholder.com/360x360"></img>
                <h1>Fast</h1>
                <p>
                    Lighting’s got nothing on us. I am going to write more text
                    here. Just wait and see.
                </p>
            </div>

            <div class={style.playContainer}>
                <a href="https://play.parkmyst.hu">Play now</a>
            </div>
        </div>
    );
};

export default Play;
