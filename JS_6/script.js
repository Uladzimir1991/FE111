// Task 1

// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

let str1 = 'aaa@bbb@ccc';

console.log(str1.match(/@/g));
console.log(str1.replace(/@/g, '!'));


console.log('');
console.log('');




// Task 2

// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

let str2 = '2025-12-31';

const newStr2 = str2.replace(/-/gi, '/');
console.log(newStr2);

console.log('');
console.log('');




// task 3

// Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

let str3 = 'Я учу javascript!';

console.log(str3.substr(2, 3));
console.log(str3.substr(6, 10));
console.log('');

console.log(str3.substring(2, 5));
console.log(str3.substring(6, 16));
console.log('');

console.log(str3.slice(2, 5));
console.log(str3.slice(6, 16));
console.log('');


console.log('');
console.log('');




// Task 4

// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr4 = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for(let i = 0; i < arr4.length; i++) {
    sum += Math.pow(arr4[i], 3);
    }

console.log(sum);
console.log(Math.sqrt(sum));



console.log('');
console.log('');
    
    
    

// Task 5

// Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

let a,
    b,
    c;

a = 3;
b = 6;

c = a - b;
console.log(Math.abs(c));

a = 5;
b = 1;

c = a - b;
console.log(Math.abs(c));



console.log('');
console.log('');
    
    
    

// Task 6

// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

var date = new Date();

 function zero (/*getMonth, getDate, getSeconds*/n) {

    if (n < 10) {
        n = '0' + n; 
    }
    return n;

	// if ((getMonth  >= 0 || getDate >= 0) && (getMonth < 10 || getDate < 10)) { 
	// 	return '0' + getMonth || getDate;
	// } else {
	// 	return getMonth || getDate;
	// }
}

console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${zero(date.getDate())}.${zero(date.getMonth() + 1)}.${date.getFullYear()}`);



console.log('');
console.log('');
    
    
    

// Task 7 

// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

let str7 = 'aa aba abba abbba abca abea';

console.log(str7.match(/ab+a/g));



console.log('');
console.log('');
    
    
    

// Task 8

// Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

let phone8 = prompt('Введите ваш номер телефона: ')

function tel() {

    let regexp8 = /^\+?(375|8 ?\(?0)(29|25|44|33)\)? ?(\d{3})\-? ?(\d{2})\-? ?(\d{2})$/gi; 

    console.log(regexp8.test(phone8));
}

tel();



console.log('');
console.log('');
    
    
    

// Task 9 

// Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условий:

// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов.

// Функция должна возвращать true или false. Используйте регулярные
// выражения.

let mail9= '123@dogwoof-woof.off';

function email() {

    let regexp9 = /^[a-z]|[0-9?\_?\-?]{2,15}@[a-z\_?\-?].[a-z]{2,11}$/gi;

    console.log(regexp9.test(mail9));
}

email();