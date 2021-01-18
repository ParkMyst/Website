import { FunctionalComponent, h } from "preact";
import 'pure-react-carousel/dist/react-carousel.es.css';
import * as style from "./style.css";

const Discover: FunctionalComponent = () => {
    return (
        <div className={style.discover}>
            <a id="Discover"/>
            <h1 className={style.mainTitle}>Discover ParkMyst</h1>
            <div className={style.niceImage}>
                <img src="../../assets/content/promo3.png"/>
            </div>
            <div className={style.niceText}>
                <h2>What we do</h2>
                <p>
                    ParkMyst is a tool to have fun. I am going to write more
                    text here. Lots of interesting data and inormation will live
                    in this textbox in the near future. Just wait and see.
                </p>
            </div>

            <div className={style.niceText}>
                <h2>Create your own</h2>
                <p>
                    With our intuitive systems, if you can dream a game, you can
                    make it. The basic plugins help in creating games fast. Need
                    custom plugins?
                </p>
            </div>
            <div className={style.niceImage}>
                <img src="http://via.placeholder.com/1920x1080"/>
            </div>
            <div className={style.niceImage}>
                <img src="../../assets/content/promo4.png"/>
            </div>
            <div className={style.niceText}>
                <h2>About stuff</h2>
                <p>
                    I am going to write more text here. Lots of
                    and inormation will live in this textbox in the near future.
                    the near future. Just wait and see.
                </p>
            </div>
        </div>
    );
};

export default Discover;
