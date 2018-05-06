const Colored = document.querySelector('body');
const Person = document.querySelector('.name');
const Image = document.querySelector('img');
const Biography = document.querySelector('.shortBio');
const Header = document.querySelector('.header');

const color = prompt('What color do you want page to be?');
Colored.style.backgroundColor = color;

const textColor = prompt('What color do you want text to be?');
Colored.style.color = textColor;

const name = prompt('Which person inspires you?');
Person.innerHTML = name;

const address = prompt('What does he or she look like? Enter the address of the picture.');
Image.setAttribute('src', address)

const bio = prompt('What do you Know about him or her?');
Biography.innerHTML = bio;

Header.className += ' animated';