// Task 1. 

// Выведите числа от 1 до 50 и от 35 до 8.

for(let i = 1; i <=50; i++) {
    console.log(i);
}

console.log('');
console.log('');


for(i = 35; i >= 8; i--) {
    console.log(i);
}

console.log('');
console.log('');


// Task 2.

// Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
//тегом <br /> друг от друга, чтобы получить столбец, а не строку.

i = 89;

while(i >= 11) {
    document.write(`${i} <br/>`);
    i--;
}

// Task 3.

// С помощью цикла найдите сумму чисел от 0 до 100.

let sum = 0;

for(let j = 0; j <=100; j++) {
    sum += j; 
}

console.log(`Сумма чисел равна - ${sum}`);

console.log(``);
console.log(``);

// Task 4 

// Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
// (1+2+3).

for( i = 1; i <= 5; i++ ) {
    sum = 0;

    for ( j = 0; j <= i; j++ ) {
        sum += j;
    }

    console.log(`Сумма чисел равна ${sum}`);
}

console.log(``);
console.log(``);


// Task 5

// Выведите чётные числа от 8 до 56. Решить задание через while и for.

for ( i = 8; i <= 56; i++) {
    while( i % 2 == 0) {
        console.log(i);
        break; 
    }
}

console.log('');
console.log('');

// Task 6

// Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
// 2*2 = 4
// 2*3 = 6
// 2*4 = 8
// 2*5 = 10 ...

for ( i = 2; i <= 10; i++ ) {
    for ( j = 1; j <= 10; j++) {
        prem = i * j;
        console.log(`${i} * ${j} = ${prem}`);
    }
    console.log('');
}


// Task 7 

// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в переменную num.

let num = 0;
i = 1000;

while ( i >= 50 ) {
    i /= 2;
    num++;
} 

console.log(`Количество итераций равно - ${num}. Последнее число - ${i}`);

console.log('');
console.log('');


// Task 8

// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
// тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
// общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
// число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
// может ввести отрицательное значение.

let someInt = 0,
    numberOfIteration = 0;

sum = 0;

do {
    someInt = prompt(`Введите число: `);
    if (someInt != Number) {
        console.log('Ошибка ввода!')
    }
    numberOfIteration++;
    sum += +someInt;
}

while (someInt != '' && someInt != null) {
    console.log(`Сумма чисел = ${sum}. Среднее арифметическое = ${sum / (numberOfIteration - 1)}`);
}



console.log('');
console.log('');


// Task 9 

// Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
//8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.

let string = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let cur='', min, max;
for (let i = 0; i < string.length; i++) {
  cur += string[i];
  if (+string[i] && !+string[i+1]) {
    if (typeof min !== 'number' || cur < +min) min = +cur;
    if (typeof max !== 'number' || cur > +max) max = +cur;
    cur = '';
  }
}
console.log('Min:', min, 'Max:', max);

// let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
// const arr = str.split(' ');
// console.log(`Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`)


// Task 10

//