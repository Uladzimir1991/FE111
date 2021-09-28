import home from "../Pages/Home.js";
import product1 from "../Products/Product1.js";
import product2 from "../Products/Product2.js";


class Main {

    create() {
        this.element = document.createElement('main')
        this.element.classList.add('main')
    }

    init() {
        this.create()
        this.rout()
        this.hash()

        return this.element;
    }

    rout() {

        if(!location.hash) {
            this.element.append(home)
        }   
    }

    hash(hash) {
        window.addEventListener('hashchange', _ => {

            hash = location.hash;
            hash = hash.replace('#', '')

            var url = getLocation(location.href);
            function getLocation(href) {
               var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
               return match && {
                     protocol: match[1],
                     host: match[2],
                     hostname: match[3],
                     port: match[4],
                     pathname: match[5],
                     search: match[6],
                     hash: match[7]
                  }
            }
            console.log
            if(hash == 'About' || hash == 'Delivery' || hash == 'Cart') {
                    import(`../Pages/${hash}.js`)
                    .then(function(module) {

                
                    const mainElem = document.querySelector('main')
                    mainElem.innerHTML = ''
            
                    const h2 = document.createElement('h2')
                    h2.innerHTML = module.title;
            
                    const p = document.createElement('p')
                    p.innerHTML = module.content;
            
                    mainElem.append(h2, p)

                })
            }


            if(hash == 'Product/1') {
                hash = hash.replace('/', '')

                import(`../Products/${hash}.js`)
                .then(_ => {
                    const i = document.querySelector('.list')
                    i.replaceWith(product1)
                })
                
            }

            if(hash == 'Product/2') {
                hash = hash.replace('/', '')

                import(`../Products/${hash}.js`)
                .then(_ => {
                    const i = document.querySelector('.list')
                    i.replaceWith(product2)
                })
                
            }
        })
        
    }

}

const main = new Main().init();
export default main;