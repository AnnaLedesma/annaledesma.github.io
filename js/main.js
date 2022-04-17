// Menu
const menu = document.querySelector('#menu');
const menuBar = document.querySelector('#navbar__menu');

menuBar.addEventListener('click', function() {
	menu.classList.toggle('menu__toggle');
	menuBar.classList.toggle('responsive__none');
})

menu.addEventListener('click', function() {
	menu.classList.remove('menu__toggle');
	menuBar.classList.remove('responsive__none');
})

// Scroll
let animation = document.querySelectorAll('.animation');
	
function animationScroll() {
	let scrollTop = document.documentElement.scrollTop;

	for (let i = 0; i < animation.length; i++) {
		let heightAnimation = animation[i].offsetTop;
		if (heightAnimation - 500 < scrollTop) {
			animation[i].style.opacity = 1;
			if (i % 2 == 0) {
				animation[i].classList.add('animationLeft');
			} else {
				animation[i].classList.add('animationRight');
			}
		}
	}
}

window.addEventListener('scroll', animationScroll);

// scroll skills
let animationItems = document.querySelectorAll('.animationItems');
	
function animationScrollItems() {
	let scrollTop = document.documentElement.scrollTop;

	for (let i = 0; i < animationItems.length; i++) {
		let heightAnimation = animationItems[i].offsetTop;
		if (heightAnimation - 500 < scrollTop) {
			animationItems[i].style.opacity = 1;
			animationItems[i].classList.add('animationItemsRight');
			animationItems[i].style.transitionDelay = `${i * 0.17}s`;;
		}
	}
}

window.addEventListener('scroll', animationScrollItems);


// carousel
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [{
        
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 855,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
      }
		]
	});
});