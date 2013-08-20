'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers','ui.router','ui.compat']).
  config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    //
  // For any unmatched url, send to /view1
  $urlRouterProvider.otherwise("/view1") 
  //
  // Now set up the states
  $stateProvider
    .state('view1', {
        url: "/view1",
        templateUrl: "partials/partial1.html"
    })
      .state('view1.1', {
          url: "/11",
          templateUrl: "partials/partial11.html",
          controller: function($scope){
           // $scope.items = ["A", "List", "Of", "Items"];
          }
      })
      .state('view1.2', {
          url: "/12",
          templateUrl: "partials/partial12.html",
          controller: function($scope){
            //$scope.items = ["A", "List", "Of", "Items"];
          }
      })          
    .state('view2', {
            templateUrl: "partials/partial2.html",
        	abstract: true
    })
    .state('view2.child', {
          url: "/view2",
          views: {
            "viewA": {
                templateUrl: "partials/partial21.html"
            },
            "viewB": {
                templateUrl: "partials/partial22.html"
            }
        }
      }) 
      .state('view2.child.11', {
          url: "/211",
          views: {
            "view21": {
                templateUrl: "partials/partial211.html"
            }
        },
          controller: function($scope){
            //$scope.items = ["A", "List", "Of", "Items"];
          }
      })
      .state('view2.child.12', {
          url: "/212",
          views: {
            "view21": {
                templateUrl: "partials/partial212.html"
            }
        },
          controller: function($scope){
            //$scope.items = ["A", "List", "Of", "Items"];
          }
      })
      .state('view2.child.21', {
          url: "/221",
          views: {
            "view22": {
                templateUrl: "partials/partial221.html"
            }
        },
          controller: function($scope){
            //$scope.items = ["A", "List", "Of", "Items"];
          }
      })
      .state('view2.child.22', {
          url: "/222",
          views: {
            "view22": {
                templateUrl: "partials/partial222.html"
            }
        },
          controller: function($scope){
            //$scope.items = ["A", "List", "Of", "Items"];
          }
      })
  }]);
