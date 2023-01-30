document.addEventListener('DOMContentLoaded', function () {
	const allNavItems = document.querySelectorAll('.nav-link')

	allNavItems.forEach(item => item.addEventListener('click', () => navbarNavAltMarkup.classList.remove('show')))
})

let modal = document.querySelector('.modal')
let videoClick = document.querySelectorAll('.ti-chevron-right')
let closeBtn = document.querySelector('.close')
let list = document.querySelectorAll('.list')
let itemBox = document.querySelectorAll('.itemBox')
let photos = document.querySelectorAll('.Photo')

for (let z = 0; z < itemBox.length; z++) {
	if (itemBox[z].getAttribute('data-item') == 'photo') {
		itemBox[z].classList.add('hide')
	}
}
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
//MODAL Video
for (let g = 0; g < videoClick.length; g++) {
	videoClick[g].addEventListener('click',function(){
		modal.classList.add('active')
	})
	closeBtn.addEventListener('click', function () {
		modal.classList.remove('active')
	})
}

photos.forEach(photo => {
	photo.addEventListener('click', function () {
		modal.classList.add('active')
	})
	closeBtn.addEventListener('click', function () {
		modal.classList.remove('active')
	})
})