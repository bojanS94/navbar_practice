const navToggle = document.querySelector('.nav-toggle');
const link = document.querySelector('.links');

//add remove class

navToggle.addEventListener('click', function() {

	link.classList.toggle('show-links');

});