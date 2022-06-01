cdGallery.controller('portfolioGallery', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        {'file': 'DarkAspirations.jpg', 'caption': '© & TM 2022 Lucasfilm LTD. Under License With Acme Archives Ltd. All Rights Reserved.'},
        {'file': 'Geonosis.jpg', 'caption': '© & TM 2022 Lucasfilm LTD. Under License With Acme Archives Ltd. All Rights Reserved.'},
        {'file': 'Betty-Veronica.jpg'},
        {'file': 'Life Stolen.jpg'},
        {'file': 'AnUnderstanding.jpg', 'caption': '© & TM 2021 Lucasfilm LTD. Under License With Acme Archives Ltd. All Rights Reserved.'},
        {'file': 'ThePullToTheLight.jpg', 'caption': '© & TM 2021 Lucasfilm LTD. Under License With Acme Archives Ltd. All Rights Reserved.'},
        {'file': 'DarkVisions.jpg', 'caption': '© & TM 2020 Lucasfilm LTD. Under License With Acme Archives Ltd. All Rights Reserved.'},
        {'file': 'Ferryman.jpg'},
        {'file': 'OMG3.jpg'},
        {'file': 'DuskRider.jpg'},
        {'file': 'OMG-1.jpg'},
        {'file': 'OMG-2.jpg'},
        {'file': 'SoulKeeper.jpg'},
        {'file': 'Hive.jpg'},
        {'file': 'Eurydice.jpg'},
        {'file': 'Firefly.jpg', 'caption': 'FIREFLY TM & © 2021 Twentieth Century Fox Film Corporation. All Rights Reserved.'},
        {'file': 'Sera.jpg'},
        {'file': 'Bard.jpg'},
        {'file': 'SnakeDemon.jpg'},
//        {'file': 'Angel.jpg'},
        {'file': 'Misery.jpg'},
        {'file': 'Pheonix.jpg'}
    ]);

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };

    function createImagesArray(images) {
        var result = [];
        for (i = 0; i < images.length; i++) {
            result.push({
                'url': 'img/gallery/primary/' + images[i].file,
                'thumbUrl': 'img/gallery/thumb/' + images[i].file,
                'caption': images[i].caption
            });
        }
        return result;
    }
});