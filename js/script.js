document.addEventListener('DOMContentLoaded', function () {
	const allNavItems = document.querySelectorAll('.nav-link')

	allNavItems.forEach(item => item.addEventListener('click', () => navbarNavAltMarkup.classList.remove('show')))
})
//Zmienne potrzebne do modala
const modal = document.querySelector('.modal')
const videoClick = document.querySelectorAll('.ti-chevron-right')
const btnClose = document.querySelector('.close')
const foty = document.querySelectorAll('.fota')
const arrowLeft = document.querySelector('.leftArrow')
const arrowRight = document.querySelector('.rightArrow')
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

let currentImageIndex = 0;

const modalConfig = {
  openImageModal: ({ src, alt }, index) => {
    modal.style.display = 'flex'
    modalImg.src = src
    modalImg.alt = alt

    currentImageIndex = index
  },
  closeModal: () => {
    modal.style.display = 'none'
  },
  nextImage: () => {
    currentImageIndex++

    if (currentImageIndex >= foty.length) currentImageIndex = 0

    const { src, alt } = foty[currentImageIndex]
    modalImg.src = src
    modalImg.alt = alt
  },
  prevImage: () => {
    currentImageIndex--

    if (currentImageIndex < 0) currentImageIndex = foty.length - 1

    const { src, alt } = foty[currentImageIndex]
    modalImg.src = src
    modalImg.alt = alt
  },
}

const modalSetup = () => {
  for (let i = 0; i < foty.length; i++) {
    foty[i].addEventListener('click', () => modalConfig.openImageModal(foty[i], i))
  }

  arrowRight.addEventListener('click', () => modalConfig.nextImage())
  arrowLeft.addEventListener('click', () => modalConfig.prevImage())

  btnClose.onclick = modalConfig.closeModal
}

modalSetup()
