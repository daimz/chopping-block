/* Author: Damien Metcalf

*/


skrollr.init({
    smoothScrolling: true,
    forceHeight: false
});

var maxWidth = $(window).width();
var maxHeight = $(window).height();

$(document).ready(function(){
    $('.welcome, .intro, .sign-up').css({
        width: maxWidth,
        height: maxHeight
    });
});

// // Only Preform after full page has loaded
$(window).load(function() {
    // Load functions here.
    // imgScrollFade();
    var maxWidth = $(window).width();
    var maxHeight = $(window).height();
    
    $('.welcome, .intro, .sign-up').css({
        width: maxWidth,
        height: maxHeight
    });
});


// Window Resize
var resizeTimeout;
window.onresize = function() {
    clearTimeout(resizeTimeout);
    // handle normal resize
    var maxWidth = $(window).width();
    var maxHeight = $(window).height();

    $('.welcome, .intro, .sign-up').css({
        width: maxWidth,
        height: maxHeight
    });

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

// Toggles
///////////////////////////////////////////////////

// (function( $ ){
//    $.fn.contSizeIsWinSize = function() {
//         var maxWidth = $(window).width();
//         var maxHeight = $(window).height();

//         $(this).css({
//             width: maxWidth,
//             height: maxHeight
//         });
//    }; 
// })( jQuery );


// /*
//     Fullscreen background is a small jQuery plugin that allows you to create fullscreen background.

//     Author:     Gaya Kessler
//     Date:       04-25-2012
//     URL:        http://www.gayadesign.com
// */

// (function ($) {
//     var parentElement = "";
//     var optionsArr = {
//         selector: "img",
//         fillOnResize: true,
//         defaultCss: true
//     };

//     $.fn.fullscreenBackground = function (options) {
//         if(options) {
//             $.extend(optionsArr, options );
//         }

//         this.each(function () {
//             parentElement = this;

//             if (optionsArr.defaultCss == true) {
//                 $("html,body").css({
//                     width: "100%",
//                     height: "100%"
//                 });

//                 $(parentElement).css({
//                     height: "100%",
//                     width: "100%",
//                     overflow: "hidden",
//                     position: "fixed",
//                     top: "0px",
//                     left: "0px"
//                     // left: "0px",
//                     // zIndex: 1
//                 });
//             }

//             if (optionsArr.fillOnResize == true) {
//                 $(window).resize(function () {
//                     if ($('body.desktop').length > 0){
//                         fillBgDesktop(optionsArr.selector, parentElement);
//                     } else{
//                         fillBg(optionsArr.selector, parentElement);
//                     }
//                 });
//             }

//             if ($('body.desktop').length > 0){
//                 fillBgDesktop(optionsArr.selector, parentElement);
//             }   else{
//                 fillBg(optionsArr.selector, parentElement);
//             }
//         });
//     };

//     function fillBg(selector, parentobj) {
//         var windowHeight = $(window).height();
//         var windowWidth = $(window).width();

//         $(selector, parentobj).each(function () {
//             var imgHeight = $(this).attr("height");
//             var imgWidth = $(this).attr("width");

//             var newWidth = windowWidth;
//             var newHeight = (windowWidth / imgWidth) * imgHeight;
//             var topMargin = ((newHeight - windowHeight) / 2) * -1;
//             var leftMargin = 0;

//             if (newHeight < windowHeight) {
//                 var newWidth = (windowHeight / imgHeight) * imgWidth;
//                 var newHeight = windowHeight;
//                 var topMargin = 0;
//                 var leftMargin = ((newWidth - windowWidth) / 2) * -1;
//             }

//             $(this).css({
//                 height: newHeight + "px",
//                 width: newWidth + "px",
//                 marginLeft: leftMargin + "px",
//                 marginTop: topMargin + "px",
//                 display: "block"
//             });
//         });
//     }
//     function fillBgDesktop(selector, parentobj) {
//         var windowHeight = $(window).height();
//         var windowWidth = $(window).width();

//         $(selector, parentobj).each(function () {
//             var imgHeight = $(this).attr("data-resrc-height");
//             var imgWidth = $(this).attr("data-resrc-width");

//             var newWidth = windowWidth;
//             var newHeight = (windowWidth / imgWidth) * imgHeight;
//             var topMargin = ((newHeight - windowHeight) / 2) * -1;
//             var leftMargin = 0;

//             if (newHeight < windowHeight) {
//                 var newWidth = (windowHeight / imgHeight) * imgWidth;
//                 var newHeight = windowHeight;
//                 var topMargin = 0;
//                 var leftMargin = ((newWidth - windowWidth) / 2) * -1;
//             }

//             $(this).css({
//                 height: newHeight + "px",
//                 width: newWidth + "px",
//                 marginLeft: leftMargin + "px",
//                 marginTop: topMargin + "px",
//                 display: "block"
//             });
//         });
//     }
// })(jQuery);












