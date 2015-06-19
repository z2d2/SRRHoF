$(document).ready(function (){
    $(window).scroll(function() {
    console.log( window.scrollY );
    });
});

//timer for scroll animatio
var timer = setTimeout (normal);

function resetTimer() {
    $('header').addClass("scroll"); //adds smaller class to header
    console.log("timer reset!");
    clearTimeout(timer, 2000 ); // rsets the timer
    
}
function normal(){
    $('header').removeClass("scroll"); //removes small class, bringing header back to normal size
    setTimeout( normal, 2000); //ends the timer after 2000 ms 
}

//slideshow animation
$(window).scroll(resetTimer)
normal();             

$(document).ready(function() {
    $('.slideshow').cycle({
		fx: 'fade' 
	});
});

//functions for clicking heading buttons
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    



