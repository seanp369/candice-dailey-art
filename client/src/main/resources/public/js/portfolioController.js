cdGallery.controller('portfolioController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'RogueOne.jpg',
        'Cliffside.jpg',
        'cersiePortrait.jpg',
        'dragon-fly.jpg',
        'majoras_mask.jpg',
        'assaj.jpg',
        'pheonix.jpg'
    ]);

    function createImagesArray(imagesNames) {
        var images = [];
        for (i = 0; i < imagesNames.length; i++) {
            images.push({'url': 'img/gallery/primary/' + imagesNames[i]});
        }
        return images;
    }
});