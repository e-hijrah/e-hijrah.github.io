$(window).on('load', function () {
  $('.pKiri').addClass('show-parallax');
  $('.pKanan').addClass('show-parallax');
});

$(window).scroll(function () {
  let hScroll = $(this).scrollTop();
  console.log(hScroll);

  var partner = 200;
  var fitur = 660;
  var video = 1360;
  var developper = 1840;

  if (hScroll >= partner) {
    $('section.partner .partner-image').each(function (i) {
      setTimeout(function () {
        $('section.partner .partner-image').eq(i).addClass('show-parallax');
      }, 300 * (i + 1));
    });
  }

  if (hScroll >= fitur) {
    $('section.keunggulan .fitur').each(function (i) {
      setTimeout(function () {
        $('section.keunggulan .fitur').eq(i).addClass('show-parallax');
      }, 300 * (i + 1));
    });
  }

  if (hScroll >= video) {
    $('iframe').addClass('show-parallax');
  }

  if (hScroll >= developper) {
    $('section.pengembang .card').each(function (i) {
      setTimeout(function () {
        $('section.pengembang .card').eq(i).addClass('show-parallax');
      }, 300 * (i + 1));
    });
  }

});