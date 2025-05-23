// ------------------------------------------ //
//          SCRIPT TIL BURGERMENUEN           //
// ------------------------------------------ //
// Denne del af min kode er lavet med hjælp fra Jakob fra 2. semester.
// Derfor afspejler denne del ikke mine kompetencer inden for kodning.
// Alt i HTML og CSS er lavet af mig.

document.addEventListener("DOMContentLoaded", function () {
	const toggleButton = document.querySelector(".navbar__toggle"); //vælger burger menuen
	const navList = document.querySelector(".navbar__list"); //vælger listen i burger menuen

	toggleButton.addEventListener("click", function () {
		//tilføjer click event til burger menuen
		navList.style.display = navList.style.display === "flex" ? "none" : "flex"; //hvis listen er synlig, så skjules den og omvendt
	});
});
