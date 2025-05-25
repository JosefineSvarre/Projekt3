// ------------------------------------------ //
//          SCRIPT TIL BURGERMENUEN           //
// ------------------------------------------ //
// Denne del af min kode er lavet med hjælp fra Jakob fra 2. semester.
// Derfor afspejler denne del ikke mine kompetencer inden for kodning.
// Alt i HTML og CSS er lavet af mig.

let isNavOpen = false;

function openCloseExec(event) {
	const navList = document.querySelector('.navbar__list');
	if(isNavOpen) {
		isNavOpen = false;
		navList.style.display = 'none';
	} else {
		isNavOpen = true;
		navList.style.display = 'flex';
	}
}

const toggleButton = document.querySelector('.navbar__toggle');
const navbarClose = document.querySelector('.navbar__close');

toggleButton.addEventListener('click', openCloseExec);
navbarClose.addEventListener('click', openCloseExec);