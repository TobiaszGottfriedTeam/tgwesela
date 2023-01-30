// Pobranie modala
var modal = document.getElementById('myModal')
//Pobranie fotek i wgranie ich do modala - (alt jako podpis)

var span = document.getElementsByClassName('close')[0]
var img = document.getElementById('myImg') // Tutaj klasę dać? czy coś?
var modalImg = document.getElementById('img01')
var captionText = document.getElementById('caption')
img.onclick = function () {
	modal.style.display = 'block'
	modalImg.src = this.src
	captionText.innerHTML = this.alt
}




// zamykanie modala jak ktos kliknie x
span.onclick = function () {
	modal.style.display = 'none'
}
