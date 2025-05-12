// ----------------------------//
//  Script til burger menuen   //
// ---------------------------//
// Jeg har fået hjælp til at lave denne kode af Jacob fra 2. semester!
// Koden er lavet til at fungere med HTML og CSS, som jeg selv har lavet.

document.addEventListener("DOMContentLoaded", function () {
	const toggleButton = document.querySelector(".navbar__toggle"); //vælger burger menuen
	const navList = document.querySelector(".navbar__list"); //vælger listen i burger menuen

	toggleButton.addEventListener("click", function () {
		//tilføjer click event til burger menuen
		navList.style.display = navList.style.display === "flex" ? "none" : "flex"; //hvis listen er synlig, så skjules den og omvendt
	});
});
