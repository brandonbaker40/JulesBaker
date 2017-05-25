$(document).ready(function () {
    
    $('.links-container').on('mouseenter', 'a', function () {
       $(this).animate({'top': '-5px'}, 'fast') 
    });
    
    $('.links-container').on('mouseenter', 'a', function () {
       $(this).animate({'top': '0px'}, 'fast') 
    });
    
    $('.toggle-nav, .menu a').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');
        $(console.log("body log"));
        e.preventDefault();
    });

});