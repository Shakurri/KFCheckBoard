$(function(){
  var cardNum=22;
  
  $('.cardImg').on('touchend',function () {
  	if($(this).hasClass('add_dark')){
      $(this).removeClass('add_dark');
    }else{
      $(this).addClass('add_dark');
    }
  });
});