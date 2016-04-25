// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var myApp = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'leaflet-directive'])

myApp.
   //camel cased directive name
   //in your HTML, this will be named as bars-chart
   directive('barsChart', function ($parse) {
     //explicitly creating a directive definition variable
     //this may look verbose but is good for clarification purposes
     //in real life you'd want to simply return the object {...}
     var directiveDefinitionObject = {
         //We restrict its use to an element
         //as usually  <bars-chart> is semantically
         //more understandable
         restrict: 'E',
         //this is important,
         //we don't want to overwrite our directive declaration
         //in the HTML mark-up
         replace: false,
         //our data source would be an array
         //passed thru chart-data attribute
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {
           //in D3, any selection[0] contains the group
           //selection[0][0] is the DOM node
           //but we won't need that this time
           var chart = d3.select(element[0]);
           //to our original directive markup bars-chart
           //we add a div with out chart stling and bind each
           //data entry to the chart
            chart.append("div").attr("class", "chart")
             .selectAll('div')
             .data(scope.data).enter().append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d + "%"; })
             .text(function(d) { return d + "%"; });
           //a little of magic: setting it's width based
           //on the data value (d) 
           //and text all with a smooth transition
         } 
      };
      return directiveDefinitionObject;
   });

function Ctrl($scope) {
    $scope.myData = [10,20,30,40,60, 80, 20, 50];
}

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

myApp.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.launch', {
    url: '/launch',
    views: {
      'tab-launch': {
        templateUrl: 'templates/tab-launch.html',
        controller: 'LaunchCtrl'
      }
    }
  })


  .state('tab.drone', {
    url: '/drone',
    views: {
      'tab-drone': {
        templateUrl: 'templates/tab-drone.html',
        controller: 'DroneCtrl'
      }
    }
  })

  // .state('tab.map', {
  //   url: '/map',
  //   views: {
  //     'tab-map': {
  //       templateUrl: 'templates/tab-map.html',
  //       controller: 'MapCtrl'
  //     }
  //   }
  // });
  // testing new Map

  // uncomment above and comment out below to revert, or go to previous version in commit history
  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/tab-map-2.html',
        controller: 'MapCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/map');

});
