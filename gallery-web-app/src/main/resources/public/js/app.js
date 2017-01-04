var cdGallery = angular.module('cdGallery', ['bootstrapLightbox', 'ngTouch', 'ngRoute']);

cdGallery.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {redirectTo: '/home'})
        .when('/home', {templateUrl : 'html/home.html'})
        .when('/gallery', {
            templateUrl : 'html/gallery.html',
            controller  : 'galleryController'
        })
        .when('/about', {templateUrl : 'html/about.html'})
        .when('/contact', {templateUrl : 'html/contact.html'})
        .when('/404', {templateUrl : 'html/404.html'})
        .otherwise({redirectTo: '/404'})

        if(window.history && window.history.pushState){
            $locationProvider.html5Mode({enabled: true, requireBase: false});
        }
});