angular.module('launch').controller('indexCtrl', ($scope, $rootScope, APIService, statusConst, $location, $cookies) => {

    $rootScope.navType = 1;

    $scope.initial = () => {
        console.log("init");
    };

    $scope.test = () => {

        APIService.user.getInfo(1).then((res) => {
            console.log('state - ', statusConst.success);
            console.log('index - ', res);
        });
    };


});

