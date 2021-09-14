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
        this.app();
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
            elemAddress.classList.add('user__email');

            const elemPhone = document.createElement('div');
            elemPhone.classList.add('user__email');

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('user__remove');
            removeBtn.innerHTML = 'X';

            const regexp8 = /\+?375 ?\(?\-?[0-9]{2}\)? ?\-?[1-9][0-9]+\-? ?[0-9]+\-? ?[0-9]{2}/gi; 

            const regexp9 = /([\w]+[._-]?[\w]){2,25}@{1}[a-z]+[.-]?[a-z]+.[a-z]{2,11}/gi;

            if (user.data.name) h2.innerHTML = user.data.name;
            if (user.data.name == null) {
                user.data.id -= 1;
                return;
            }

            if (regexp9.test(user.data.email)) elemEmail.innerHTML = user.data.email;

            if (user.data.address) elemAddress.innerHTML = user.data.address;

            if(!regexp8.test(user.data.phone)) {
                user.data.id -= 1;
                return;
            }

            if (regexp8.test(user.data.phone)) elemPhone.innerHTML = user.data.phone;
            console.log(elemPhone.innerHTML = user.data.phone)

            if((user.data.name != null && !regexp8.test(user.data.phone)) || (user.data.name == null && regexp8.test(user.data.phone))) {
                user.data.id -= 1;
                return;
            }

                        // Контейнер с иконками
            const icoMessengers = document.createElement('div')
            icoMessengers.classList.add('ico__container')

            const skype = document.createElement('img')
            skype.classList.add('ico__skype')
            skype.src = "/images/skype.png"

            const viber = document.createElement('img')
            viber.classList.add('ico__viber')
            viber.src = "/images/viber.png"

            const phone = document.createElement('img')
            phone.classList.add('ico__phone')
            phone.src = "/images/phone.png"

            icoMessengers.append(skype, viber, phone)


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


    // get storage() {
            // return window.localStorage.getItem(this.data);
    // }

    // set storage() {
    // 
    // }



}

    //     В классе «ContactsApp» реализуйте сл. св-ва и методы:
    // 1. Геттер и сеттер «storage()» для хранения (добавления и обновления) и получения данных из
    // localStorage браузера.
    // 2. При каждом обновлении localStorage должен создаваться COOKIE параметр
    // «storageExpiration» на уровне всего приложения и сроком на 10 дней.
    // 3. По истечению срока действия «storageExpiration» все данных из localStorage и COOKIES
    // должны быть удалены.
    // Вы можете добавлять любые другие свойства и методы во все классы.
window.addEventListener('DOMContentLoaded', function() {
        new ContactsApp();
})