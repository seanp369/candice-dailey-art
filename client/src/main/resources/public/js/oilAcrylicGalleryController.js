cdGallery.controller('oilAcrylicGalleryController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'mithrandir.jpg',
        'ren.jpg',
        'MaulWWEB.jpg',
        'hux.jpg',
        'Siths.jpg',
        'Degobah.jpg',
        'OldBenWEB.jpg',
        'pheonix.jpg',
        'korl.jpg',
        'tiger.jpg',
        'Zebra.jpg'
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