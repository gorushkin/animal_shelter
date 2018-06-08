var link = document.querySelector(".jennifer");
var popup = document.querySelector(".modal-pet-info");
var closelink = document.querySelector(".modal-pet-info-close")

link.addEventListener("click", function(evt) {
	evt.preventDefault();
  popup.classList.add("modal-show");
});

closelink.addEventListener("click", function(evt) {
	evt.preventDefault();
  popup.classList.remove("modal-show");
});