class Nav {

    create() {
        this.element = document.createElement('nav')
        this.element.classList.add('nav')

        this.ul = document.createElement('ul')
        this.ul.classList.add('nav__list')
        
        this.li = document.createElement('li')
        this.li2 = document.createElement('li')
        this.li3 = document.createElement('li')
        this.li4 = document.createElement('li')

        this.a = document.createElement('a')
        this.a.setAttribute('href', '/')
        this.a.innerHTML = 'Home'

        this.a2 = document.createElement('a')
        this.a2.setAttribute('href', '/#About')
        this.a2.innerHTML = 'About us'

        this.a3 = document.createElement('a')
        this.a3.setAttribute('href', '/#Delivery')
        this.a3.innerHTML = 'Delivery terms'

        this.a4 = document.createElement('a')
        this.a4.setAttribute('href', '/#Cart')
        this.a4.innerHTML = 'Cart'

        this.element.append(this.ul)
        this.ul.append(this.li, this.li2, this.li3, this.li4)
        this.li.append(this.a)
        this.li2.append(this.a2)
        this.li3.append(this.a3)
        this.li4.append(this.a4)
    }

    init() {
        this.create()

        return this.element;
    }

}

const nav = new Nav().init();
export default nav;