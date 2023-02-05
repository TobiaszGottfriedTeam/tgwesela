document.addEventListener('DOMContentLoaded', function () {
	const allNavItems = document.querySelectorAll('.nav-link')

	allNavItems.forEach(item => item.addEventListener('click', () => navbarNavAltMarkup.classList.remove('show')))
})
//Zmienne potrzebne do modala
let modal = document.querySelector('.modal')
let videoClick = document.querySelectorAll('.ti-chevron-right')
let btnClose = document.querySelector('.close')
let foty = document.querySelectorAll('.fota')
//Miejsce do wgrania potrzebnych danych do Modala
var modalImg = document.getElementById('img01')
var captionText = document.getElementById('caption')
//Parametry do sortowania
let list = document.querySelectorAll('.list')
let itemBox = document.querySelectorAll('.itemBox')
let photos = document.querySelectorAll('.photo')

//Sortowanie Zdjęć oraz Video
itemBox.forEach(item => {
	if(item.getAttribute('data-item') == 'photo'){
		item.classList.add('hide')
	}
})

for (let i = 0; i < list.length; i++) {
	list[i].addEventListener('click', function () {
		for (let j = 0; j < list.length; j++) {
			list[j].classList.remove('active')
		}

		this.classList.add('active')

		let dataFilter = this.getAttribute('data-filter')

		for (let k = 0; k < itemBox.length; k++) {
			itemBox[k].classList.remove('active')
			itemBox[k].classList.add('hide')

			if (itemBox[k].getAttribute('data-item') == dataFilter) {
				itemBox[k].classList.remove('hide')
				itemBox[k].classList.add('active')
			}
		}
	})
}


const modalConfig = {
	openImageModal: () => {
		modal.style.display = 'flex'
		modalImg.src = this.src
		captionText.innerHTML = this.alt
	},
	closeModal: () => {
		modal.style.display = 'none'
	},
	nextImage: () => {},

	setup: () => {
		foty.forEach(fota => {
			fota.addEventListener('click', modalConfig.openImageModal())
		})
		btnClose.onclick = modalConfig.closeModal();
	}
}

modalConfig.setup();