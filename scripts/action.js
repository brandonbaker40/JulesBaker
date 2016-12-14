$(document).ready(function () {
    
    $('.links-container').on('mouseenter', 'a', function () {
       $(this).animate({'top': '-5px'}, 'fast') 
    });
    
    $('.links-container').on('mouseenter', 'a', function () {
       $(this).animate({'top': '0px'}, 'fast') 
    });
    
    $('.testimonial-photo').on('mouseenter', 'img', function () {
        $(this).css({'opacity' : '0.5'});
    });
    
    $('.testimonial-photo').on('mouseleave', 'img', function () {
        $(this).css({'opacity' : '1'});
    });

});


