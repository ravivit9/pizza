'use strict';

angular.module('pizzaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.formData = {};
    $scope.formData.pizzaNumbers=1;

      $scope.pizzaData = {
        "cheeseBites" : {
          "id":"cheeseBites",
          "name": "Cheese Bites",
          "image" : "cheese-bites-base.jpg",
          "currency":"£",
          "sizes": {
            "large" : [
              {inches:14, "slices": 8, "price":5.99},
              {inches:10, "slices": 6, "price":3.99}
              ]
          }
        },
        "glutenFree" : {
          "id":"glutenFree",
          "name": "Gluten Free",
          "image" : "gluten-free-base.jpg",
          "currency":"£",
          "sizes": {
            "large" : [
              {inches:14, "slices": 8, "price":5.99},
              {inches:18, "slices": 10, "price":6.99}
            ]
          }
        },
        "pan" : {
          "id":"pan",
          "name": "Thick Pan Base",
          "image" : "pan-base.jpg",
          "currency":"£",
          "sizes": {
            "large" : [
              {inches:16, "slices": 6, "price":7.99}
            ]
          }
        },
        "stuffedCrust" : {
          "id":"stuffedCrust",
          "name": "Stuffed Crust",
          "image" : "stuffed-crust-base.jpg",
          "currency":"£",
          "sizes": {
            "large" : [
              {inches:18, "slices": 12, "price":7.99}
            ]
          }
        },
        "thinItalian" : {
          "id":"thinItalian",
          "name": "Thin Italian Base",
          "image" : "thin-italian-base.jpg",
          "currency":"£",
          "sizes": {
            "large" : [
              {inches:14, "slices": 8, "price":4.99}
            ]
          }
        }
      };

    $scope.getPizzaDeatils = function () {
      $scope.totalVisible=false;
      $scope.selectedPizzaDetails = {};
      $scope.selectedPizzaDetails = $scope.formData;

      angular.forEach($scope.pizzaData, function(obj, key) {
        console.log(key + ': ' + obj);
        if ( (key == $scope.formData.pizza) ) {
          $scope.selectedPizzaDetails = obj;
        }
      });
    };

    $scope.showTotal = function() {
      $scope.totalVisible=true;
    }

  });
