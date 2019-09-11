cdGallery.controller('watercolorGouacheGalleryController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'MiseryLovesCompanyWEB.jpg',
        'DarkReyWEB.jpg',
        'HarleyQuinn.jpg',
        'WW_Marvel.jpg',
        'CaptainAmericaWEB.jpg',
        'JonSnowWEB.jpg',
        'black-panther.jpg',
        'Yondu.jpg',
        'Beetlejuice.jpg',
        'PennyWise.jpg',
        'Yoda.jpg',
        'let-the-past-die.jpg',
        'DragonFly.jpg'
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