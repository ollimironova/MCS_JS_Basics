const APIKey = '3f446039b0b2327c839d862f9a1d1699';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid='+APIKey;
const form = document.forms[0];
const NameBlock = document.querySelector('.name');
const IconBlock = document.querySelector('.icon');
window.addEventListener('load', function(){
	class Person {
		constructor(name){
			this.name = name;
			this.happiness = 0;
		}
		hasCat() {
			return this.happiness++;
		}
		hasRest() {
			return this.happiness++;
		}
		hasMoney() {
			return this.happiness++;
		}
		isSunny() {
			let xhr = new XMLHttpRequest();

			xhr.open('GET', url, false);
			xhr.send();

			if (xhr.status != 200) {
				console.log(xhr.status+'  '+xhr.statusText); 
			} else {
				let DATA = JSON.parse(xhr.responseText);
				if (DATA.main.temp - 273 >= 15) {
					return this.happiness++;
				} else {
					return this.happiness;
				}
			}			
		}
	}

	form.onsubmit = function(e) {
		e.preventDefault();
		const Name = form.elements.name.value;
		const Cat = form.elements.cat.value;
		const Rest = form.elements.rest.value;
		const Money = form.elements.money.value;
		
		const Guest = new Person(Name);

		if (Cat == 'yes') {
			Guest.hasCat();
		}
		if (Rest == 'yes') {
			Guest.hasRest();
		}
		if (Money == 'yes') {
			Guest.hasMoney();
		}
		
		Guest.isSunny();

		NameBlock.innerHTML = Name;

		if (Guest.happiness == 4) {
			IconBlock.setAttribute('src', 'img/1.png');
		} else if (Guest.happiness == 3 || Guest.happiness == 2) {
			IconBlock.setAttribute('src', 'img/2.png');
		} else {
			IconBlock.setAttribute('src', 'img/3.png');
		} 
	}
})