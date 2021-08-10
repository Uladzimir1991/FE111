function TodoList () {  

    const input = document.querySelector('#input');
    const btn = document.querySelector('#btn');
    const result = document.querySelector('#result');
    const del = document.querySelector('.delete');

    document.getElementById('input').placeholder = 'Введите задачу: ';
    
    input.addEventListener('click', () => {
        document.getElementById('input').placeholder = '';
    })

    input.addEventListener('keypress', () => {
        if(input.value === '' || input.value === ' ') return;
        if(event.key == 'Enter') {
            createDeleteElements(input.value);
            input.value = '';
        }
        document.getElementById('input').placeholder = 'Введите задачу: ';
    })

    btn.addEventListener('click', () => {
        if(input.value === '' || input.value === ' ') return;
        createDeleteElements(input.value);
        input.value = '';
        del.classList.add('delete_btn');
        document.getElementById('input').placeholder = 'Введите задачу: ';
    })

    del.addEventListener('click', () => {
        del.classList.remove('delete_btn');
    })


    function createDeleteElements(value) {
        const li = document.createElement('li');
        const btn1 = document.createElement('button'); 
        const btn2 = document.createElement('button');
        const check = document.createElement('input');
        let span = document.createElement('span');
        let label = document.createElement('label');
        label.id = 'label';
        label.className = 'label'
        label.setAttribute("for", 'check');
        document.body.appendChild(label);
        

        li.appendChild(span);

        check.setAttribute("type", "checkbox");
        check.id = 'check';

        li.className = 'li';
        span.className = 'span';
        span.textContent = value;

        btn.className = 'btn';

        btn1.textContent = 'Удалить элемент';
        btn1.className = 'btn1';

        btn2.className = 'btn2';
        btn2.textContent = 'Редактировать'

        li.appendChild(btn1);
        li.appendChild(btn2);
        span.appendChild(label);

        btn2.addEventListener('click', () => {
            let task;
            if(task = prompt('Отредактируйте задачу: ', value)) {
                span.textContent = task;
                span.appendChild(label);

                if(task == task) result
                if(task === '' || task === ' ') {
                    result.removeChild(li);
                }
                if(task == null) {
                    result.removeChild(li)
                }

                if(task == task) {
                    span.textContent = task;
                    span.appendChild(label);
                }
            } else {
                result.removeChild(li);
                del.classList.remove('delete_btn');
            }      
        })

        btn1.addEventListener('click', () => {
            result.removeChild(li)
        })

        del.addEventListener('click', () => {
            result.removeChild(li);
        })

        label.addEventListener('click', () => {
            li.classList.toggle('li-active');
        })

        label.addEventListener('click', () => {
            label.classList.toggle('after');
        })

        result.appendChild(li);
    }
}

let todo = new TodoList()
