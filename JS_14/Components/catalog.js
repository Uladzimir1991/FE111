import {cartWidgetObj} from './cart.js';

class Page {
    constructor() {
        this.getData();
    }

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('page');

        this.toast = document.createElement('div')
        this.toast.classList.add('toast')
    }

    getData() {
        if (!localStorage.getItem('data')) fetch('https://fakestoreapi.com/products')
        .then(response => {
            return response.text();
        })
        .then(data => {
            localStorage.setItem('data', data);

            showProducts();
        });
    }

    showProducts() {

        let data = localStorage.getItem('data');
        data = JSON.parse(data);

        const products = document.createElement('div');
        products.classList.add('products');

        data.forEach(product => {
            const elem = document.createElement('div');
            elem.classList.add('product__item');

            elem.innerHTML = `
                <img src="${product.image}" />
                <h3><a href="/#catalog/product/${product.id}/">${product.title}</a></h3>
                <div class="product__item_price">$${product.price}</div>
            `;

            const btnAdd = document.createElement('button');
            btnAdd.classList.add('btn__add');
            btnAdd.innerHTML = 'Add cart';

            elem.append(btnAdd);
            products.append(elem);

            btnAdd.addEventListener('click', _ => {
                cartWidgetObj.add(product.id)

                this.toast.classList.add('toast_active')
                this.closeTimeout()
            });
        });

        this.element.append(products)
    }

    closeTimeout() {
        const timer = setInterval(() => {
            let toast = document.querySelector('.toast')
            if (toast.className = 'toast active') {
                toast.classList.remove('active')
                clearInterval(timer);
            }
        }, 1500);
    }

    render() {
        this.create();

        this.element.innerHTML = `<h1>Catalog</h1>`;
        this.toast.innerHTML = `<h3>Ваш товар добавлен в корзину!</h3>`

        this.element.append(this.toast)

        this.showProducts();

        return this.element;
    }
}

const page = new Page().render();
export default page;