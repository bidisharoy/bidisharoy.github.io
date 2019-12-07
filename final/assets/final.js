$("path, circle").hover(function(e) {
  $('#popup').css('display','block');
  $('#popup').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#popup').css('display','none');
});

$(document).mousemove(function(e) {
  $('#popup').css('top',e.pageY-$('#popup').height()-30);
  $('#popup').css('left',e.pageX-($('#popup').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}