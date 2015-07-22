angular.module('shitu', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('intro', {
      url: '/',
      templateUrl: 'templates/intro.html'
    })

    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html"
        }
      }
    })

    .state('tabs.discover', {
      url: "/discover",
      views: {
        'discover-tab': {
          templateUrl: "templates/discover.html"
        }
      }
    })

    .state('tabs.appointments', {
      url: "/appointments",
      views: {
        'appointments-tab': {
          templateUrl: "templates/student_appointments.html"
        }
      }
    })

    .state('tabs.profile', {
      url: "/profile",
      views: {
        'profile-tab': {
          templateUrl: "templates/profile.html"
        }
      }
    });

})
