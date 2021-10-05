class Footer {

    create() {
        this.element = document.createElement('footer')
        this.element.classList.add('footer')

        this.soc__container = document.createElement('div')
        this.soc__container.classList.add('soc__container')
    }

    init() {
        this.create()

        this.soc__container.innerHTML = `
            <div class="soc__container_logo">
                <a href="#"><p>IShop.bel</p><img class="soc__container_img" src="./images/bag.png" alt="logo" /></a>
            </div>
            <p class="soc__container_copy">Copyright &COPY; by samiSUsami inc.</p>
            <ul class="soc__list">
                <li class="soc__list_item">
                    <a href="#"><img src="./images/facebook.png" alt="faceebok icon" /></a>
                </li>
                <li class="soc__list_item">
                    <a href="#"><img src="./images/instagram.png" alt="instagram icon" /></a>
                </li>
                <li class="soc__list_item">
                    <a href="#"><img src="./images/twitter.png" alt="twitter icon" /></a>
                </li>
            </ul>
        `

        this.element.append(this.soc__container)
        let a = this.element.querySelectorAll('a')
        a.forEach(elem => {
            elem.addEventListener('click', event => {
                if(event.target) event.preventDefault()
            })
        })

        return this.element;
    }

}

const footer = new Footer().init();
export default footer;