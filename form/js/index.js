import './../css/style.css';
import '../css/all.css'

let form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    let input = document.querySelector('.input')

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            if(input.value) {
                alert(JSON.stringify(`Ваш номер ${input.value} под ID: ${JSON.stringify(json.id)}`));
                input.value = '';
            }
        })

})