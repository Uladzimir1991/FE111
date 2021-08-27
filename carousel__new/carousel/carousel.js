const carousel = function() {
    
    let radius = 380; 
    let autoRotate = true;
    let rotateSpeed = -50; 
    let imgWidth = 160; 
    let imgHeight = 185;
    setTimeout(init, 300);
    let odrag = document.getElementById("drag-container");
    let ospin = document.getElementById("spin-container");
    let carousel = document.getElementById("carousel");
    let aImg = ospin.getElementsByTagName("a");
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";
    let ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
        for (let i = 0; i < aImg.length; i++) {
            aImg[i].style.transform = "rotateY(" + i * (360 / aImg.length) + "deg) translateZ(" + radius + "px)";
            aImg[i].style.transition = "transform 1.2s";
            aImg[i].style.transitionDelay = delayTime || (aImg.length - i) / 4 + "s";
        }
    }

    function applyTransform(obj) {
        if (tY > 180) tY = 180;
        if (tY < 0) tY = 0;
        obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }

    function playSpin(yes) {
        ospin.style.animationPlayState = yes ? "running" : "paused";
    }
    let sX,
    sY,
    nX,
    nY,
    desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;
    if (autoRotate) {

        let animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
        ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    carousel.onpointerdown = function(e) {
        clearInterval(odrag.timer);
        e = e || window.event;
        let sX = e.clientX,
        sY = e.clientY;
        this.onpointermove = function(e) {
            e = e || window.event;
            let nX = e.clientX,
            nY = e.clientY;
            desX = nX - sX;
            desY = nY - sY;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag);
            sX = nX;
            sY = nY;
        };

        this.onpointerup = function(e) {
            odrag.timer = setInterval(function() {
                desX *= 0.95;
                desY *= 0.95;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTransform(odrag);
                playSpin(false);
                if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                    clearInterval(odrag.timer);
                    playSpin(true);
                }
            }, 17);
            this.onpointermove = this.onpointerup = null;
        };
        return false;
    };

    const popup = function() {

        const elems = document.querySelectorAll('[data-popup]');
        if (elems.length == 0) return;
    
        const close = function() {
            let popup = document.querySelector('.popup');
    
            if (!popup) return;
    
            popup.remove();
        }
    
        const show = function(event) {
            event.preventDefault();
    
            let name = event.target.dataset.popup;
    
            if (name == undefined && event.target.tagName == 'IMG') {
                const aImg = event.target.closest('a');
    
                if (!aImg) return;
    
                name = aImg.dataset.popup;
            }
    
            if (!name) return;
    
            let content = null;
    
            if (name == 'zoom') {
                const aImg = event.target.closest('a');
                const aHref= aImg.href;
    
                if (aHref.length == 0) return;
    
                content = `<img src="${aHref}" />`;

            } else {
                let idCont = document.querySelectorAll('#' + name);
    
                if (idCont.length > 1 || idCont.length == 0) return;
                idCont = idCont[0];
    
                content = idCont.innerHTML;
            }
    
            if (!content) return;
    
            let popupContent = document.querySelector('.popup__content');
    
            if (!popupContent) {

                const popup = document.createElement('div');
                popup.classList.add('popup');
    
                const popupClose = document.createElement('button');
                popupClose.classList.add('popup__close');
                popupClose.innerHTML = 'X';
    
                popupContent = document.createElement('div');
                popupContent.classList.add('popup__content');  
                
                popup.append(popupClose, popupContent);
    
                document.body.append(popup);
    
                popupClose.addEventListener('click', close);
            }
            
            popupContent.innerHTML = content;
        }
    
        elems.forEach(elem => {
            elem.addEventListener('click', show);
        });
    };
    
    popup();
}

carousel();