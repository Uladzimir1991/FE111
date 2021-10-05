import header from "./components/header.js";
import nav from "./Components/Nav.js";
import main from "./components/main.js";
import footer from "./components/footer.js";

class App {
    create() {
        const appElem = document.createElement('div');
        appElem.classList.add('.app')

        document.body.append(appElem)
        appElem.append(header, nav, main, footer);
    }

    init() {

        this.create()

        const html = document.querySelector('html')
        html.setAttribute('lang', 'en-ru')

        const head = document.querySelector('head') 

        const metaCharset = document.createElement('meta')
        metaCharset.setAttribute('charset', 'UTF-8')

        const metaHttp = document.createElement('meta')
        metaHttp.setAttribute('http-equiv', "X-UA-Compatible")
        metaHttp.setAttribute('content', 'IE=edge')

        const metaContent = document.createElement('meta')
        metaContent.setAttribute('name', "viewport")
        metaContent.setAttribute('content', "width=device-width, initial-scale=1.0")

        const title = document.createElement('title')
        title.innerHTML = 'SPA';

        const style = document.createElement('link')
        style.setAttribute('rel', "stylesheet")
        style.setAttribute('href', "/css/style.css")

        const media = document.createElement('link')
        media.setAttribute('rel', "stylesheet")
        media.setAttribute('href', "/Media/media.css")

        head.append(metaCharset, metaHttp, metaContent, title, style, media)

        this.create()
    }
}

new App().init();