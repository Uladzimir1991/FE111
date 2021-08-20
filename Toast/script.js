const Toast = function() {
    const wrapper = document.querySelector('.wrapper')
    const toast = document.querySelector('.toast')
    const close = document.querySelector('.btn_close')
    const trigger = document.querySelector('.show')
    const popover = document.querySelector('.popover')


    if (trigger) {
    trigger.addEventListener('click', function () {
        toast.classList.toggle('toast-active');
        })
    } 

    if(close){
        close.addEventListener('click', function() {
            toast.classList.remove('toast-active');
        })
    }

    if(popover) {
        wrapper.addEventListener('mouseover', function(event) {
            if(event.target == trigger) {
                popover.classList.add('popover-active')
            } 
            if(event.target !== trigger){
                popover.classList.remove('popover-active')
            }
        })
    }

    if(popover) {
        wrapper.addEventListener('click', function(event) {
            if(event.target == trigger) {
                popover.classList.remove('popover-active')
            } 
        })
    }

    const closeTimeout = function() {
        if(toast.className = 'toast active'){
            toast.classList.remove('active');
        }
        setTimeout(closeTimeout, 4000)
    }

    closeTimeout();

}

const toast = new Toast();