// Task 1

// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

function mathInt(a, b, c) {
    console.log((a - b) / c);
}

mathInt(15, 5, 2);


console.log('');
console.log('');



// Task 2 

// Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

function returnSquareCube(a) {
    if(a > 0) {
        console.log(a * a * a);
        console.log('');
        console.log(a * a);
    } else {
        console.log('Ой всё! =)')
    }
}

returnSquareCube(5);
returnSquareCube(0);
returnSquareCube(-13);


console.log('');
console.log('');



// Task 3 

// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

function min(a, b) {
    if(a < b) {
        console.log(`Меньшее число = ${a}`);
    } else {
        console.log(`Меньшее число = ${b}`)
    }
}

min(9, 1)

function max(a, b) {
    if(a > b) {
        console.log(`Большее число = ${a}`);
    }  else {
        console.log(`Большее число = ${b}`)
    }
}

max(4, 7)


console.log('');
console.log('');



// Task 4 

// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

function getArray(start, end) {
    let arr = new Array;
    start = prompt('Введите начальное значение массива: ');
    end = prompt('Введите конечное значение массива: ')
    let n = end - start;

    for (let i = 0; i <= n; i++, start++) {
        arr[i] = +start;
    }
        return arr;
}

function giveArray() {
    console.log(getArray())
}

giveArray();


console.log('');
console.log('');




// Task 5 

// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

function isEven(a) {
    a = prompt('Введите число: ');
    if(a == '') {
        return ('Вы ничего не ввели.')
    }
    if (a == 0) {
        return ('Вы ввели 0!');
    }

    if(a % 2 == 0) {
        return true;
    } else if(a % 2 == 1) {
        return false;
    }  else {
        return ("Ошибка ввода данных! Вы ввели не число!");
    }

}

console.log(isEven());


console.log('');
console.log('');



// Task 6 

// Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

function array1 (arr) {
    console.log(isEven());

    function isEven () {
        let res = [];
            for(let i = 0; i < arr.length; i++){
                if(arr[i] % 2 == 0) {
                    res.push(arr[i]);
                }
            }
        return res;
    }
}

array1([2, 56, 28, -8, 10346, 'next', true]);


console.log('');
console.log('');



// Task 7

// Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
//     циклы):

//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999

//     Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//     параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//     кроме пробела, то пирамида должна быть нарисована этим символом,
//     например:
    
//     *
//     **
//     ***
//     ****
//     *****
//     ******
//     *******
//     ********
//     *********


let symbol = prompt('символ');

function pyram(n) {
    let m = '';

    for(let i = 0; i - 1 < n; i++) {
        m = '';
        for(let j = 1; j <= i; j++) {
            m += symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
        }
        
       console.log(m);
    }
}

pyram(prompt('число'));


console.log('');
console.log('');



// Task 8

// Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

//     *
//    ***
//   *****
//  *******
// *********

// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.

i = 0;

function triangle(space,star) {
    max = prompt('Определите количество строк(введите число): ');

    while (i < max) {
        space = "";
        star = "";
        for (j = 0; j < max - i; j++) space += " ";
        for (j = 0; j < 2 * i + 1; j++) star += "*";
        console.log(space + star);
        i++;
    }  
}

triangle();

console.log('');
console.log('');

i = 0;

function revTriangle(space,star) {
    max = prompt('Определите количество строк(введите число): ');
    i = max;
    while (i <= max && i >= 0) {
        space = "";
        star = "";
        for (j = 0; j < max - (i - 1); j++) space += " ";
        for (j = 0; j < 2 * (i - 1) + 1; j++) star += "*";
        console.log(space + star);
        i--;
    }  
}

revTriangle();


console.log('');
console.log('');



// Task 9

// Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

function fibArray() {

    var var1 = 0,
        var2 = 1,
        arr = [],
        var3;

    var num = prompt('Введите границу массива чисел Фибоначи: ');

    arr.push(var1);
    while(var2 + var1 < num) {
    var3 = var1 + var2;
    var1 = var2;
    var2 = var3;
    arr.push(var3);
    }
    console.log(arr);
}

fibArray();


console.log('');
console.log('');




// Task 10 

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

let num = 274982;

function isSumLess(num) {
    let sum = 0;

    var arrayString = String(num).split('');
    for(let i = 0; i < arrayString.length; i++) {
        sum += parseInt(arrayString[i]);
    }

    if(sum > 9) {
        return isSumLess(sum);
    } else {
        return sum;
    }
}

let finalSum = isSumLess(num);
console.log('Конечное число = ' + finalSum);


console.log('');
console.log('');



// Task 11

// Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.


var arr = [3, 5256, 12 + 'x', 32, 'false' , 96, 36];

function func(i){
    console.log(arr[i++]);
    if(i < arr.length){
        func(i);
    }
}
func(0);
