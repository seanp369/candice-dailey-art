cdGallery.controller('portfolioGallery', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'ThePullToTheLight.jpg',
        'DarkVisions.jpg',
        'Firefly.jpg',
        'OMG3.jpg',
        'DuskRider.jpg',
        'OMG-1.jpg',
        'OMG-2.jpg',
        'SoulKeeper.jpg',
        'Hive.jpg',
        'Eurydice.jpg',
        'Sera.jpg',
        'Bard.jpg',
        'SnakeDemon.jpg',
        'Angel.jpg',
        'Misery.jpg',
        'Pheonix.jpg',
    ]);

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };

    function createImagesArray(imagesNames) {
        var images = [];
        for (i = 0; i < imagesNames.length; i++) {
            images.push({
                'url': 'img/gallery/primary/' + imagesNames[i],
                'thumbUrl': 'img/gallery/thumb/' + imagesNames[i]
            });
        }
        return images;
    }
});