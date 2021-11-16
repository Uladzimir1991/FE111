class Page {
    constructor() {
        this.array = [];
        this.arr = []
    }

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('todo__container')

        this.header = document.querySelector('header')
        this.footer = document.querySelector('footer')

        this.header.style.display = 'none'
        this.footer.style.display = 'none'
    }

    init() {

        this.container = document.createElement('div')
        this.container.className = 'container'

        this.wrapper = document.createElement('div')
        this.wrapper.className = 'todo_wrapper'

        this.todoLogo = document.createElement('div');
        this.todoLogo.classList.add('todo_logo')

        this.form = document.createElement('div')
        this.form.className = 'todo__form'

        this.btnLogout = document.createElement('a')
        this.btnLogout.className = 'todo_logout'
        this.btnLogout.setAttribute('href', '#Login')
        this.btnLogout.innerHTML = 'Logout';

        for(let key in localStorage) {
            this.userName = key = 'Admin';
        }

        this.nameBlock = document.createElement('h3')
        this.nameBlock.classList.add('name_block')
        this.nameBlock.innerHTML = `Thank you ${this.userName}`;

        this.todoTitle = document.createElement('h2')
        this.todoTitle.className = 'todo__title'
        this.todoTitle.innerHTML = '&laquo; To-do list: &raquo;'

        this.input = document.createElement('input')
        this.input.className = 'todo_input'
        this.input.setAttribute('type', 'text')

        this.btnAdd = document.createElement('button')
        this.btnAdd.className = 'btn_add'
        this.btnAdd.textContent = 'Add task'

        this.list = document.createElement('ul')
        this.list.className = 'todo__list'

        this.form.append(this.btnLogout, this.todoTitle, this.input, this.btnAdd, this.list);
        this.form.insertBefore(this.nameBlock, this.todoTitle)
        this.wrapper.append(this.todoLogo, this.form)
        this.container.append(this.wrapper)
        this.element.append(this.container)

        this.btnAdd.addEventListener('click', (event) => {
            this.add(event)
        })

        this.input.addEventListener('keyup', (event) => {
            this.add(event);
        })

        this.updateList()
    }

    add(event) {
        if(event.code != 'Enter' && event.target != this.btnAdd) return;
        if(this.input.value == '' || this.input.value == ' ') return;

        let data = {
            data: this.input.value
        }

        this.arr.push(data)

        if(this.input.value.length == 0) return;

        this.array.push(this.input.value);

        this.input.value='';
        localStorage.setItem('task', JSON.stringify(this.array))
        this.updateList();
    }

    edit(event){
        let li = event.target.closest('li')

        if(!li) return;

        let edit = prompt('Edit the task: ')

        li.innerHTML = `<span>${edit}</span>`;

        if(edit == '' || edit == ' ') return;

        let data = li.dataset.index;


        this.array.splice(data, 1, edit)
        localStorage.setItem('task', JSON.stringify(this.array))
        this.updateList();
    }

    delete(event) {
        let li = event.target.closest('li')

        if(!li) return;

        let data = li.dataset.index;

        this.array.splice(data, 1)
        localStorage.setItem('task', JSON.stringify(this.array))
        this.updateList();
    }

    updateList() {
        this.list.innerHTML = '';

        let myTask = localStorage.getItem('task')

        this.array = JSON.parse(myTask)

        this.array.forEach((elem, index) => {
            localStorage.setItem('task', JSON.stringify(this.array))

            const li = document.createElement('li')
            li.innerHTML = `<p>${elem}</p>`;

            let p = li.querySelectorAll('p')
            p.forEach(element => {
                element.addEventListener('click', event => {
                    if(!event.target) return;
                    element.classList.toggle('active')
                })
            })

            li.dataset.index = index;

            let btnDelEdit = document.createElement('div')
            btnDelEdit.className = 'btn_del-edit'

            let id = document.createElement('span')
            id.className = 'id'
            id.innerHTML = `${index + 1}`

            const btnEdit = document.createElement('button')
            btnEdit.className = 'edit'
            btnEdit.textContent = 'E'

            const btnDelete = document.createElement('button')
            btnDelete.className = 'delete'
            btnDelete.textContent = '+'

            btnDelEdit.append(btnEdit, btnDelete)
            li.append(btnDelEdit, id);
            this.list.append(li);

            btnEdit.addEventListener('click', (event) => {
                this.edit(event)
            })

            btnDelete.addEventListener('click', (event) => {
                this.delete(event)
            })
        })
    }

    render() {
        this.create();

        this.init();


        return this.element;
    }
}

const page = new Page().render();
export default page;