// Задание 5

a = 10;
let b = 2,
    sum = a + b,
    dif = a - b,
    comp = a * b,
    quot = a / b,
    totalAmount = sum + dif + comp + quot;

if(totalAmount > 1) {
    totalAmount *= totalAmount;
    console.log(totalAmount);
} else console.log('\n' + "Условие не соблюдено.")