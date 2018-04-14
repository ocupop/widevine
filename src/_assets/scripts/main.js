require('jquery');
require('jquery-lazy');
//var bootstrap = require('bootstrap');

$(function() {
  console.log('jQuery loaded');
  
});

//mainnav hover animation

$(function() {
  var $el, leftPos, newWidth,
      $mainNav = $("#primarynav .navbar-nav");
  
  $mainNav.append("<li id='magic-line'></li>");
  var $magicLine = $("#magic-line");
  
  $magicLine
      .width($(".active-item").width())
      .css("left", $(".active-item a").position().left)
      .data("origLeft", $magicLine.position().left)
      .data("origWidth", $magicLine.width());
      
  $("#primarynav .navbar-nav li a").hover(function() {
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

$(document).ready(function() {
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

  $('.collapsable').on('shown.bs.collapse', function () {
    window.console.log('show it');
    $('.collapse-content.show').parent().addClass('open');
  })
  

  //lazy loading example
  $("img.lazy").Lazy({
    beforeLoad: function(element) {
      window.console.log('before');
        // called before an elements gets handled
    },
    afterLoad: function(element) {
      window.console.log('after');
        // called after an element was successfully handled
    },
    onError: function(element) {
      window.console.log('error');
        // called whenever an element could not be handled
    },
    onFinishedAll: function() {
      window.console.log('finished');
        // called once all elements was handled
    },
    threshold: 0
  });
});
