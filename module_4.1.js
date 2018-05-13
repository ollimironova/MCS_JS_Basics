const num = prompt('Введите число');

if (num>=0) {
	document.body.innerHTML = num;
} else {
	document.body.innerHTML = num*(-1);
}