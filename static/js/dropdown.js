const dropdown = document.querySelector(".dropdown");
const links = document.querySelector("#links");

links.addEventListener("mouseenter", showDropdown);

function showDropdown() {
	dropdown.classList.toggle("display-none");
	console.log("clicked");
}
