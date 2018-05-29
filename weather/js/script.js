const APIKey = '3f446039b0b2327c839d862f9a1d1699';
const form = document.forms[0];
const Temp = document.querySelector('.temp');
const Wind = document.querySelector('.wind');

form.onsubmit = function(e) {
	e.preventDefault();
	const city = form.elements.city.value;
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
	
	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
		console.log(xhr.status+'  '+xhr.statusText); 
	} else {
		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		Temp.innerHTML = DATA.main.temp - 273;
		Wind.innerHTML = DATA.wind.speed;
	}
}


