var handleWindowSize = function () {
                
                if ($(window).width() > 640 && $(window).width() < 1024) {
                    $('.column.third').removeClass('third').addClass('half');
                    $('.three').hide();
                    $('.about').removeClass('third').addClass('half');
                    $('.map').hide();
                    $('.full-width-map').show();
                    
                } else if ($(window).width() > 1023) {
                    $('.column.half').removeClass('half').addClass('third');
                    $('.three').show();
                    $('.about').removeClass('half').addClass('third');
                    $('.map').show();
                    $('.full-width-map').hide();
                
                } else if ($(window).width() < 641) {
                    $('.three').show();
                    $('.map').show();
                    $('.full-width-map').hide();
                } 
            }

$(document).ready(function () {
    
    handleWindowSize();
    
    $(window).resize(function () {
        
        handleWindowSize();  

    });   

})