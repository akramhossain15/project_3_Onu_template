

$(document).ready(function(){

    // menu bg changer js
    $(window).scroll(function(){
        if($(this).scrollTop()>150){
            $(".navbar").addClass("menu-bg")
        }else {
            $(".navbar").removeClass("menu-bg")
        }
    })


    // mixitup js
    var mixer = mixitup('.portfolio')

    // counterup js
    jQuery(document).ready(function($){
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
     });

    //  scrollTop hide & show js script 
   $(window).scroll(function(){
    if ($(this).scrollTop() > 120) {
        $(".scrollTop").fadeIn(1000)
    } else {
        $(".scrollTop").fadeOut(1000)
    }
   })
})



