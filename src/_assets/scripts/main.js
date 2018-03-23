require('jquery');
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
});
