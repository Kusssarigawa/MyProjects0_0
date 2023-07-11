// script.js

const header = document.querySelector('h1');

header.addEventListener('mouseover', function() {
  header.style.color = 'red';
});

header.addEventListener('mouseout', function() {
  header.style.color = '#333';
});
