$(document).ready(function (){
    $(window).scroll(function() {
    console.log( window.scrollY );
    });
});

$(window).scroll(function(){
    if ($(this).scrollTop()>1){
        // animate fixed div to small size:
        $('header').stop().animate({ width: 783 },150);
    }
    else if ($(this).scrollTop()==1200){
        $('header').stop().animate({ width: 1104.797 },150);
        }
     else
        //  animate fixed div to original size
        $('header').stop().animate({ width: 1104.797 },150);
    }
    
});



$(document).ready(function() {
    $('.slideshow').cycle({
		fx: 'fade' 
	});
});