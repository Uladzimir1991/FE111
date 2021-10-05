function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = {
    path: '/',
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

class Page {
    create() {
        this.element = document.createElement('div');
        this.element.classList.add('page');
    }

    showProducts() {
        let data = localStorage.getItem('data');
        data = JSON.parse(data);

        let cartCookie = getCookie('cart');

        let cart = (cartCookie && cartCookie.length) > 0 ? cartCookie.split(',') : [];

        let products = this.element.querySelector('.cart__products');

        if (!products) {
            products = document.createElement('div');
            products.classList.add('cart__products');
        }

        let total = 0;
        products.innerHTML = '';

        cart.forEach(id => {

            const product = data.find(product => product.id == +id);
            
            const elem = document.createElement('div');
            elem.classList.add('cart__product');

            elem.innerHTML = `
                <div class="cart__product_img"><img src="${product.image}" /></div>
                <div class="cart__product_title"><a href="/#catalog/product/${product.id}/">${product.title}</a></div>
                <div class="cart__product_price">$${product.price}</div>
            `;

            const btnRemove = document.createElement('button');
            btnRemove.classList.add('cart__product_remove');
            btnRemove.innerHTML = 'X';

            elem.append(btnRemove);
            products.append(elem);

            btnRemove.addEventListener('click', _ => {
                cartWidgetObj.remove(product.id);
                this.showProducts();
            });

            total += +product.price;
        });

        const productsTotal = document.createElement('div');
        productsTotal.classList.add('cart__products_total');
        productsTotal.innerHTML = 'Total: $' + total.toFixed(2);

        products.append(productsTotal);

        this.element.append(products);
    }

    render() {
        this.create();

        this.element.innerHTML = `
            <h1 class="cart__title">My cart!</h1>
        `;

        this.showProducts();

        return this.element;
    }
}

class CartWidget {
    constructor() {
        this.count = 0;
        this.total = 0;
    }

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('cart__widget');
    }

    add(id = '') {

        if (!id) return;

        let cartCookie = getCookie('cart');
        let cart = (cartCookie && cartCookie.length) > 0 ? cartCookie.split(',') : [];

        if (cart.indexOf(String(id)) != -1) return;
        
        cart.push(String(id));
        cartCookie = cart.join(',');

        setCookie('cart', cartCookie, { 'max-age': 3600 });

        console.log(cart);

        this.update();
    }

    remove(id) {
        if (!id) return;

        let cartCookie = getCookie('cart');
        let cart = (cartCookie && cartCookie.length) > 0 ? cartCookie.split(',') : [];

        cart = cart.filter(cartId => +cartId != +id);
        
        cartCookie = cart.join(',');

        setCookie('cart', cartCookie, { 'max-age': 3600 });

        this.update();
    }

    update() {
        let cartCookie = getCookie('cart');
        let cart = (cartCookie && cartCookie.length) > 0 ? cartCookie.split(',') : [];
        
        this.count = cart.length;
        this.total = 0;

        let data = localStorage.getItem('data');
        data = JSON.parse(data);

        cart.forEach(id => {
            const product = data.find(product => product.id == +id);
            this.total += +product.price;
        });
        
        this.total = this.total.toFixed(2);

        let widgetElem = this.element;
        if (!widgetElem) widgetElem = document.querySelector('.cart__widget');

        widgetElem.innerHTML = `
            <a href="/#cart">Cart</a><div class="count__block"><span class="count">${this.count}</span></div> <span class="total">${this.total}</span>
        `;
    }

    render() {
        this.create();

        this.element.innerHTML = `
            <a href="/#cart">My cart</a><span class="count">${this.count}</span> <span class="total">${this.total}</span>
        `;

        this.update();

        return this.element;
    }
}

const page = new Page().render();

const cartWidgetObj = new CartWidget();

export default page;
export {cartWidgetObj};