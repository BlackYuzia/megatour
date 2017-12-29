angular.module('registrationService', ['ngResource']).
factory('registration', [
    '$resource',
    function($resource) {
        return $resource('http://localhost:3000/api/register', {}, {
            submit: {
                method: 'POST'
            }
        });
    }
]);