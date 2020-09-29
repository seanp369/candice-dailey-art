var cdGallery = angular.module('cdGallery', ['bootstrapLightbox', 'ngTouch', 'ngRoute', 'angular-loading-bar', 'ngAnimate']);

cdGallery.run(function ($rootScope) {
    $rootScope.views = views;
});

cdGallery.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {redirectTo: '/portfolio'})
        .when('/portfolio', {
            templateUrl : views.gallery,
            controller  : 'portfolioGallery'
        })
        .when('/about', {templateUrl : views.about})
        .when('/contact', {templateUrl : views.contact})
        .when('/404', {templateUrl : views._404})
        .otherwise({redirectTo: '/404'})

        if(window.history && window.history.pushState){
            $locationProvider.html5Mode({enabled: true, requireBase: false});
        }
});

cdGallery.config(function (LightboxProvider) {
  //LightboxProvider.fullScreenMode = true;
  LightboxProvider.templateUrl = views.image_view;
});

cdGallery.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.parentSelector = '.lightbox-image-container';
}]);