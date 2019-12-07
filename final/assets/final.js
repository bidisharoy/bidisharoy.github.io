// Interactive map | inspired by https://websitebeaver.com/how-to-make-an-interactive-and-responsive-svg-map-of-us-states-capitals?source=post_page-----94a688c11bd6----------------------#making-it-responsive

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