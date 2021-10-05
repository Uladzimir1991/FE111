import {cartWidgetObj} from './cart.js';

class Page {
    constructor() {
        let hash = location.hash;
        hash = hash.split('/');
        hash = hash.filter(item => item);

        this.id = +hash.pop();


        if (!this.id) return;
    }
    
    create() {
        this.element = document.createElement('div');
        this.element.classList.add('page');
    }

    render() {
        this.create();

        let data =  localStorage.getItem('data');
        data = JSON.parse(data);

        const product = data.find(product => product.id == this.id);

        if (!product) return;

        this.element.innerHTML = `
            <div class="product">
                <div class="product__image">
                    <img src="${product.image}" alt="#" />
                </div>
                <div class="product__content">
                    <h1>${product.title}</h1>
                    <div class="product__price">$${product.price}</div>
                    <p class="product__description">${product.description}</p>
                    <div class="product__meta">
                        <h3>${product.category}</h3>
                        <div class="product__rate">${product.rating.rate} (${product.rating.count})</div>
                    </div>
                </div>
            </div>
        `;

        const btnAdd = document.createElement('button');
        btnAdd.classList.add('product_add');
        btnAdd.innerHTML = 'Add cart';

        this.element.querySelector('.product__content').insertBefore(btnAdd, this.element.querySelector('.product__price'))

        btnAdd.addEventListener('click', _ => {
            cartWidgetObj.add(product.id)
        });

        return this.element;
    }
}

const page = new Page().render();
export default page;