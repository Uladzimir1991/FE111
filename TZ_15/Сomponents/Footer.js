class Footer {

    create() {
        this.element = document.createElement('footer')
        this.element.classList.add('footer')

        this.container = document.createElement('div')
        this.container.classList.add('container')
    }

    init() {
        this.create()

        this.container.innerHTML = `
            <section class="footer__head">    
                <div class="footer_logo">
                    <a href="#Login"><img src="../images/Лого.png" alt="footer logo"></a>
                </div>
                <nav class="footer_nav">
                    <ul class="footer_nav-list">
                        <a href="#"><li>Terms & Conitions</li></a>
                        <a href="#"><li>Privacy</li></a>
                        <a href="#"><li>Notice & Collections</li></a>
                        <a href="#"><li>CA Privacy Hub</li></a>
                        <a href="#"><li>Contact Us</li></a>
                        <a href="#"><li>Sitemap</li></a>
                    </ul>
                </nav>
            </section>

            <hr />

            <div class="footer_copyright">
                <p class="footer_copyright-text">Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.</p>
            </div>
        `

        this.element.append(this.container)
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