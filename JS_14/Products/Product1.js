class Product {

    create() {
        this.element = document.createElement('div')
        this.element.classList.add('product')
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
                description: elem.product.description,
                rating: elem.product.rating.rate,
                category: elem.product.category,
            }
            
            if(elem.product.id == '1') {

                this.divImage = document.createElement('div')
                this.divImage.classList.add('product__image')
    
                this.divContent = document.createElement('div')
                this.divContent.classList.add('product__content')
    
                this.img = document.createElement('img')
                this.img.classList.add('product__img')
                this.img.setAttribute('src', `${elem.product.image}`)
    
                this.title = document.createElement('h3')
                this.title.classList.add('product__title')
                this.title.innerHTML = elem.product.title;
    
                this.price = document.createElement('p')
                this.price.classList.add('product__price')
                this.price.innerHTML = '$' + elem.product.price;
    
                this.rating = document.createElement('p')
                this.rating.classList.add('product__rating')
                this.rating.innerHTML = 'Rating: ' + elem.product.rating.rate;
    
                this.category = document.createElement('p')
                this.category.classList.add('product__category')
                this.category.innerHTML = elem.product.category;
    
                this.description = document.createElement('p')
                this.description.classList.add('product__description')
                this.description.innerHTML = elem.product.description;
    
                this.divImage.append(this.img)
                this.divContent.append(this.title, this.price, this.rating, this.category, this.description)
                this.element.append(this.divImage, this.divContent);

            }
        })

        return this.element;
    }

}


let product1 = new Product().init();
export default product1;