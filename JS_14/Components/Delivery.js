class Page {
    create() {
        this.element = document.createElement('div');
    }

    render() {
        this.create();

        this.element.innerHTML = `
            <h2>Delivery terms!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, beatae. Fugiat harum porro dolorum dolore, expedita, nam ad cumque suscipit omnis sapiente nulla nihil ratione neque aliquam culpa earum dignissimos.</p>
        `;

        return this.element;
    }
}

const page = new Page().render();
export default page;