app.controller('toursController', [
    '$scope', '$http',
    function($scope, $http) {
        $scope.model = {};
        $scope.getTours = getTours;
        $scope.getHotTours = getHotTours;

        function getHotTours() {
            $http.get("/api/tours-hot")
                .then(function(response) {
                    $scope.model.tours = response.data;
                }, function(response) {
                    $scope.model.tours = "Error: " + response.data.message;
                });
        }

        function getTours() {
            $http.get("/api/tours")
                .then(function(response) {
                    $scope.model.tours = response.data;
                }, function(response) {
                    $scope.model.tours = "Error: " + response.data.message;
                });
        }
    }
]);