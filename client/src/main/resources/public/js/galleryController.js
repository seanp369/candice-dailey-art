cdGallery.controller('galleryController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'mithrandir.jpg',
        'ren.jpg',
        'MaulWWEB.jpg',
        'hux.jpg',
        'Degobah.jpg',
        'CaptainAmericaWEB.jpg',
        'black-panther.jpg',
        'Yondu.jpg',
        'let-the-past-die.jpg',
        'AhsokaWEB.jpg',
        'OldBenWEB.jpg',
        'majoras_mask.jpg',
        'SanWEB.jpg',
        'BlueSpiritWEB.jpg',
        'pheonix.jpg',
        'RogueOne.jpg',
        'mario-wars.jpg',
        'DragonFly.jpg',
        'zelda_botw.jpg',
        'korl.jpg',
        'wonder-v-cheetah.jpg',
        'Fett.jpg',
        'assaj.jpg',
        'satyr.jpg',
        'Vanellope.jpg',
        'WhiteRider.jpg',
        'Cliffside.jpg',
        'cersiePortrait.jpg',
        'WonderWoman.jpg',
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