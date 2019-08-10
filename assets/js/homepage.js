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

//rotate those testimonials
var arr = ["testimonial0", "testimonial1", "testimonial2", "testimonial3", "testimonial4", "testimonial5", "testimonial6", "testimonial7", "testimonial8", "testimonial9"],
i = Math.floor(Math.random() * arr.length)+1;

$('.buttom-wrap'+ i).show();

//slowly fade the testimonial in and out
setInterval (function () {
$(".bottom-wrap" + i).fadeOut("slow");
i = (i+1)%(arr.length);
$(".bottom-wrap" + i).delay(1000).fadeIn("slow");
}, 12000);
