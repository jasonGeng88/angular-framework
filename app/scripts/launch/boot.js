var launchApp = angular
    .module('launch', [
        'ngCookies','vinciApp',
        'ui.router'
    ], ($httpProvider) => {
        // Use x-www-form-urlencoded Content-Type
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function(data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
    })
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider

            .state("index", {
                url: '/index',

                controller: function($scope, $rootScope) {
                    $rootScope.notShowIndex = false;
                }
            })
            .state("index2", {
                url: '',
                controller: function($scope, $rootScope) {
                    $rootScope.notShowIndex = false;
                }
            });

        $urlRouterProvider


            //合同地址映射（经过几个sprint之后，可以移除）
            .when("/client/project/:projectId/agreement",function($location){
                location.href = "contract.html#"+$location.path();
            })
            .when("/client/project/:projectId/coreagreement",function($location){
                location.href = "contract.html#"+$location.path();
            })
            .when("/project/agreement/preview/:projectId",function($location){
                location.href = "contract.html#"+$location.path();
            })
            .when("/designer/agreement/:id",function($location){
                location.href = "contract.html#"+$location.path();
            })
            .when("/designer/corecontract/:id",function($location){
                location.href = "contract.html#"+$location.path();
            })
            .when("/designer/corecontract/preview/:id",function($location){
                location.href = "contract.html#"+$location.path();
            })

            //client.html的映射
            .when(/\/client\//i, function($state,$location){
                location.href = "client.html#"+$location.path();
            })
            //designer.html的映射
            .when(/\/designer\//i, function($state,$location){
                location.href = "designer.html#"+$location.path();
            })



            .when('/', '/index')
            .otherwise('/index');

    })

    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://static.tezign.com/**',
            'http://192.168.199.161:8019/**',
            'http://127.0.0.1/**'
        ]);
    })
   .config(function($httpProvider) {
       //mock conflict
       // $httpProvider.interceptors.push('commonInterceptor');
    });