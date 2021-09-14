/* 
- note
- notes
- notes ui
*/

class Note {
    constructor(data) {
        this.data = {
            id: data.id || 0,
            title: data.title || null,
            content: data.content || null
        };
    }

    edit(newData) {
        for(let key in newData) if (this.data[key] && newData[key]) this.data[key] = newData[key];
        // this.data = Object.assign(this.data, newData);
    }

    get() {
        return this.data;
    }
}

class Notes {
    constructor() {
        this.data = [];
    }

    add(data) {
        if (!data.title && !data.content) return;

        let id = 0;

        this.data.forEach(note => {
            if (note.data.id > id) id = note.data.id;
        });

        id++;
        data.id = id;

        const note = new Note(data);
        this.data.push(note);
    }

    edit(id, newData) {
        if (!id) return;
        if (!newData.title && !newData.content) return;

        const note = this.data.find(note => {
            return note.data.id == id;
        });

        note.edit(newData);
    }

    remove(id) {
        if (!id) return;

        // let index = null;

        // this.data.forEach((note, noteIndex) => {
        //     if (note.data.id == id) index = noteIndex;
        // });

        // if (index === null) return;

        // this.data.splice(index, 1);

        this.data = this.data.filter(note => {
            return note.data.id != id;
        });
    }

    get() {
        return this.data;
    }
}

class NotesUI extends Notes {
    constructor() {
        super();

        this.init();
    }

    init() {
        const notesElem = document.createElement('div');
        notesElem.classList.add('notes');
        notesElem.style.fontFamily = 'fantasy'

        const formElem = document.createElement('div');
        formElem.classList.add('notes__form');

        this.titleElem = document.createElement('input');
        this.titleElem.setAttribute('type', 'text');
        this.titleElem.setAttribute('name', 'title');
        this.titleElem.setAttribute('maxlength', '15');
        this.titleElem.setAttribute('placeholder', 'Title note');

        this.textareaElem = document.createElement('textarea');
        this.textareaElem.setAttribute('name', 'content');
        this.textareaElem.setAttribute('placeholder', 'Your content');

        this.listElem = document.createElement('ul');
        this.listElem.classList.add('notes__list');
        console.log(this.listElem)

        formElem.append(this.titleElem, this.textareaElem)
        notesElem.append(formElem, this.listElem);
        document.body.append(notesElem);

        formElem.addEventListener('keyup', event => {
            this.onAdd(event);
        });
    }

    updateList() {
        this.listElem.innerHTML = '';

        const data = this.get();

        data.forEach(note => {
            const li = document.createElement('li');
            li.classList.add('note');

            const h3 = document.createElement('h3');
            h3.classList.add('note__title');

            const contentElem = document.createElement('div');
            contentElem.classList.add('note__content');

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('note__remove');

            if (note.data.title) h3.innerHTML = note.data.title;
            if (note.data.content) contentElem.innerHTML = note.data.content;

            li.append(h3, contentElem, removeBtn);
            this.listElem.append(li);

            removeBtn.addEventListener('click', event => {
                this.onRemove(event, note.data.id);
            });

            h3.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });

            contentElem.addEventListener('dblclick', event => {
                event.target.setAttribute('contenteditable', true);
                event.target.focus();
            });

            h3.addEventListener('keyup', event => {
                this.onSave(event, note.data.id, 'title');
            });

            contentElem.addEventListener('keyup', event => {
                this.onSave(event, note.data.id, 'content');
            });
        });
    }

    onAdd(event) {
        if (event.code != 'Enter' || !event.ctrlKey) return;

        const titleElem = this.titleElem.value;
        const textareaElem = this.textareaElem.value;

        const data = {
            title: titleElem || null,
            content: textareaElem || null
        };

        this.titleElem.value = '';
        this.textareaElem.value = '';

        this.add(data);
        this.updateList();
    }

    onSave(event, id, key) {
        if (event.code != 'Enter' || !event.ctrlKey) return;

        const data = {};

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

new NotesUI();