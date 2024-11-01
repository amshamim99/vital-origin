(function ($) {
    "use strict";

    // mobile menu//
	var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	var tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.tp-submenu, .tp-mega-menu').length != 0) {
		$(tpSideMenu).find('.tp-submenu, .tp-mega-menu').parent().append
			('<button class="tp-menu-close"><i class="fi-chevron-right"></i></button>');
	}
	var sideMenuList =
		$('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		if (!($(this).parent().hasClass('active'))) {
			$(this).parent().addClass('active');
			$(this).siblings('.tp-submenu, .tp-mega-menu').slideDown();
		} else {
			$(this).siblings('.tp-submenu, .tp-mega-menu').slideUp();
			$(this).parent().removeClass('active');
		}
	});

	// offcanvas
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tp-offcanvas-close-btn").on("click", function () {
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	// // 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
    // mobile-menu-end//


    // menu-fixed-top///
    if($('.main-header, .main-header-tow').length > 0){
        var fixed_top = $(".main-header, .main-header-tow");
        $(window).on("scroll", function() {
        if ($(this).scrollTop() > 20) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
            fixed_top.removeClass("slideInUp");
            $("body").addClass("body-padding");
        }else {
            fixed_top.removeClass("menu-fixed fadeInDown");
            fixed_top.addClass("slideInUp");
            $("body").removeClass("body-padding");
        }
        });
    }

    // slide-active
    $('.slide-active').slick({
        infinite: true,
        arrows:false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // quantity-input//
    let incrementBtn = document.querySelector('.increment');
    let decrementBtn = document.querySelector('.decrement');
    let value = document.querySelector('.value');
    let totalValue = "3";
        
    incrementBtn.onclick = function(){
        totalValue++;
        // totalValue = (totalValue < 10) ? "0" + totalValue : totalValue;
        value.innerHTML = totalValue;
    }
    decrementBtn.onclick = function(){
        if( totalValue > 1){
            totalValue--;
            // totalValue = (totalValue < 10) ? "0" + totalValue : totalValue;
            value.innerHTML = totalValue;
        }
    }
    // accordion-here//
    const menuBtns = document.querySelectorAll(".menu-button");

        menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", function () {
            //----- open only one menu --------------
            const activeAccordion = document.querySelector(".menu-button.open");
            if (activeAccordion && activeAccordion !== this) {
            activeAccordion.nextElementSibling.style.height = 0;
            activeAccordion.classList.remove("open");
            }
            //------------------------------------------------

            this.classList.toggle("open");
            const content = this.nextElementSibling;
            if (this.classList.contains("open")) {
            content.style.height = content.scrollHeight + "px";
            } else {
            content.style.height = 0;
            }
        });
    });

})(jQuery);