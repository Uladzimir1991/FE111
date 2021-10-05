import {cartWidgetObj} from './cart.js';

class Nav {

    create() {
        this.element = document.createElement('nav')
        this.element.classList.add('nav')
    }

    init() {
        this.create()

        this.element.innerHTML = `
            <button class="nav_toogle"><label for="nav_toogle"></label></button>
            <input type="checkbox" unchecked id="nav_toogle">
            <ul class="nav__list">
                <li><a href="/">Home</a></li>
                <li><a href="#Catalog">Catalog</a></li>
                <li><a href="#Delivery">Delivery terms</a></li>
            </ul>
            <div class="nav__cart"></div>
        `
        let cart = this.element.querySelector('.nav__cart')

        cart.append(cartWidgetObj.render());

        return this.element;
    }

}

const nav = new Nav().init();
export default nav;