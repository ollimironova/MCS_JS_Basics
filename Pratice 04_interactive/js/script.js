const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const popup = document.querySelector('.popup');
const getPopup = document.querySelector('.request');
const closePopup = document.querySelector('.closePopup');

openMenu.onclick = () => {
	menu.style.left = 0;
}
closeMenu.onclick = () => {
	menu.style.left = '-30vw';
}

getPopup.onclick = () => {
	popup.style.display = 'flex';
}
closePopup.onclick = () => {
	popup.style.display = 'none';
}

