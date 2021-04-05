$('.toggle-btn').click(function(){
   $(this).toggleClass('menu-show');
});

/* Owl Carousal */

$('.workslider').owlCarousel({  
   items:3,   
   smartSpeed:600,
   dots:true,
   nav:false,
   margin: 30, 
   responsive : {   
      0 : {
         items:   1,
      },     
      480 : {
         items:   2,
      },      
      992 : {
         items:   3,
      },     
  }
});

$('.testimonial-slider').owlCarousel({  
   items:1,   
   smartSpeed:600,
   dots:true,
   nav:false,
});

/* Wow */
new WOW().init();

/* Back to top buttons */
$(document).ready(function(){ 
   $(window).scroll(function(){ 
       if ($(this).scrollTop() > 100) { 
           $('#scroll').fadeIn(); 
       } else { 
           $('#scroll').fadeOut(); 
       } 
   }); 
   $('#scroll').click(function(){ 
       $("html, body").animate({ scrollTop: 0 }, 600); 
       return false; 
   }); 
});

$(window). scroll(function(){
   if ($(this). scrollTop() > 120) {
      $('header'). addClass('fixed');
   } else {
      $('header'). removeClass('fixed');
   }
})


// On scroll
$(document).ready(function () {
   $(document).on("scroll", onScroll);      
   $('a.nav-link[href^="#"]').on('click', function (e) {
       e.preventDefault();
       $(document).off("scroll");
       
       $('a.nav-link').each(function () {
           $(this).removeClass('active');
       })
       $(this).addClass('active');
     
       var target = this.hash,
           menu = target;
       $target = $(target);
       $('html, body').stop().animate({
           'scrollTop': $target.offset().top+2
       }, 400, 'swing', function () {
           window.location.hash = target;
           $(document).on("scroll", onScroll);
       });
   });
});

function onScroll(event){
   var scrollPos = $(document).scrollTop();
}
