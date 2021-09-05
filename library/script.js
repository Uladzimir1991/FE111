window.addEventListener('load', function() {

    class $ {
        static create(type) {
            return document.createElement(type)
        }

        static search(element, selector) {
            let result = element.querySelectorAll(selector)  
            
            if(result.length == 1) result = result[0]
            return result;
        }

        static insert(to, element, beforeElement) {
            if(!to || !element) return false;

            if(!beforeElement) to.appendChild(element)
            else to.insertBefore(element, beforeElement)
        }

        static html(element, text) {
            element.innerHTML = text; 
        }

        static attr(element, name, value) {
            element.setAttribute(name, value);
        }

        static addClass(element, className) {
            element.classList.add(className)
        }

        static hasClass(element, className) {
            if(!element.className) return false;
            else return true;
        }

        static removeClass(element, className) {
            element.classList.remove(className);   
        }

        static toggleClass(element, className) {
            element.classList.toggle(className)
            return this.element
        }

        static on(element, eventName, funcName) {
            
            element.addEventListener(eventName, event => {
                if(event.target == element) { 
                    this.toggleClass(element, funcName)
                }
            })
        }

    }

    let h1 = $.create('h1');
    $.html(h1, 'ПрЮвет участникам соревнований!');
    $.insert(document.body, h1)

    let div = $.create('div')
    $.html(div, '<p> Это я учусь тут! Ага!!! </p>')
    $.insert(document.body, div)

    // let div2 = $.create('div')
    // $.html(div2, '<p> Это я учусь тут! Ага!!! </p>')
    // $.insert(document.body, div2)

    // console.log($.search('div'))

    let h2 = $.create('h2')
    $.html(h2, 'ну и ты, заходи!')
    $.insert(document.body, h2, div)

    console.log($.search(document.body, 'h2'))
    $.attr(h2, 'style', 'color: red')
    $.addClass(h2, 'content')
    $.removeClass(h2, 'content')
    $.toggleClass(h2, 'content')
    console.log($.on(h2, 'click', 'blabla'))
    console.log($.hasClass(h2, 'content'))
})