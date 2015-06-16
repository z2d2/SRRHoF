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
    clearTimeout(timer, 2000 ); // resets the timer
    
}
function normal(){
    $('header').removeClass("scroll"); //removes small class, bringing header back to normal size
    setTimeout( normal, 2000); //ends the timer after 2000 ms 
}

$(window).scroll(resetTimer)
normal()             



$('.hof-image').mouseover(function(){
    $('.color-square').stop().animate({
        height: 250    
    }, 200);                        
}).mouseout(function(){
    $('.color-square').stop().animate({
        height: 0 
    }, 200)    
});




