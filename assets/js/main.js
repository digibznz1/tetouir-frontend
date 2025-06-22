(function () {

	"use strict";

	//===== Prealoder

	window.onload = function () {
		window.setTimeout(fadeout, 200);
	}

	function fadeout() {
		document.querySelector('.preloader').style.opacity = '0';
		document.querySelector('.preloader').style.display = 'none';
	}


	/*=====================================
	Sticky
	======================================= */
/* let lastScrollTop = 0;
let navbar = document.querySelector(".navbar-area");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (currentScroll - lastScrollTop > 10) {
    navbar.classList.add("hide-navbar");
  } else if (lastScrollTop - currentScroll > 10) {
    navbar.classList.remove("hide-navbar");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
 */

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-area");

  if (window.scrollY === 0) {
    // رجعنا إلى أعلى الصفحة
    navbar.classList.remove("hide-navbar");
  } else {
    // تم التمرير لأي موضع
    navbar.classList.add("hide-navbar");
  }
});



/**
   * Frequently Asked Questions Toggle
   */
document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
  faqItem.addEventListener('click', () => {
    const parent = faqItem.closest('.faq-item');

    // Close all other faq items
    document.querySelectorAll('.faq-item').forEach((item) => {
      if (item !== parent) {
        item.classList.remove('faq-active');
      }
    });

    // Toggle the clicked one
    parent.classList.toggle('faq-active');
  });
});


	//===== navbar-toggler
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
let toggleClicked = false;

// Toggle active class on click
navbarToggler.addEventListener("click", function () {
  toggleClicked = true;
  navbarToggler.classList.toggle("active");
});

// On scroll, auto-close navbar collapse if open (and not just clicked)
window.addEventListener("scroll", function () {
  if (!toggleClicked && navbarCollapse.classList.contains("show")) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
    bsCollapse.hide();
    navbarToggler.classList.remove("active");
  }

  // Reset flag so it doesn’t block future scrolls
  toggleClicked = false;
});

	//WOW Scroll Spy
	var wow = new WOW({
		//disabled for mobile
		mobile: false
	});
	wow.init();

	//====== counter up 
	var cu = new counterUp({
		start: 0,
		duration: 2000,
		intvalues: true,
		interval: 100,
	});
	cu.start();


})();


// ====== scroll top js
function scrollTo(element, to = 0, duration= 1000) {

	const start = element.scrollTop;
	const change = to - start;
	const increment = 20;
	let currentTime = 0;

	const animateScroll = (() => {

		currentTime += increment;

		const val = Math.easeInOutQuad(currentTime, start, change, duration);

		element.scrollTop = val;

		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	});

	animateScroll();
};

Math.easeInOutQuad = function (t, b, c, d) {

	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

document.querySelector('.scroll-top').onclick = function () {
	scrollTo(document.documentElement); 
}


 var swiper = new Swiper(".swiper-container-h", {
    speed: 1500,
	  rtl: true, // ✅ هذا يجعل المحتوى من اليمين إلى اليسار
    autoplay: {
      delay: 5000,
    },
    parallax: true,
    
    loop: true,

    on: {
      init: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
          .find('.slide-bg ')
          .attr({
            'data-swiper-parallax': 0.75 * swiper.width
          });
        }
      },
      resize: function () {
        this.update();
      }
    },

    pagination: {
      el: '.creative-showcase--slider .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
        '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
        'stroke-opacity="1" stroke-width="1px"></circle>' +
        '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
        '</svg></span>';
      },

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });


   function toggleOverlay(element) {
    const card = element.closest(".card-section");
    const overlay = card.querySelector(".overlay");
    overlay.classList.toggle("active");
  }











  /*  */


  