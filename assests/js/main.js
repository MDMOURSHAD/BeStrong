

// PRELOADER //

function load(){

var preload = document.getElementsByClassName('preload');

preload[0].style.display ="none";

}

// SWIPER SLIDE //

var swiper = new Swiper('.swiper-container', {

     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

// MOBILE MENU //

const menuIcon = document.querySelector('.hamburger-menu');
const navlist = document.querySelector('.nav-list');

menuIcon.addEventListener("click", () => {

  menuIcon.classList.toggle('change');
  navlist.classList.toggle('slide-menu');
  
});

function myFunction(){

  menuIcon.classList.remove('change');
  navlist.classList.remove('slide-menu');
  
}


$(document).ready(function(){

// STCKY MENU //

$(window).scroll(function(){

	if($(this).scrollTop() > 100){

		$('.nav').addClass('sticky');
	}

	else{
		$('.nav').removeClass('sticky');
	}

});

//  SCROLL TO TOP //

$(window).scroll(function(){

  if($(this).scrollTop() > 100){

    $('.scrolltop').fadeIn();
  }

  else{
    $('.scrolltop').fadeOut();
  }

});

});

