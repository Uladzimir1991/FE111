class Page {
    constructor() {
        this.getData();
    }

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('page');
    }

    async getData() {
        if (!localStorage.getItem('data')) fetch('https://fakestoreapi.com/products')
        .then(response => {
            return response.text();
        })
        .then(data => {
            localStorage.setItem('data', data);
            document.cookie = 'product=asd'
            this.showProducts();
        });
    }

    showProducts() {
        this.data = localStorage.getItem('data');
        this.data = JSON.parse(this.data);

        const products = document.createElement('div');
        products.classList.add('products');

        this.data.forEach(product => {
            this.elem = document.createElement('div');
            this.elem.classList.add('product');

            let a = document.createElement('a')
            a.classList.add('pic__link')
            a.setAttribute('href', `/#catalog/product/${product.id}`)

            let image = document.createElement('img')
            image.classList.add('product__img')
            image.setAttribute('src', `${product.image}`)

            this.elem.innerHTML = `
                <button data-btn="${product.id}" id="${product.id}" class="btn__add">Add to cart</button>
                <a class="product__id" href="/#catalog/product/${product.id}/">
                    <p class="product__content">
                        ${product.title}
                    </p>
                </a>
            `;

            products.append(this.elem);
            a.append(image)
            this.elem.append(a)
        });

        this.element.append(products)
    }

    setCookie(name, value, options = {}) {
        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    сookie() {
        let btn = this.element.querySelectorAll('button')
        btn.forEach(elem => {
            elem.addEventListener('click', event => {
                if(!event.target) return;

                let toast = document.querySelector('.toast')
                toast.classList.add('toast-active');

                this.update()
                this.setCookie(`product${elem.id}`,  elem.id); 
            })
        })
    }

    update() {

        this.data = localStorage.getItem('data');
        this.data = JSON.parse(this.data);

        const products = document.createElement('div');
        products.classList.add('products');

        this.data.forEach(product => {
            this.elem = document.createElement('div');
            this.elem.classList.add('product');

            let a = document.createElement('a')
            a.classList.add('pic__link')
            a.setAttribute('href', `/#catalog/product/${product.id}`)

            let image = document.createElement('img')
            image.classList.add('product__img')
            image.setAttribute('src', `${product.image}`)

            this.elem.innerHTML = `
                <button data-btn="${product.id}" id="${product.id}" class="btn__add">Add to cart</button>
                <a class="product__id" href="/#catalog/product/${product.id}/">
                    <p class="product__content">
                        ${product.title}
                    </p>
                </a>
            `;

            products.append(this.elem);
            a.append(image)
            this.elem.append(a)
        });

        this.element.append(products)
        
    }

    closeToast() {
        let toast = this.element.querySelector('.toast')
        const closeTimeout = function() {
            if(toast.className = 'toast active'){
                toast.classList.remove('active');
            }
            setTimeout(closeTimeout, 4000)
        }
    
        closeTimeout();
        if(closeTimeout)
    	clearTimeout(closeTimeout)
    }
    
    render() {
        this.create();

        this.element.innerHTML = `
            <h1 class="catalog__title">Catalog!</h1>
            <p class="catalog__content">On our website you can find various products at a bargain price =)</p>
        
            <div class="toast">
                <p class="p">Ваш товар(-ы) добавдены в корзину!</p>
            </div>
        `;

        this.showProducts();
        this.сookie();
        this.closeToast();

        return this.element;
    }
}

const page = new Page().render();
export default page;