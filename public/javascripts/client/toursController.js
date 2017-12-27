app.controller('toursController', [
    '$scope', '$http',
    function($scope, $http) {
        $scope.model = {};
        $scope.getTours = getTours;

        function getTours() {
            $http.get("/api/tours")
                .then(function(response) {
                    $scope.model.tours = response.data;
                }, function(response) {
                    $scope.model.tours = "Error: " + response.data.message;
                });
        }
        getTours();
    }
]);