cdGallery.controller('watercolorPortraitsController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        'Gimli.jpg',
        'joker.jpg',
        'KhalDrogo.jpg',
        'Dany.jpg',
        'JonSnow.jpg',
        'Ygritte.jpg',
        'Tormund.jpg',
        'littlefinger.jpg',
        'Gendry.jpg',
        'Matt_Radar.jpg',
        '4thDoctor.jpg',
        '9thDoc.jpg',
        '10thdoc.jpg',
        '11th Doc.jpg',
        '12thDoc.jpg',
        '13thDOC.jpg'
    ]);

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };

    function createImagesArray(imagesNames) {
        var images = [];
        for (i = 0; i < imagesNames.length; i++) {
            images.push({
                'url': 'img/gallery2/primary/' + imagesNames[i],
                'thumbUrl': 'img/gallery2/thumb/' + imagesNames[i]
            });
        }
        return images;
    }
});