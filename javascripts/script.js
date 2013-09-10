/* Author: Damien Metcalf

*/


window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
        // Hide the address bar!
        window.scrollTo(0, 1);
    }, 0);
});


skrollr.init({
    smoothScrolling: true,
    forceHeight: true
});

$(document).ready(function(){
    $('.welcome').containerHasWinSize();
    $('.intro').containerHasWinSize();
    $('.sign-up').containerHasWinSize();
});

// // Only Preform after full page has loaded
$(window).load(function() {
    // Load functions here.
});


// Window Resize
var resizeTimeout;
window.onresize = function() {
    clearTimeout(resizeTimeout);
    // handle normal resize

    $('.welcome').containerHasWinSize();
    $('.intro').containerHasWinSize();
    $('.sign-up').containerHasWinSize();

    resizeTimeout = setTimeout(function() {
        // handle after finished resize
    }, 250);
};

// var $discoverItems = $('.discover-holder').html();

// Mobile Phones
///////////////////////////////////////////////////
enquire.register("screen and (max-width: 640px)", {
    match : function() {
        // If size is less than 640px do something
    },
    unmatch : function() {
        // If size is greater than 640px do something
    }
});

// Tablets
///////////////////////////////////////////////////
enquire.register("screen and (min-width: 640px)", {
    match : function() {
      // If size is greater than 640px do something
      
    },
    unmatch : function() {
        // If size is less than 640px do something
    }
});

// Desktop
///////////////////////////////////////////////////
enquire.register("screen and (min-width: 1024px)", {
    match : function() {
        // If size is greater than 1024px do something
        $('body').addClass('desktop');

        // $('#background-images').remove();
        // $($bgImages).insertAfter('.gradient');
        // $('#background-images').removeAttr('attribute name')

        // $('.small-background-images').addClass('mid-background-images');
        // $('.mid-background-images').removeClass('small-background-images');

        // $('.mid-background-images img').css({
        //     marginLeft: '',
        //     marginTop: '',
        //     width: '',
        //     height: '',
        //     display: ''

        // });

        // $('img.resrc').attr({
        //     width: '1200',
        //     height: '1600'
        // });

        // superSwapAttribute($('img.resrc'));

        // $('#background-images').fullscreenBackground();
    },
    unmatch : function() {
        // If size is less than 1024px do something
        $('body').removeClass('desktop');

        // $('img.resrc').attr({
        //     width: '640',
        //     height: '1096'
        // });
        // $('.mid-background-images').addClass('small-background-images');
        // $('.small-background-images').removeClass('mid-background-images');

        // superSwapAttribute($('img.resrc'));
        
    }
});



// Need to use for transform: translate.
///////////////////////////////////////////////////
// if ($(".sampleClass").css("float") == "none" ){
//     // your code here
// }

// Super Swap Image Src with Data Attribute
///////////////////////////////////////////////////
function superSwapAttribute(thisEl) {
    thisEl.each(function (index) {
        var DataSrc = $(this).attr('src');
        var DataResponsive = $(this).attr('data-resrc');
        $(this).attr('src', DataResponsive);
        $(this).attr('data-resrc', DataSrc);
    });
}

// Fullscreen Images
///////////////////////////////////////////////////

// function bgSizeIsWinSize() {
//     var maxWidth = $(window).width();
//     var maxHeight = $(window).height();
//     $('.welcome, .intro, .sign-up').css({
//         width: maxWidth,
//         height: maxHeight
//     });
// }

(function( $ ){
    $.fn.containerHasWinSize = function() {
        var maxWidth = $(window).width();
        var maxHeight = $(window).height();
        var mobileMaxHeight = maxHeight + 60;

        if ($('html').hasClass('skrollr-mobile')){
            $(this).css({
                width: maxWidth,
                height: mobileMaxHeight
            });
        } else{
            $(this).css({
                width: maxWidth,
                height: maxHeight
            });
        }      
   }; 
})( jQuery );

// Toggles
///////////////////////////////////////////////////
;
