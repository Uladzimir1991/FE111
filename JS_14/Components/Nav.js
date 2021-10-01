class Nav {

    create() {
        this.element = document.createElement('nav')
        this.element.classList.add('nav')

        this.element.innerHTML = `
            <ul class="nav__list">
                <li><a href="/">Home</a></li>
                <li><a href="#Catalog">Catalog</a></li>
                <li><a href="#Delivery">Delivery terms</a></li>
                <li><a href="#Cart">Cart</a></li>
            </ul>
        `
    }

    init() {
        this.create()

        return this.element;
    }

}

const nav = new Nav().init();
export default nav;