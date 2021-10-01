class Page {
    create() {
        this.element = document.createElement('div');
        this.element.classList.add('cart')
    }

    set storage(data) {

        localStorage.setItem('users', JSON.stringify(data))
        this.setCookie('storageExpiration', 'true', {'max-age': 10})

    }

    get storage() {

        const storageExpiration = this.getCookie('product')
        console.log(storageExpiration)
        if(!storageExpiration) localStorage.removeItem('users')


        let data = localStorage.getItem('users')
 
        if(!data || data.length == 0) return;

        data = JSON.parse(data)

        if(!data || data.length == 0) return;

        data = data.map(user => {
            user = new User(user.data)
            return user;
        })

        return data;
    }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    render() {
        this.create();

        if(!document.cookie) this.element.innerHTML=`Your cart is empty!`;

        let data = localStorage.getItem('data');
            data = JSON.parse(data);

        function readCookie(name) {
            var name_cook = name+"=";
            var spl = document.cookie.split(";");

            for(var i=0; i<spl.length; i++) {
                var c = spl[i];
                while(c.charAt(0) == " ") {
                    c = c.substring(1, c.length);
                }
                if(c.indexOf(name_cook) == 0) {
                    return c.substring(name_cook.length, c.length);
                }
            }
            return null;
        }


        data.forEach(product => {

            this.value_cookie = readCookie(`product${product.id}`);

            if(this.value_cookie == product.id) {
                this.value_cookie = '';

                this.elem = document.createElement('div');
                this.elem.classList.add('product__cart');

    
                let image = document.createElement('img')
                image.classList.add('cart__img')

                image.setAttribute('src', `${product.image}`)

                this.elem.innerHTML = `
                    <p class="cart__content">
                        ${product.title}
                    </p>
                    <button data-del="${product.id}" class="delete">X</button>
                `
                
                this.elem.insertBefore(image, this.elem.querySelector('p'))
                this.element.append(this.elem);

                let remove = this.element.querySelectorAll('.delete')
                remove.forEach(elem => {
                    elem.addEventListener('click', event => {
                        
                    })                   
                })
            }
        })

        return this.element;
    }
}

const page = new Page().render();
export default page;