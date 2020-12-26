import { FunctionalComponent, h } from "preact";
import Discover from "../discover";
import Play from "../play";
import Title from "../title";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <Title />
            <div class={style.padded}>
                <Discover />
                <h1 id="AboutUs">About us</h1>
                <p>
                    Nullam commodo mauris et sem cursus hendrerit. Sed eu
                    feugiat diam. Aliquam facilisis eros a sapien hendrerit
                    mattis. Etiam sed velit neque. Etiam nibh felis, tristique
                    id quam vel, posuere iaculis sapien. Fusce lobortis, velit
                    et ultricies congue, erat magna vestibulum urna, vel tempus
                    nisi justo eget libero. Fusce vel porttitor ante, quis
                    placerat lacus. Vivamus finibus ornare dolor, ut sagittis
                    velit auctor eu. Duis pulvinar massa sit amet dui molestie,
                    vel vulputate purus consequat. In id volutpat ipsum. Vivamus
                    blandit, mi ac efficitur pharetra, nibh ligula posuere orci,
                    eu tempus dolor urna ac nulla. Praesent consequat augue
                    faucibus orci fermentum iaculis id in nisi. Sed neque justo,
                    tincidunt et turpis sed, fringilla consequat erat.
                </p>
                <p>
                    Duis vitae sem nec mi facilisis dignissim vitae id nisi.
                    Mauris pulvinar ex non mauris pharetra consectetur. Nullam
                    magna risus, feugiat ut nunc at, congue auctor lacus.
                    Curabitur blandit ipsum pharetra leo convallis, sit amet
                    egestas massa aliquam. Duis vitae neque lorem. Etiam eget
                    rutrum diam. Nullam sit amet leo et neque gravida convallis.
                    Etiam pharetra interdum augue eu hendrerit. Vivamus auctor
                    consectetur ultricies. Nullam dictum ultrices ante, nec
                    pulvinar metus condimentum ac. Mauris ultrices lacus nisi.
                    Mauris dictum ut ligula sed laoreet. Duis dignissim tempus
                    felis in fermentum. Pellentesque ligula nunc, dignissim sit
                    amet nisl in, facilisis lacinia justo. Mauris molestie
                    vehicula augue, non accumsan nisl.
                </p>
                <p>
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Donec rhoncus at nunc nec fringilla. Quisque
                    lectus sapien, hendrerit a risus sed, pellentesque euismod
                    sapien. Pellentesque lacinia faucibus dignissim. Sed in
                    convallis risus. Pellentesque vitae est ac nisi placerat
                    posuere. Nulla facilisi. Proin semper diam ac erat blandit,
                    sed pretium leo vestibulum. Sed ac sem vulputate orci
                    lobortis egestas. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas. Ut
                    rhoncus hendrerit euismod. Nulla pretium efficitur mauris
                    vel accumsan. Vestibulum ac eros eget dolor dignissim
                    lacinia vitae a lacus. Aenean lobortis ligula id risus
                    gravida, quis tempor lacus fringilla. Morbi justo est,
                    hendrerit nec mi vitae, aliquam semper justo.
                </p>
                <h1 id="ContactUs">Contact</h1>
                <p>
                    Donec pharetra libero nec lobortis tincidunt. In hac
                    habitasse platea dictumst. Praesent ut feugiat lacus, vel
                    lobortis mi. Integer sollicitudin, mauris sed accumsan
                    imperdiet, sem lorem vehicula nibh, ut tristique risus nulla
                    eget dui. Sed vestibulum lacus sed posuere placerat.
                    Suspendisse odio erat, scelerisque nec dictum sed, suscipit
                    at enim. Sed finibus placerat vehicula. Nullam pellentesque
                    tellus ac purus faucibus congue quis eget quam. Cras
                    eleifend nisi eu lectus tincidunt, eget convallis orci
                    posuere. Vivamus malesuada imperdiet lorem auctor blandit.
                    Ut nec nibh sem.
                </p>
                <p>
                    Morbi vitae nisl suscipit nisl tristique egestas. Donec
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
                    nunc. Fusce et hendrerit velit.
                </p>
                <Play />
            </div>
        </div>
    );
};

export default Home;
