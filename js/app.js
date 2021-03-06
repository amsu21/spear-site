/* Template Name: Amsu Warner - Responsive Landing Template
   Author: Shreethemes
   Version: 1.2.0
   Updated: June 2021
   File Description: Main JS file of the template
*/

! function($) {
    "use strict";  
    // Back to top
    $('.back-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });  
    //Slider
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            },
            
            {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                }
            }
        ]
    });
}(jQuery)