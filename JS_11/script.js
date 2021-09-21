class User {

    constructor(data) {
        this.data = {
            id: data.id || 0,
            name: data.name || null,
            email: data.email || null,
            address: data.address || null,
            phone: data.phone || null
        }
    }

    edit(obj) {
        for(let key in obj) {
            if(this.data[key]) this.data[key] = obj[key]
        }
    }

    get() {
        return this.data
    }
}

class Contacts {

    constructor() {
        this.data = [];
    }

    add(data) {

        let id = 0;

        this.data.forEach(user => {
            if(user.data.id > id) id = user.data.id
        })

        id++;
        data.id = id;

        let user = new User(data);
        this.data.push(user);
        
    }

    edit(id, obj) {

        if(!obj.name && !obj.email && !obj.address && !obj.phone) return;
        if(!id) return;

        const user = this.data.find(user => {
            return user.data.id == id;
        });

        user.edit(obj);
    }

    remove(id) {
        if(!id) return

        let index = null;

        this.data.forEach((element, userIndex) => {
            if(id && id == element.data.id) index = userIndex;
        })

        if(index === null) return;

        this.data.splice(index, 1)

    }

    get() {
        return this.data;
    }

}

class ContactsApp extends Contacts {

    constructor() {
        super()

        if(!this.storage) {
            this.getData().then(data => {
                this.storage = data;

                this.app();
        })
        } else {
            this.app();
        }
    }

    app() {
        const container = document.createElement('div')
        container.classList.add('contacts')

        const formElem = document.createElement('div');
        formElem.classList.add('contacts__form');

        this.elemName = document.createElement('input');
        this.elemName.setAttribute('type', 'text');
        this.elemName.setAttribute('maxlength', '25');
        this.elemName.setAttribute('required', '');
        this.elemName.setAttribute('name', 'name');
        this.elemName.setAttribute('placeholder', 'Contact name');

        this.elemEmail = document.createElement('input');
        this.elemEmail.setAttribute('type', 'text');
        this.elemEmail.setAttribute('name', 'email');
        this.elemEmail.setAttribute('placeholder', 'Contact email');

        this.elemAddress = document.createElement('input');
        this.elemAddress.setAttribute('type', 'text');
        this.elemAddress.setAttribute('maxlength', '30');
        this.elemAddress.setAttribute('name', 'address');
        this.elemAddress.setAttribute('placeholder', 'Contact address');

        this.elemPhone = document.createElement('input');
        this.elemPhone.setAttribute('type', 'text');
        this.elemPhone.setAttribute("required", "");
        this.elemPhone.setAttribute('name', 'phone');
        this.elemPhone.setAttribute('placeholder', 'Contact phone');

        
        this.list = document.createElement('ul')
        this.list.classList.add('contact__list')
        this.list.id = 'list'


        this.btnAdd = document.createElement('button')
        this.btnAdd.classList.add('btn','add')
        this.btnAdd.innerText = 'Add'

        formElem.append(this.elemName, this.elemEmail, this.elemAddress, this.elemPhone, this.btnAdd)
        container.append(formElem, this.list)
        document.body.append(container)
        console.log(container)
        container.font = 'Dancing Script cursive'

        formElem.addEventListener('keyup', event => {
            this.onAdd(event);
        });

        this.btnAdd.addEventListener('click' , event => {
            this.onAdd(event)
        })

        let data = this.storage;

        if(data && data.length > 0) {
            this.data = data;
            this.updateList();
        }
    }

