require('jquery');
require('jquery-lazy');
//var bootstrap = require('bootstrap');

$(function() {
  console.log('jQuery loaded');
  
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
