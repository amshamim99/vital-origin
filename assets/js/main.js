(function ($) {
    "use strict";

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