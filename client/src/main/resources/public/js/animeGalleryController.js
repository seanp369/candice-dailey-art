cdGallery.controller('animeGalleryController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'PlusUltraW.jpg',
        'Haku.jpg',
        'DabiWEB.jpg',
        'VegetaWEB.jpg',
        'Kaneki.jpg',
        'Villians_RivalsWEB.jpg',
        'DBZ.jpg',
        'yubabaposter.jpg',
        'ChronoTrigger.jpg',
        'majoras_mask.jpg',
        'SanWEB.jpg',
        'BlueSpiritWEB.jpg'
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