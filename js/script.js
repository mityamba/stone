window.addEventListener('scroll', function () {
	const logoBlock = document.querySelector('.header__logo-body')
	const btnBlock = document.querySelector('.main__block')
	const menuBlack = document.querySelector('#menuBtn')
	const menuBlockBl = document.querySelector('.header__menu')
	const header = document.querySelector('header')
	const currentScroll = window.pageYOffset
	logoBlock.classList.toggle('sticky', currentScroll > 0);
	header.classList.toggle('sticky', currentScroll > 0);
	btnBlock.classList.toggle('active', currentScroll > 0);
	logoBlock.classList.toggle('black', currentScroll > 980)
	menuBlack.classList.toggle('black', currentScroll > 980)
	menuBlockBl.classList.toggle('black', currentScroll > 980)
})

const menu = document.querySelector('.navigator');
const menuBlock = document.querySelector('.header__menu');

document.querySelector('#menuBtn').onclick = function () {
	menu.classList.add('active');
	menuBlock.classList.add('active');
}
document.querySelector('#close').onclick = function () {
	menu.classList.remove('active');
	menuBlock.classList.remove('active');
}

const btnListOne = document.querySelector('#list-btnOne'),
	btnListTwo = document.querySelector('#list-btnTwo'),
	btnListThree = document.querySelector('#list-btnThree'),
	btnListFour = document.querySelector('#list-btnFour'),
	btnListFive = document.querySelector('#list-btnFive'),
	btnListSix = document.querySelector('#list-btnSix');
const btnListAll = [btnListOne, btnListTwo, btnListThree, btnListFour, btnListFive, btnListSix];

btnListAll[0].onclick = function () {
	menu.classList.remove('active');
	menuBlock.classList.remove('active');
}
btnListAll[1].onclick = function () {
	menu.classList.remove('active');
	menuBlock.classList.remove('active');
}

btnListAll[2].onclick = function () {
	menu.classList.remove('active');
	menuBlock.classList.remove('active');
}

btnListAll[3].onclick = function () {
	menu.classList.remove('active');
	menuBlock.classList.remove('active');
}

btnListAll[4].onclick = function () {
	menu.classList.remove('active');
	menuBlock.classList.remove('active');
}
btnListAll[5].onclick = function () {
	menu.classList.remove('active');
	menuBlock.classList.remove('active');
}

const mainTextOne = document.querySelector('.main__titleOne'),
	mainTextTwo = document.querySelector('.main__titleTwo'),
	mainTextThree = document.querySelector('.main__titleThree');

window.addEventListener('scroll', function () {
	let value = window.scrollY;
	mainTextOne.style.left = value * 1 + 'px';
	mainTextTwo.style.right = value * 1 + 'px';
	mainTextThree.style.left = value * 1 + 'px';
})

window.onload = function () {
	const mainText = document.querySelector('.main__text')
	mainText.classList.toggle('onloadActive');
}

const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal__bg');

document.querySelector('.contactus__block-btn').onclick = function () {
	modal.classList.add('active');
}
modalBg.onclick = function () {
	modal.classList.remove('active');
}

const cursor = document.querySelector('#cursor'),
	aura = document.querySelector('#aura'),
	links = document.querySelector('a');

mouseX = 0, mouseY = 0, posX = 0, posY = 0;

function mouseCoords(e) {

	mouseX = e.pageX
	mouseY = e.pageY

}

gsap.to({}, .01, {
	repeat: -1,

	onRepeat: () => {
		posX += (mouseX - posX) / 5
		posY += (mouseX - posX) / 5

		gsap.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY,
			}
		})
		gsap.set(aura, {
			css: {
				left: posX - 24,
				top: posY - 24
			}
		})
	}
})
