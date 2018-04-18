/*jslint browser: true*/
/*global $, jQuery ,AOS*/

$(document).ready(function() {

  if(window.location.href.indexOf('#thankYou') != -1) {
    $('#thankyou').modal('show');
  }

});

(function ($) {

    "use strict";

    var $window = $(window),
        $body = $('body'),
        $siteMenu = $('.site-menu'),
        $homeSlider = $('.home-slider'),
        $testiSlider = $('.testimonial-slider'),
        $screenShotsSlider = $('.screenshots-slider'),
        $countUp = $('.count-num span'),
        $teamSlider = $('.team-slider'),
        $blogSlider = $('.recent-blog-slider');


    /*START PRELOADER JS & REFRESH AOS*/
    $window.on('load', function () {
        $('.preloader').delay(350).fadeOut('slow');
        AOS.refresh();
    });
    /*END PRELOADER JS & REFRESH AOS*/

    $(document).ready(function () {

        /*START AOS JS*/
        AOS.init({
            disable: 'mobile',
            once: true,
            duration: 600
        });
        /*END AOS JS*/

        /*START SCROLL SPY JS*/
        $body.scrollspy({
            target: '#main_menu'
        });
        /*END SCROLL SPY JS*/

        /*START MENU JS*/
        $('a.scroll-section').on('click', function (e) {
            var anchor = $(this);
            var ancAtt = $(anchor.attr('href'));
            $('html, body').stop().animate({
                scrollTop: ancAtt.offset().top
            }, 1000);
            e.preventDefault();
        });

        $window.scroll(function () {
            var currentLink = $(this);
            if ($(currentLink).scrollTop() > 0) {
                $siteMenu.addClass("sticky");
            } else {
                $siteMenu.removeClass("sticky");
            }
        });
        /*END MENU JS*/

        /*START HOME SLIDER JS*/
        if ($homeSlider.length > 0) {
            $homeSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                animateOut: 'fadeOut',
                responsiveClass: true,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                responsive: {
                    768: {
                        nav: true,
                    }
                }
            });
        }
        /*END HOME SLIDER JS*/

       
		
		/*SEND EMAIL*/

/*		
	$("#signup-form").submit(function() {
		
		//alert('send email');
		var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.sendgrid.com/v3/mail/send",
  "method": "POST",
  "headers": {
    "authorization": "Bearer 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",
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"personalizations\":[{\"to\":[{\"email\":\"sdrunga@gmail.com\",\"name\":\"Nuno Uva\"}],\"subject\":\"BitcoinPrivate - Thanks you for signing up !\"}],\"from\":{\"email\":\"btcp@btcprivate.org\",\"name\":\"BitcoinPrivate\"},\"reply_to\":{\"email\":\"btcp@btcprivate.org\",\"name\":\"BitcoinPrivate\"},\"subject\":\"BitcoinPrivate - Thanks you for signing up !\",\"template_id\":\"fa02e06b-adee-4b7a-9497-c93a83bdba64\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
	});
	*/

			
	/*END SEND EMAIL*/
		
		
		
		
		
		
		



    });


}(jQuery));
