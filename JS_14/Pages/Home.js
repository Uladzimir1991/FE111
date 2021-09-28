
class Home {

    create() {
        this.productList = document.createElement('ul')
        this.productList.classList.add('list')
    }

    init() {
        this.create()

        let data = localStorage.getItem('product')

        if(!data || data.length == 0) return;

        data = JSON.parse(data)

        if(!data || data.length == 0) return;

        data = data.map(elem => {
            this.elem = {
                id: elem.product.id,
                image: elem.product.image,
                title: elem.product.title,
                price: elem.product.price,
            }

            this.li = document.createElement('li')
            this.li.classList.add('list__item')
            this.li.setAttribute('id', `${elem.product.id}`)

            this.a = document.createElement('a')
            this.a.setAttribute('href', `#Product/${elem.product.id}`)

            this.img = document.createElement('img')
            this.img.classList.add('item__img')
            this.img.setAttribute('src', `${elem.product.image}`)

            this.title = document.createElement('h3')
            this.title.classList.add('item__title')
            this.title.innerHTML = elem.product.title;

            this.price = document.createElement('p')
            this.price.classList.add('item__price')
            this.price.innerHTML = '$' + elem.product.price;

            this.li.append(this.a)
            this.a.append(this.img, this.title, this.price)
            this.productList.append(this.li)

        })
        return this.productList;
    }

}

let home = new Home().init();
export default home;