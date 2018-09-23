cdGallery.controller('animeStlPortfolioController', function ($scope, Lightbox) {

    $scope.images = createImagesArray([
        {file: 'YourTrueName.jpg', gallery: 'gallery'},
        {file: 'ChronoTrigger.jpg', gallery: 'gallery'},
        {file: 'Kingdomhearts.jpg', gallery: 'gallery'},
        {file: 'OcarinaOfTime.jpg', gallery: 'gallery'},
        {file: 'majoras_mask.jpg', gallery: 'gallery'},
        {file: 'SanWEB.jpg', gallery: 'gallery'},
        {file: 'BlueSpiritWEB.jpg', gallery: 'gallery'},
        {file: 'Haku.jpg', gallery: 'gallery'},
        {file: 'mario-wars.jpg', gallery: 'gallery'}
    ]);

    function createImagesArray(imageDetails) {
        var images = [];
        for (i = 0; i < imageDetails.length; i++) {
            images.push({'url': 'img/' + imageDetails[i].gallery + '/primary/' + imageDetails[i].file});
        }
        return images;
    }
});