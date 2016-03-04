var application = angular.module('application-name',
    ['ui.router', 'application.controllers', 'application.services', 'application.factories', 'application.directives', 'application.config']);

application.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/main");
    $urlRouterProvider.otherwise("/main");

    $stateProvider
        .state('main', {
            abstract: false,
            url: '/main',
            templateUrl: 'views/main/main.html',
            controller: 'MainController'
        })
        .state('test2', {
            abstract: false,
            url: '/test2',
            templateUrl: 'views/test2/test2.html',
            controller: 'Test2Controller',
            resolve: {
                auth: function(LoggedUser) {
                    if (!LoggedUser.isLogged()) {
                        $stateProvider.state('test');
                    }
                }
            }
        });

}]);
    //.run(['$http', 'LoggedUser', function($http, LoggedUser) {
    //    if (LoggedUser.isLogged()) {
    //        $http.defaults.headers.common['X-Session-Header'] = LoggedUser.getToken();
    //    }
    //}]);
