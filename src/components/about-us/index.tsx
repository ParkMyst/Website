import {FunctionalComponent, h} from "preact";
import * as style from './style.css';

const AboutUs: FunctionalComponent = () => {
    return (
        <div className={style.aboutUs}>
            <a id="AboutUs"/>
            <h1 className={style.mainTitle}>Let us introduce our team</h1>
            <div className={style.textWrapper}>
                <p>Nullam commodo mauris et sem cursus hendrerit. Sed eu
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
                    tincidunt et turpis sed, fringilla consequat erat.</p>
                <p>Duis vitae sem nec mi facilisis dignissim vitae id nisi.
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
                    vehicula augue, non accumsan nisl.</p>

                <p>Interdum et malesuada fames ac ante ipsum primis in
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
                    hendrerit nec mi vitae, aliquam semper justo.</p>
            </div>
        </div>
    );
};

export default AboutUs;
