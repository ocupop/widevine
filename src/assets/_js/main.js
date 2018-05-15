import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

//mainnav hover animation
function magicNav() {
  $(".magicnav").each(function() {
    var $el, leftPos, newWidth
    var $magicLine = $(this).find(".magic-line:first");
    var $activeItem = $(this).find(".active-item a");
    var $activeItemLeft = $activeItem.find(".nav-link").position();

    $magicLine
      .width($activeItem.width())
      .css({
        left: $activeItem.position().left,
        opacity: 1
      })
      .data("origLeft", $activeItem.position().left)
      .data("origWidth", $activeItem.width());

    $(this).find("li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
  });
}



$(document).ready(function() {
  magicNav();

  //initiate tab collapse (if in use on this project)
  $('#my-tab').tabCollapse();

  //scroll anchors
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  //Navbar toggler animation
  $('.navbar-toggler').on('click', function(){
    $('.navbar-toggler').toggleClass('active');
  });


  //add class to collapsable parent when clicked
  $('.collapsable').on('shown.bs.collapse', function () {
    $('.collapse-content.show').parent().addClass('open');
  });

  //close mobilenav if subnav drawer item clicked
  $('.secondary-collapse .nav-link').on('click', function(){
    $('#mobilenav').collapse('hide');
  });

  if($('.count')){
    $('.count').each(function (index) {
      var dur = 1000 * (index + 1);

      $(this).prop('Counter', 0).animate({
          Counter: $(this).data('value')
        }, {
        duration: dur,
        easing: 'swing',
        step: function (now) {
          if($(this).hasClass('decimal-1')){
            $(this).text(this.Counter.toFixed(1));
          }else {
            $(this).text(this.Counter.toFixed(0));
          }                
        }
      });
    });
  }
});

$(window).resize(function(){
  magicNav();
});
