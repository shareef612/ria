$(document).ready(function(){

    $(window).scroll(function(){
         if($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
          }
         else {
            $('.scrollup').fadeOut();
          }
        });
     $('.scrollup').click(function() {
         $("html, body").animate({ scrollTop: 0}, 600);
          return false;
       });
 });
 
 $( '#carousel' ).elastislide( {

    // orientation 'horizontal' || 'vertical'
    orientation : 'horizontal',

    // sliding speed
    speed : 500,

    // sliding easing
    easing : 'ease-in-out',

    // the minimum number of items to show.
    // when we resize the window, this will make sure minItems are always shown
    // (unless of course minItems is higher than the total number of elements)
    minItems : 3,

    // index of the current item (left most item of the carousel)
    start : 0,

    // click item callback
    onClick : function( el, position, evt ) { return false; },
    onReady : function() { return true; },
    onBeforeSlide : function() { return false; },
    onAfterSlide : function() { return false; }

    } );