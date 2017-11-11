(function ($) {
    
    // Add smooth scrolling to all links in navbar
    $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {
        
        var hash = this.hash;
        if( hash ) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 900, function(){
              window.location.hash = hash;
          });
        }

    });
       
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });   

    /**
     * Accordian 
     */
    $('.accordion-toggle').on('click',function(){
        $('body,html').animate({
            scrollTop: $(this).offset() - 270
        });
    });   


    /**Ongoing Project Slider in home page */

    $('.carousel[data-type="multi"] .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });


/**
 * Ongoing Project slider in Project
 */

var myIndex = 0,
myIndex1 = 0,
myIndex2 = 0,
myIndex3 = 0;
carousel();
carouselTwo();
carouselthree();
carouselfour();

function carousel() {
    var i;   
    var x = document.getElementsByClassName("SlidesOne");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function carouselTwo() {
    var i;   
    var x = document.getElementsByClassName("SlidesTwo");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex1++;
    if (myIndex1 > x.length) {myIndex1 = 1}    
    x[myIndex1-1].style.display = "block";  
    setTimeout(carouselTwo, 2000); // Change image every 2 seconds
}

function carouselthree() {
    var i;   
    var x = document.getElementsByClassName("Slidesthree");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2-1].style.display = "block";  
    setTimeout(carouselthree, 2000); // Change image every 2 seconds
}

function carouselfour() {
    var i;   
    var x = document.getElementsByClassName("Slidesfour");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex3++;
    if (myIndex3 > x.length) {myIndex3 = 1}    
    x[myIndex3-1].style.display = "block";  
    setTimeout(carouselfour, 2000); // Change image every 2 seconds
}

/**Completed project sliders */

     $("img").lazyload();




})(jQuery);


