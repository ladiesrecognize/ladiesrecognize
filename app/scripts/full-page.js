'use strict';

$(document).ready(function() {

  var resetDimensions = function() {
    var winHeight = $(window).height(),
        winWidth = $(window).width();
    $('#background').css('height', winHeight).css('width', winWidth);
  };

  resetDimensions();
  $(window).on('resize', resetDimensions);

});
