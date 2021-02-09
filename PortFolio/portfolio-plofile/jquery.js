(function($){
    $('.select').find('li').click(function(){
       if($(this).hasClass('open')){
           
           $(this).removeClass('open');
           $(this).find('ul').css('display','none');
           $(this).find('li').fadeOut('slow');
           
       } else{
           
           $(this).addClass('open');
           $(this).find('ul').css('display','block');
           $(this).find('li').fadeIn('slow');
       }
                           
                           
    })
}(jQuery));