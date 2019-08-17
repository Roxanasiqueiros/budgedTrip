$(document).ready(function(){
    console.log("test");
    $('.slide-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: false,
        fade: true,
        speed: 1000
      });
});

