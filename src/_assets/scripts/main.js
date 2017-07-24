requirejs(["hello"], function(util) {
    //This function is called when scripts/hello.js is loaded.
    //If hello.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "hello".
});

$(document).ready(function() {
  // Doc Ready
  // check for url parameters
  // if thanks = true then display thank you message
  // in 30 sec fade out
  var params = window.location.search.substring(1);
  if (params.indexOf('thanks') > -1 ) {
    $('#message').removeClass('hide');
    setTimeout(function(){ 
      $('#message').fadeOut('slow');
    }, 4000);
  }
});