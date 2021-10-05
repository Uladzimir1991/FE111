class Page {
    create() {
        this.element = document.createElement('div');
        this.element.classList.add('page');
    }

    Mypopup() {

        this.popup = document.createElement('div')
        this.popup.classList.add('popup')

        const popupClose = document.createElement('button');
        popupClose.classList.add('popup__close');
        popupClose.innerHTML = 'X';
        
        this.popup.append(popupClose, this.popupContent);

        popupClose.addEventListener('click', event => {
            if(event.target) this.popup.remove()
        });

        this.popup.addEventListener('click', event => {
            let img =  this.popupContent.querySelector('img');
            if(event.target == img) return;
            this.popup.remove()
        })

        this.element.append(this.popup)
    }

    render() {
        this.create();

        this.element.innerHTML = `
            <h2 class="popup__title">Popup's. Click the image!</h2>
            <div class="popup__container">
                <a data-popup="zoom" href="./images/1.jpg"><img src="./images/1.jpg" alt="#" /></a>
                    
                <a data-popup="zoom" href="./images/2.jpg"><img src="./images/2.jpg" alt="#" /></a>
                
                <a data-popup="zoom" href="./images/3.jpg"><img src="./images/3.jpg" alt="#" /></a>
            
                <a data-popup="zoom" href="./images/4.jpg"><img src="./images/4.jpg" alt="#" /></a>
                
                <a data-popup="zoom" href="./images/5.jpg"><img src="./images/5.jpg" alt="#" /></a>
            
                <a data-popup="zoom" href="./images/6.jpg"><img src="./images/6.jpg" alt="#" /></a>
                
                <a data-popup="zoom" href="./images/7.jpg"><img src="./images/7.jpg" alt="#" /></a>
            
                <a data-popup="zoom" href="./images/8.jpg"><img src="./images/8.jpg" alt="#" /></a>
            </div>
        `;

        this.elems = this.element.querySelectorAll('a');
        
        this.elems.forEach(elem => {
            elem.addEventListener('click', event => {
                event.preventDefault();
                const aImg = event.target.closest('a');
                const aHref= aImg.href;
                
                this.popupContent = document.createElement('div');
                this.popupContent.classList.add('popup__content'); 

                this.popupContent.innerHTML = `<img src="${aHref}" />`;

                this.Mypopup();
            });
        });

        return this.element;
    }
}

const page = new Page().render();
export default page;