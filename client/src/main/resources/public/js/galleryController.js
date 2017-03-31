cdGallery.controller('galleryController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'WhiteRider.jpg',
        'RogueOne.jpg',
        'Cliffside.jpg',
        'Powergirl.jpg',
        'pheonix.jpg',
        'ChuChu.jpg',
        'WonderWoman.jpg',
        'Fett.jpg',
        'Line_Up.jpg',
        'Luke.jpg',
        'Mr.French.jpg',
        'Mr.French2.jpg',
        'cersiePortrait.jpg',
        'tiger.jpg',
        'Vanellope.jpg',
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