$(document).ready(function() {

    "use strict";




 $('.partner-logo').owlCarousel({
        loop:true,
        margin:10,
        items:6,
        pagination:false,
        autoPlay:true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        navigation:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
});