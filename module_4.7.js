let money = prompt('Сколько у вас с собой денег?');
let apples = prompt('Сколько вы купили яблок?');
let bread = prompt('Сколько вы купили батонов?');
let pr1 = prompt('Сколько стоит одно яблоко?');
let pr2 = prompt('Сколько стоит один батон?');

let haveEnough = (mon, app, br, p1, p2) => {
	if (parseFloat(mon) >= parseInt(app)*parseFloat(p1)+parseInt(br)*parseFloat(p2)) {
		document.body.innerHTML = 'Вам хватает денег на покупки';
	} else {
		document.body.innerHTML = 'Вам не хватает денег на покупки';
	}
}

haveEnough(money, apples, bread, pr1, pr2);