let S = 2000000
    p = 10
    years = 5
    yearSum = S / years
    year1 = S / p
    year2 = (S - yearSum) / p
    year3 = (S - yearSum * 2) / p
    year4 = (S - yearSum * 3) / p
    year5 = (S - yearSum * 4) / p

    Pereplata = year1 + year2 + year3 + year4 + year5

console.log (Pereplata + ' руб.')
console.log('')
console.log('')