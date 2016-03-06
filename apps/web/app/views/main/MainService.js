angular.module('application.services').
    service('MainService', ['$http', 'SERVER_NAME', function($http, SERVER_NAME){

        this.getSample = function(onSuccess, onError) {
            $http.get(SERVER_NAME + '/v2/553675cf57bdefaa16379a4d')
	            .success(function(data) {
	            	onSuccess(data)
	            }).error(function(data){
	            	onError(data)
	            });
        };

    }]).
    service('K8sService', ['$http', 'KUBE_API_SERVER', function($http, KUBE_API_SERVER){

        this.getServices = function(onSuccess, onError) {
            $http.get(KUBE_API_SERVER + 'GET /api/v1/services')
                .success(function(data) {
                    onSuccess(data)
                }).error(function(data){
                    onError(data)
                });
        };

    }]);

