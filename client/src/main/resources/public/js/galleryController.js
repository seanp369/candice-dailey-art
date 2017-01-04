cdGallery.controller('galleryController', function ($scope, Lightbox) {

    $scope.images = [
    {
        'url': 'img/gallery/primary/cersiePortrait.jpg',
        'thumbUrl': 'img/gallery/thumb/cersiePortrait.jpg'
    },
    {
        'url': 'img/gallery/primary/ChuChu.jpg',
        'thumbUrl': 'img/gallery/thumb/ChuChu.jpg'
    },
    {
       'url': 'img/gallery/primary/Cliffside.jpg',
       'thumbUrl': 'img/gallery/thumb/Cliffside.jpg'
     },
     {
       'url': 'img/gallery/primary/Fett.jpg',
       'thumbUrl': 'img/gallery/thumb/Fett.jpg'
     },
     {
       'url': 'img/gallery/primary/Line_Up.jpg',
       'thumbUrl': 'img/gallery/thumb/Line_Up.jpg'
     },
     {
       'url': 'img/gallery/primary/Luke.jpg',
       'thumbUrl': 'img/gallery/thumb/Luke.jpg'
     },
     {
       'url': 'img/gallery/primary/Mr.French.jpg',
       'thumbUrl': 'img/gallery/thumb/Mr.French.jpg'
     },
     {
       'url': 'img/gallery/primary/Mr.French2.jpg',
       'thumbUrl': 'img/gallery/thumb/Mr.French2.jpg'
     },
     {
       'url': 'img/gallery/primary/pheonix.jpg',
       'thumbUrl': 'img/gallery/thumb/pheonix.jpg'
     },
     {
       'url': 'img/gallery/primary/tiger.jpg',
       'thumbUrl': 'img/gallery/thumb/tiger.jpg'
     },
     {
       'url': 'img/gallery/primary/Vanellope.jpg',
       'thumbUrl': 'img/gallery/thumb/Vanellope.jpg'
     },
     {
       'url': 'img/gallery/primary/Zebra.jpg',
       'thumbUrl': 'img/gallery/thumb/Zebra.jpg'
     },
    ];

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };
});

cdGallery.config(function (LightboxProvider) {
  LightboxProvider.fullScreenMode = true;
});