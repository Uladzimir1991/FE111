class Main {
    create() {
        this.element = document.createElement('main');
        this.element.classList.add('main');
    }

    routing() {
        let hash = location.hash;
        hash = hash.replace('#', '');

        if (!hash) hash = 'Login';

        this.element.innerHTML = '';

        if (hash.indexOf() != -1) hash = 'Login';

        import(`./${hash}.js` + (hash == 'Login' || hash == 'Todo' ? '?v=' + new Date().getTime() : ''))
        .then(module => {
            this.element.append(module.default)
        })
    }

    render() {
        this.create();

        window.addEventListener('hashchange', _ => {
            this.routing();
        });

        this.routing();

        return this.element;
    }
}

const main = new Main().render();
export default main;