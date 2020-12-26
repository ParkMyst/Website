import { FunctionalComponent, h } from "preact";

import Home from "./home";
import Header from "./header";

const App: FunctionalComponent = () => {

    return (
        <div id="app">
            <Header />
            <Home />
        </div>
    );
};

export default App;
