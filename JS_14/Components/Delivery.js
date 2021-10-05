class Page {
    create() {
        this.element = document.createElement('div');
        this.element.classList.add('delivery__container')
    }

    render() {
        this.create();

        this.element.innerHTML = `
            <h2 class="delivery__title">Delivery terms!</h2>
            <p class="delivery__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, beatae. Fugiat harum porro dolorum dolore, expedita, nam ad cumque suscipit omnis sapiente nulla nihil ratione neque aliquam culpa earum dignissimos.</p>
        `;

        return this.element;
    }
}

const page = new Page().render();
export default page;