$(document).ready(function () {
    
//    $('form').submit(function(){
//        alert("Success!");
//    });
    
    $('.toggle-nav, .menu a').toggleClass('active');
    
    $('.links-container').on('mouseenter', 'a', function () {
       $(this).animate({'top': '-5px'}, 'fast') 
    });
    
    $('.links-container').on('mouseenter', 'a', function () {
       $(this).animate({'top': '0px'}, 'fast') 
    });
    
    $('.menu ul').toggleClass('active');
    
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');
        e.preventDefault();
    });
    

});

