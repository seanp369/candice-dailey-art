cdGallery.controller('portfolioController3', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        {
            file: 'MaulWWEB.jpg',
            gallery: 'gallery'
        }, {
            file: 'hux.jpg',
            gallery: 'gallery'
        }, {
            file: 'let-the-past-die.jpg',
            gallery: 'gallery'
        }, {
            file: 'Degobah.jpg',
            gallery: 'gallery'
        }, {
            file: 'AhsokaWEB.jpg',
            gallery: 'gallery'
        }, {
            file: 'IndianaJonesWEB.jpg',
            gallery: 'gallery2'
        }
    ]);

    function createImagesArray(imageDetails) {
        var images = [];
        for (i = 0; i < imageDetails.length; i++) {
            images.push({'url': 'img/' + imageDetails[i].gallery + '/primary/' + imageDetails[i].file});
        }
        return images;
    }
});