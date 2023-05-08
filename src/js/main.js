$(document).ready(function(){
    var homeSlider = $('#home-slider');
    homeSlider.owlCarousel({
        items: 1,
        loop: true,
        dots: false
    });
    // Go to the next item
    $('.home__next').click(function() {
        homeSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.home__prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        homeSlider.trigger('prev.owl.carousel', [300]);
    })


    var feedbackSlider = $('#feedback-slider');
    feedbackSlider.owlCarousel({
        items: 3,
        dots: false,
        margin: 16
    });
    // Go to the next item
    $('.feedback__next').click(function() {
        feedbackSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.feedback__prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        feedbackSlider.trigger('prev.owl.carousel', [300]);
    })
    //инструкция выведения всплывающего окна для входа
    $('#open-login-popup').click(function(e){
        e.preventDefault()
        $('.overlay').fadeIn(1000)
        $('.login-popup').fadeIn(1000)
    })

    $('.popup-close-btn').click(function(e){
        e.preventDefault()
        $('.overlay').fadeOut(1000)
        $('.login-popup').fadeOut(1000)
        $('.reg-popup').fadeOut(1000)
    })

    $('.login-popup__reg').click(function(e){
        e.preventDefault()
        $('.reg-popup').fadeIn(1000)
        $('.login-popup').fadeOut(1000)
    })

    $('.burger-menu').click(function(e){
        $('.header-bottom').toggleClass('active')
        $('.burger-menu').toggleClass('active')
    })

    $(window).on('scroll', function(){
        if($(window).scrollTop() > 500){
            $('.to-top-btn').fadeIn()
            $('.to-top-btn').css({'display': 'flex'})
        } else {
            $('.to-top-btn').fadeOut()
        }
    })
  });

   




