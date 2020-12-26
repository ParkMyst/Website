import { FunctionalComponent, h } from "preact";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import * as style from "./style.css";

const Discover: FunctionalComponent = () => {
    return (
        <div class={style.discover}>
            <a id="Discover"></a>
            <div class={style.imageScroller}>

                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={50}
                    totalSlides={3}
                    infinite={true}
                    isPlaying={true}
                >
                    <Slider>
                    <Slide index={0}>
                            <img class={style.scrollerImg} src="http://via.placeholder.com/1920x1080" />     
                    </Slide>
                    <Slide index={1}>
                        <img class={style.scrollerImg} src="http://via.placeholder.com/720x480" />        
                    </Slide>
                    <Slide index={2}>
                        <img class={style.scrollerImg} src="http://via.placeholder.com/1980x1020" />        
                    </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
            <div class={style.niceImage}>
                <img src="../../assets/content/promo3.png"></img>
            </div>
            <div class={style.niceText}>
                <h1>What we do</h1>
                <p>
                    ParkMyst is a tool to have fun. I am going to write more
                    text here. Lots of interesting data and inormation will live
                    in this textbox in the near future. Just wait and see.
                </p>
            </div>

            <div class={style.niceText}>
                <h1>Create your own</h1>
                <p>
                    With our intuitive systems, if you can dream a game, you can
                    make it. The basic plugins help in creating games fast. Need
                    custom plugins?
                </p>
            </div>
            <div class={style.niceImage}>
                <img src="http://via.placeholder.com/1920x1080"></img>
            </div>
            <div class={style.niceImage}>
                <img src="../../assets/content/promo4.png"></img>
            </div>
            <div class={style.niceText}>
                <h1>About stuff</h1>
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
