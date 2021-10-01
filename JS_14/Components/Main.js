class Main {

    create() {
        this.element = document.createElement('main')
        this.element.classList.add('main')
    }

    rout() {

        let hash = location.hash;
        hash = hash.replace('#', '');

        if (!hash) hash = 'home';

        this.element.innerHTML = '';

        if (hash.indexOf('catalog/product') != -1) hash = 'product';

        import(`/components/${hash}.js` + (hash == 'product' ? '?v=' + new Date().getTime() : ''))
        .then(module => {
            this.element.append(module.default);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        this.create()

        window.addEventListener('hashchange', _ => {
            this.rout()
        }) 

        this.rout();

        return this.element;
    }
}

const main = new Main().render();
export default main;