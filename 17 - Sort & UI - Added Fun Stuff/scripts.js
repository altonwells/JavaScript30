const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const originButton = document.querySelector("#og");
const sortedButton = document.getElementById("new");
const bandInput = document.querySelector(".former input");
const bandButton = document.querySelector(".former button");

function clearEr(band) {
 return band.replace(/^(a |the |an )/i, '').trim();
}

function orginalBands() {
  document.querySelector('#bands').innerHTML = bands
    .map(band => `<li>${band}</li>`)
    .join('');
};

function sortBands() {
  let sortedBands = bands.map(band => clearEr(band));
  sortedBands.sort();
  document.querySelector('#bands').innerHTML = sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');
}

function addBand(e) {
  e.preventDefault();
  bandInput.value != '' ? bands.unshift(bandInput.value) : alert("cant submit"); 
  bandInput.value = '';
  orginalBands();
}

originButton.addEventListener('click', orginalBands);
sortedButton.addEventListener('click', sortBands);
bandButton.addEventListener('click', addBand);
