class Header {

    create() {
        this.element = document.createElement('header')
        this.element.classList.add('header')

        this.head = document.createElement('div')
        this.head.classList.add('head')
    }

    init() {
        this.create()

        this.head.innerHTML = `
        <div class="head__logo">
            <a href="#"><p>IShop.bel</p><img class="logo" src="./images/bag.png" alt="logo" /></a>
        </div>
        <ul class="head__list">
            <li class="head__item">
                <p>Our email: <a href="#"><span>IShop@mail.by</span></a> </p>
            </li>
            <li class="head__item">
                <a class="tel" href="tel:+375 (25) 545-56-67">+375 (25) 545-56-67</a>
            </li>
        </ul>
    `

    this.element.append(this.head)
    let a = this.element.querySelectorAll('a')
    a.forEach(elem => {
        elem.addEventListener('click', event => {
            if(event.target) event.preventDefault()
        })
    })

        return this.element;
    }

}

const header = new Header().init();
export default header;