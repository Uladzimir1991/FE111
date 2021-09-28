import * as app from "./Components/App.js";
import header from "./Components/Header.js";
import nav from "./Components/Nav.js";
import main from "./Components/Main.js";
import footer from "./Components/Footer.js";

class IndexApp {
    init() {

        const myApp = document.querySelector('.app')

        myApp.append(header, nav, main, footer)

    }
}

new IndexApp().init()