// Задание 7

let n = 6;

if (n >= 0 && n <= 14) console.log(n + ' ' + 'находится в первой четверти часа!');
else if (n >= 15 && n <= 29) console.log(n + ' ' + 'находится во второй четверти часа!');
else if (n >= 30 && n <= 44) console.log(n + ' ' + 'находится в третьей четверти часа!');
else if (n >= 45 && n <= 59) console.log(n + ' ' + 'находится в четвёртой четверти часа!');
else console.log('Нет такого времени!');