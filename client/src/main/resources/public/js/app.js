var cdGallery = angular.module('cdGallery', ['bootstrapLightbox', 'ngTouch', 'ngRoute', 'angular-loading-bar', 'ngAnimate']);

cdGallery.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {redirectTo: '/home'})
        .when('/home', {templateUrl : 'html/home.html'})
        .when('/oil-acrylic', {
            templateUrl : 'html/gallery.html',
            controller  : 'oilAcrylicGalleryController'
        })
        .when('/watercolor-gouache', {
            templateUrl : 'html/gallery.html',
            controller  : 'watercolorGouacheGalleryController'
        })
        .when('/anime', {
            templateUrl : 'html/gallery.html',
            controller  : 'animeGalleryController'
        })
        .when('/portfolio/mayday-games', {
            templateUrl : 'html/portfolio.html',
            controller  : 'portfolioController'
        })
        .when('/portfolio/plaid-hat-games', {
            templateUrl : 'html/portfolio.html',
            controller  : 'portfolioController2'
        })
        .when('/portfolio/acme-archives', {
            templateUrl : 'html/portfolio.html',
            controller  : 'portfolioController3'
        })
        .when('/portfolio/anime-stl', {
            templateUrl : 'html/portfolio.html',
            controller  : 'animeStlPortfolioController'
        })
        .when('/about', {templateUrl : 'html/about.html'})
        .when('/contact', {templateUrl : 'html/contact.html'})
        .when('/404', {templateUrl : 'html/404.html'})
        .otherwise({redirectTo: '/404'})

        if(window.history && window.history.pushState){
            $locationProvider.html5Mode({enabled: true, requireBase: false});
        }
});

cdGallery.config(function (LightboxProvider) {
  //LightboxProvider.fullScreenMode = true;
  LightboxProvider.templateUrl = 'html/image-view.html';
});

cdGallery.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.parentSelector = '.lightbox-image-container';
}]);