    async getData() {

        return await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
                .then(data => {
                    data = data.map(user => {
                        return {
                            data: {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                address: user.address,
                                phone: user.phone
                            }
                        }
                    })
            return data;
        })

    }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name, value, options = {}) {
        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    set storage(data) {

        localStorage.setItem('users', JSON.stringify(data))
        this.setCookie('storageExpiration', 'true', {'max-age': 10})

    }

    get storage() {

        const storageExpiration = this.getCookie('storageExpiration')

        if(!storageExpiration) localStorage.removeItem('users')


        let data = localStorage.getItem('users')
 
        if(!data || data.length == 0) return;

        data = JSON.parse(data)

        if(!data || data.length == 0) return;

        data = data.map(user => {
            user = new User(user.data)
            return user;
        })

        return data;
    }

    updateList() {
        this.list.innerHTML = '';

        const data = this.get();

        data.forEach(user => {

            const li = document.createElement('li');
            li.classList.add('user');

            const id = document.createElement('div')
            id.classList.add('id')
            id.innerHTML = user.data.id;

            const liElems = document.createElement('div')
            liElems.classList.add('li__elems')

            const h2 = document.createElement('h2');
            h2.classList.add('user__name');

            const elemEmail = document.createElement('div');
            elemEmail.classList.add('user__email');

            const elemAddress = document.createElement('div');
            elemAddress.classList.add('user__address');

            const elemPhone = document.createElement('div');
            elemPhone.classList.add('user__phone');

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('user__remove');
            removeBtn.innerHTML = 'X';


            if (user.data.name) h2.innerHTML = user.data.name;
            if (user.data.name == null) {
                user.data.id -= 1;
                return;
            }

            if (user.data.email) elemEmail.innerHTML = user.data.email;
            
            if (user.data.address) {
                const address = 'city:'+ user.data.address.city + ' ' + 'street:'+ user.data.address.street;
                elemAddress.innerHTML = address;
            }
            
            if(user.data.phone == null) {
                user.data.id -= 1;
                return;
            }

            if (user.data.phone) elemPhone.innerHTML = user.data.phone;

                        // Контейнер с иконками
            const icoMessengers = document.createElement('div')
            icoMessengers.classList.add('ico__container')

            const skype = document.createElement('img')
            skype.classList.add('ico__skype')
            skype.src = "/images/skype.png"

            const aSkype = document.createElement('a')
            aSkype.href = `skype: ${user.data.name}?call`;

            const viber = document.createElement('img')
            viber.classList.add('ico__viber')
            viber.src = "/images/viber.png"

            const aViber = document.createElement('a')
            aViber.href = `tel: ${user.data.phone}`;

            const phone = document.createElement('img')
            phone.classList.add('ico__phone')
            phone.src = "/images/phone.png"

            const aPhone = document.createElement('a')
            aPhone.href = `tel: ${user.data.phone}`;

            aSkype.append(skype)
            aPhone.append(phone)
            aViber.append(viber)
            icoMessengers.append(aSkype, aViber, aPhone)

            
            // Контейнер с иконками телефонов
            const getPhone = async function() {

                let response = await fetch('https://api.github.com/emojis')
                if(!response.ok) return;
            
                let data = await response.json();

                let dataIphone = data.iphone,
                    dataHomePhone = data.phone;

                const phoneBlock = document.createElement('div')
                phoneBlock.classList.add('phone')
                phoneBlock.innerHTML = `
                    <img id="id" class="homePhone" src="${dataHomePhone}"/>
                    <img id="id2" class="mobilePhone" src="${dataIphone}"/>
                `

                const arrowRight = document.createElement('span')
                arrowRight.classList.add('arrowRight')
                arrowRight.innerHTML = '>'

                arrowRight.addEventListener('click', event => {
                    if(!event.target) return;

                    phoneBlock.innerHTML = `
                        <img class="homePhone homePhone__hidden" src="${dataHomePhone}"/>
                        <img class="mobilePhone mobilePhone__visible" src="${dataIphone}"/>
                    `
                })

                const arrowLeft = document.createElement('span')
                arrowLeft.classList.add('arrowLeft')
                arrowLeft.innerHTML = '<'

                arrowLeft.addEventListener('click', event => {
                    if(!event.target) return;

                    phoneBlock.innerHTML = `
                        <img class="homePhone" src="${dataHomePhone}"/>
                        <img class="mobilePhone" src="${dataIphone}"/>
                    `
                })

                liElems.append(phoneBlock, arrowRight, arrowLeft);

            }();


            liElems.append(h2, elemEmail, elemAddress, elemPhone, removeBtn);

            li.append(id, liElems, icoMessengers);
            this.list.append(li);


            removeBtn.addEventListener('click', event => {
                this.onRemove(event, user.data.id);
            });

            h2.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });

            elemEmail.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });

            elemAddress.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });

            elemPhone.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });

            h2.addEventListener('keyup', event => {
                this.onSave(event, user.data.id, 'name');
            });

            elemEmail.addEventListener('keyup', event => {
                this.onSave(event, user.data.id, 'email');
            });

            elemAddress.addEventListener('keyup', event => {
                this.onSave(event, user.data.id, 'address');
            });

            elemPhone.addEventListener('keyup', event => {
                this.onSave(event, user.data.id, 'phone');
            });

        });

        this.storage = data;

    }
    

    onAdd(event) {

        if ((event.code != 'Enter' || !event.ctrlKey) && event.target != this.btnAdd) return;

        const nameElem = this.elemName.value;

        const emailElem = this.elemEmail.value;

        const addressElem = this.elemAddress.value;

        const phoneElem = this.elemPhone.value;

        const data = {
            name: nameElem,
            email: emailElem || null,
            address: addressElem || null,
            phone: phoneElem
        };

        if (nameElem == null && phoneElem == null) return;

        this.elemName.value = '';
        this.elemEmail.value = '';
        this.elemAddress.value = '';
        this.elemPhone.value = '';

        this.storage = data;
        this.add(data);          
        this.updateList();

    }

    onSave(event, id, key) {

        if (event.code != 'Enter' || !event.ctrlKey) return;


        let data = {};

        data[key] = event.target.textContent;

        this.edit(id, data);
        this.updateList();
        event.target.setAttribute('contenteditable', false);

    }

    onRemove(event, id) {
        this.remove(id);
        this.updateList();
    }

}

window.addEventListener('DOMContentLoaded', function() {
        new ContactsApp();
})