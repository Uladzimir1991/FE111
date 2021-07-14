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
    console.log(i);
    i--;
}

console.log('');
console.log('');

// Task 3.

//С помощью цикла найдите сумму чисел от 0 до 100.

for(i = 0; 0 <=100; i++) {
    i += i;
    console.log(i);
}