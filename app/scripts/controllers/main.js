'use strict';

angular.module('pizzaApp')
  .controller('MainCtrl', function ($scope) {
      $scope.pizza = {
        "cheeseBites" : {
          "image" : "cheese-bites-base.jpg",
          "sizes": {
            "large" : [
              {inches:14, "slices": 8}
              ]
          }
        }
      }


  });
