'use strict';

angular.module('appsApp')
  .controller('MainController', function ($scope) {
    var self = $scope;
    (function ($) {
      // variables
      elementWidth = $('ul').width(),
        containerWidth = $('nav').width(),
        difference = elementWidth - containerWidth,
        finalWidth = difference * 1.5,
        element = $('ul');

      // active on click
      $('li').on('click', function () {
        $('li').removeClass('active');
        $(this).addClass('active');
      });

    })(jQuery);

  });
