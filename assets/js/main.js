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

    // cart-open-and close///
	$(".vt-cart-open").on("click", function () {
		$(".vt-cart-area").addClass("cart-active");
	});
	$(".vt-cart-close").on("click", function () {
		$(".vt-cart-area").removeClass("cart-active");
	});


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

    // mobile-device-slide-active//
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        mobileFirst: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 639,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: "unslick"
            },
    
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    const sl = $('.vt-item-active').slick(settings);

    $(window).on('resize', function () {
        if ($(window).width() < 1023 && !sl.hasClass('slick-initialized')) {
            $('.vt-item-active').slick(settings);
        }
    });
    // mobile-device-slide-active-end//

     // jquery-tabs//
    if($('.vt-filter-tab li a').length > 0){
        $('.vt-filter-tab li a').click(function(e){
        e.preventDefault();
    
        var t = $(this).attr('id');
    
        if(!$(this).hasClass('active')){
            $('.vt-filter-tab li a').removeClass('active');           
            $(this).addClass('active');
    
            $('.vt-ftab-body').addClass('vt-hidden');
            $('#'+ t + '-body').removeClass('vt-hidden');
        }
        });
    }
      // jquery-tabs-2//
      if($('.vt-filter-tab-2 li a').length > 0){
        $('.vt-filter-tab-2 li a').click(function(e){
        e.preventDefault();
    
        var t = $(this).attr('id');
    
        if(!$(this).hasClass('active')){
            $('.vt-filter-tab-2 li a').removeClass('active');           
            $(this).addClass('active');
    
            $('.vt-tab-body').addClass('vt-hidden');
            $('#'+ t + '-body').removeClass('vt-hidden');
        }
        });
    }

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

    // NiceSelect//
    // if($('.vt-item-select').length > 0){
    //     var options = {searchable: false, placeholder: 'Sort by'};
    //     var itemSelct = document.querySelector(".vt-item-select");
         
    //     NiceSelect.bind(itemSelct, options); 
        
    // }

    if($('.scroll-up path').length > 0){
        //Back-to-top-area-start-here
        var scrollPath = document.querySelector(".scroll-up path");
        var pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
        scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = scrollPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        var updatescroll = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var scroll = pathLength - (scroll * pathLength) / height;
            scrollPath.style.strokeDashoffset = scroll;
        };
        updatescroll();
        $(window).scroll(updatescroll);
        var offset = 50;
        var duration = 950;
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > offset) {
                $(".scroll-up").addClass("active-scroll");
            } else {
                $(".scroll-up").removeClass("active-scroll");
            }
        });
        $(".scroll-up").on("click", function (event) {
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                duration
            );
            return false;
        });
        //Back-to-top-area-end-here
    }

})(jQuery);