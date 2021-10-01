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
            <h1>${product.title}</h1>
        `;

        return this.element;
    }
}

const page = new Page().render();
export default page;