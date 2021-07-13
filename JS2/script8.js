// Задание 8

let day = 31;

if (day >= 1 & day <= 10) console.log(day + ' ' + 'находится в первой декаде месяца!');
else if (day > 10 & day <= 20) console.log(day + ' ' + 'находится во второй декаде месяца!');
else if (day > 20 & day <= 31) console.log(day + ' ' + 'находится в третьей декаде месяца!');
else console.log('Нет такого числа в месяце!');