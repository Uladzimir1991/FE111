let dayNum = prompt('Введите кол-во дней: '),
    year = 365,
    Month = 31,
    weak = 7,
    hours = 24 * dayNum,
    min = 60 * hours,
    sec = 60 * min;

if(dayNum < year) console.log('Меньше года!');
else if(dayNum == year) console.log('1 год');
else if (dayNum > year) console.log('1 год'+ ' ' + 'и' + ' ' + (dayNum - year) + ' дней');
else ;

if(dayNum < Month) console.log('Меньше месяца!');
else if(dayNum == Month) console.log('1 месяц');
else if (dayNum > Month) console.log('1 месяц'+ ' ' + 'и' + ' ' + (dayNum - Month) + ' дней');

if(dayNum < weak) console.log('Меньше недели!');
else if(dayNum == weak) console.log('1 неделя');
else if (dayNum > weak) console.log('1 неделя'+ ' ' + 'и' + ' ' + (dayNum - weak) + ' дней');

console.log(hours + ' ' + 'часов' + ' ' + 'в' + ' ' + dayNum + ' дней');
console.log(min + ' ' + 'минут' + ' ' + 'в' + ' ' + dayNum + ' дней');
console.log(sec + ' ' + 'секунд' + ' ' + 'в' + ' ' + dayNum + ' дней');