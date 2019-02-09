cdGallery.controller('watercolorGalleryController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'HarleyQuinn.jpg',
        'WW_Marvel.jpg',
        'CaptainAmericaWEB.jpg',
        'black-panther.jpg',
        'Yondu.jpg',
        'Beetlejuice.jpg',
        'PennyWise.jpg',
        'Yoda.jpg',
        'let-the-past-die.jpg',
        'mario-wars.jpg',
        'DragonFly.jpg',
        'Vanellope.jpg',
        'DBZ.jpg',
        'ChronoTrigger.jpg',
        'Kaneki.jpg',
        'Haku.jpg',
        'yubabaposter.jpg',
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