// Задание 1

let Name = prompt('Ваше имя'),
    age = prompt('Ваш возраст'),
    city = prompt('Ваш город проживания'),
    phone = prompt('Ваш телефон'),
    email = prompt('Ваш почтовый ящик'),
    company = prompt('Ваша организация');


console.log(Name + '\n\n'+ age +'\n\n' + city + '\n\n' + phone + '\n\n' + email + '\n\n' + company);
console.log('\n' + `Меня зовут ` + Name + `. Мне ` + age + ` лет. Я проживаю в городе ` + city + ` и работаю в компании ` + company + '.' + '\n' + `Мои контактные данные: ` + phone +  `, ` + email + `.`);
