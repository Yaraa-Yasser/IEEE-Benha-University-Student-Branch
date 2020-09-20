/*global $*/
$(document).ready(function () {
    "use strict";
    // trigger owl coursel slider for team section
	$(".photos-slider").owlCarousel({
		smartSpeed: 400,
        navSpeed : 400,
		dotsSpeed : 400,
		items: 2,
        margin: 0,
        loop: true,
        autoplay: true,
		autoplayTimeout : 3500,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            }
        }
	});
});