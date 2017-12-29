app.controller('aboutController', [
    '$scope', '$http',
    function($scope, $http) {
        $scope.model = {};
        $scope.getTours = getTours;
        $scope.init = getTours;

        function getTours() {
            $http.get("/api/tours-hot")
                .then(function(response) {
                    $scope.model.tours = response.data;
                }, function(response) {
                    $scope.model.tours = "Error: " + response.data.message;
                });
        }
    }
]);