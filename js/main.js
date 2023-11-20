$(function(){
  var navbar = $('#header');
  var showHeight = 100;

  $(window).scroll(function () { 
    navbar.css('opacity', $(this).scrollTop() >= showHeight ? 1 : 0);
  });
  
  $("a[href='#']").click(function () { 
    $('html,body').animate({scrollTop:0},'slow',function(){
      navbar.css('opacity',0);
    });
    return false;
  });
  $('.navi ul li').hover(function() {
    $(this).stop().animate({
      left: '10px'
    }, 300);
  }, function() {
    $(this).stop().animate({
      left: '0'
    }, 300);
  });

});