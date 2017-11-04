cdGallery.controller('portfolioController2', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'DragonFly.jpg',
        'majoras_mask.jpg',
        'hux.jpg',
        'Vanellope.jpg',
        'pheonix.jpg',
        'Degobah.jpg',
        'Fett.jpg',
        'korl.jpg'
    ]);

    function createImagesArray(imagesNames) {
        var images = [];
        for (i = 0; i < imagesNames.length; i++) {
            images.push({'url': 'img/gallery/primary/' + imagesNames[i]});
        }
        return images;
    }
});