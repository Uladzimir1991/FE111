class App {

    create() {
        this.element = document.createElement('div')
        this.element.classList.add('app')
    }

    render() {
        
        document.body.append(this.element)

    }


    async setLocal() {
        return await fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
                .then(product => {
                    product = product.map(product => {
                        return {
                            product: {
                                id: product.id,
                                image: product.image,
                                title: product.title,
                                price: product.price,
                                description: product.description,
                                rating: product.rating,
                                category: product.category,
                            }
                        }
                    })
            localStorage.setItem('product', JSON.stringify(product));
            if(localStorage.length > 0) return;
        })
    }

    set storage(data) {

        localStorage.setItem('product', JSON.stringify(data))
        this.setCookie('storageExpiration', 'true', {'max-age': 10})

    }

    get storage() {

        let data = localStorage.getItem('product')
 
        if(!data || data.length == 0) return;

        data = JSON.parse(data)

        if(!data || data.length == 0) return;

        data = data.map(product => {
            product = new App(product.data)
            return product;
        })

        return data;

    }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
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

    init() {

        this.setLocal()

        const html = document.querySelector('html')
        html.setAttribute('lang', 'en-ru')

        const head = document.querySelector('head') 

        const metaCharset = document.createElement('meta')
        metaCharset.setAttribute('charset', 'UTF-8')

        const metaHttp = document.createElement('meta')
        metaHttp.setAttribute('http-equiv', "X-UA-Compatible")
        metaHttp.setAttribute('content', 'IE=edge')

        const metaContent = document.createElement('meta')
        metaContent.setAttribute('name', "viewport")
        metaContent.setAttribute('content', "width=device-width, initial-scale=1.0")

        const title = document.createElement('title')
        title.innerHTML = 'SPA';

        const style = document.createElement('link')
        style.setAttribute('rel', "stylesheet")
        style.setAttribute('href', "/css/style.css")

        head.append(metaCharset, metaHttp, metaContent, title, style)

        this.create()
        this.render()
    }

}

export default new App().init();