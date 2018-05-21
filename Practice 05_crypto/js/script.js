const Names = document.getElementsByTagName('h2');
const Prices = document.getElementsByTagName('p');
const Blocks = document.getElementsByClassName('block');

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

for(let i=0; i<crypto.length; i++) {
  Names[i].innerHTML = crypto[i]['name'];
  Prices[i].innerHTML = crypto[i]['price'];
  Blocks[i].style.width = crypto[i]['price']+'px';
}




