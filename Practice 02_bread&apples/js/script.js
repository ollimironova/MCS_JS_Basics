let money = prompt('Сколько у вас с собой денег?')
let apples = prompt('Сколько вы купили яблок?')
let bread = prompt('Сколько вы купили батонов?')

let pr1 = prompt('Сколько стоит одно яблоко?')
let applespr = parseInt(apples)*parseFloat(pr1)

let pr2 = prompt('Сколько стоит один батон?')
let breadpr = parseInt(bread)*parseFloat(pr2)

let result = parseFloat(money)>=(applespr+breadpr)

document.body.innerHTML = result