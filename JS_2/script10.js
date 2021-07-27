// Задание 10  

let TOTY,   
    month;

if(day >=1 && day <=31) month = 'январь';
else if (day >= 32 && day <= 59) month = 'февраль';
else if (day >= 60 && day <= 90) month = 'март';
else if (day >= 91 && day <= 120) month = 'апрель';
else if (day >= 121 && day <= 151) month = 'май';
else if (day >= 152 && day <= 181) month = 'июнь';
else if (day >= 182 && day <= 212) month = 'июль';
else if (day >= 213 && day <= 243) month = 'август';
else if (day >= 244 && day <= 273) month = 'сентябрь';
else if (day >= 274 && day <= 304) month = 'октябрь';
else if (day >= 305 && day <= 334) month = 'ноябрь';
else if (day >= 335 && day <= 365) month = 'декабрь';
else if(day == 366) console.log('Это високосный год!')
else console.log('Нет такого дня в году(мин. - 1, макс. - 366)! Проверьте корректность введённых данных и повторите попытку!')


if((day >= 1 && day <= 59) || (day >= 335 && day <= 365)) TOTY=1;
else if (day >= 60 && day <= 151) TOTY=2;
else if (day >= 152 && day <= 243) TOTY=3;
else if (day >= 244 && day <= 335) TOTY=4;
 


switch (TOTY) {
    case 1:
        console.log(month + ' - это зима!')
    break;

    case 2:
        console.log(month + ' - это весна!')    
    break;

    case 3:
        console.log(month + ' - это лето!')
    break;

    case 4:
        console.log(month + ' - это осень!')
    break;

}
