class Header {

    create() {
        this.element = document.createElement('header')
        this.element.classList.add('header')
    }

    init() {
        this.create()

        this.element.innerHTML = `
        <div class="head__grey"></div>

        <div class="head__blue-logo">
            <div class="container">
                <a href="#Login"><img src="../images/Лого.png" alt="logo"></a>
            </div>
        </div>
    `

        return this.element;
    }

}

const header = new Header().init();
export default header;