testModule = angular.module('myapp',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/',{template:'这是首页页面'})
            .otherwise({redirectTo:'/'});
    }]);