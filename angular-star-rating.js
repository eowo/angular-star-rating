/**
 * AngularJS star rating directive
 *
 * (c) eowo
 * http://github.com/eowo/angularjs-star-rating
 *
 * Licensed under the MIT license
 */

(function() {
  'use strict';

  angular.module('angular-star-rating', [])
    .directive('rating', function() {
      var template = '<i class="material-icons" style="outline:none" ng-repeat="star in stars track by $index" ng-click="select($index)">' +
        '{{star?"star":"star_border"}}' +
        '</i>';

      var link = function(scope, element, attrs, ngModelController) {
        var size = scope.size() || 5;
        var isReadOnly = scope.isReadOnly() || false;

        ngModelController.$setValidity('ranking', false);

        element.css({
          'color': 'rgb(253, 174, 25)',
          'cursor': isReadOnly ? 'default' : 'pointer',
          '-webkit-user-select': 'none'
        });

        function createStars(selected) {
          scope.stars = Array.apply(null, new Array(size)).map(Boolean.prototype.valueOf, false);
          scope.stars.map(function(currentValue, index, array) {
            if (index < selected)
              array[index] = true;
          });
        }

        ngModelController.$render = function() {
          createStars(ngModelController.$viewValue || 0);
        };

        scope.select = function($index) {
          if (isReadOnly)
            return;

          createStars($index + 1);
          ngModelController.$setViewValue($index + 1);
          ngModelController.$setValidity('ranking', true);
        };
      };
      return {
        require: 'ngModel',
        link: link,
        template: template,
        restrict: 'E',
        scope: {
          isReadOnly: '&readOnly',
          size: '&'
        }
      };
    });
})();
