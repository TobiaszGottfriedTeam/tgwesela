document.addEventListener('DOMContentLoaded', function () {
	const allNavItems = document.querySelectorAll('.nav-link')

	allNavItems.forEach(item => item.addEventListener('click', () => navbarNavAltMarkup.classList.remove('show')))
})
//Zmienne potrzebne do modala
const modal = document.querySelector('.modal')
const videoClick = document.querySelectorAll('.ti-chevron-right')
const btnClose = document.querySelector('.close')
const foty = document.querySelectorAll('.fota')
//Miejsce do wgrania potrzebnych danych do Modala
const modalImg = document.getElementById('img01')
const captionText = document.getElementById('caption')
//Parametry do sortowania
const list = document.querySelectorAll('.list')
const itemBox = document.querySelectorAll('.itemBox')
const photos = document.querySelectorAll('.photo')

//Sortowanie Zdjęć oraz Video
itemBox.forEach(item => {
	if (item.getAttribute('data-item') == 'photo') {
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
	openImageModal: ({ src, alt }) => {
		modal.style.display = 'flex'
		modalImg.src = src
		modalImg.alt = alt
	},
	closeModal: () => {
		modal.style.display = 'none'
	},
	nextImage: () => {},
}

const modalSetup = () => {
	foty.forEach(fota => {
		fota.addEventListener('click', () => modalConfig.openImageModal(fota))
	})
	btnClose.onclick = modalConfig.closeModal
}

modalSetup()
