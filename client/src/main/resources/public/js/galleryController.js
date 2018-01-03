cdGallery.controller('galleryController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'let-the-past-die.jpg',
        'hux.jpg',
        'Degobah.jpg',
        'satyr.jpg',
        'mario-wars.jpg',
        'DragonFly.jpg',
        'assaj.jpg',
        'majoras_mask.jpg',
        'zelda_botw.jpg',
        'wonder-v-cheetah.jpg',
        'kylo_helm.jpg',
        'korl.jpg',
        'WhiteRider.jpg',
        'RogueOne.jpg',
        'pheonix.jpg',
        'Cliffside.jpg',
        'Powergirl.jpg',
        'ChuChu.jpg',
        'WonderWoman.jpg',
        'Fett.jpg',
        'Line_Up.jpg',
        'Mr.French.jpg',
        'Mr.French2.jpg',
        'cersiePortrait.jpg',
        'Vanellope.jpg',
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