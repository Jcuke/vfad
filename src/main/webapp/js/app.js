var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'./views/apps.html',
            controller:'apps'
        })
        .when('/apps',{
            templateUrl:'./views/apps.html',
            controller:'apps'
        })
        .when('/cluster',{
            templateUrl:'./views/cluster.html',
            controller:'cluster'
        })
        .when('/image',{
            templateUrl:'./views/image.html',
            controller:'image'
        })
        .when('/logs',{
            templateUrl:'./views/logs.html',
            controller:'logs'
        })
        .when('/policy',{
            templateUrl:'./views/policy.html',
            controller:'policy'
        })
        .when('/repository',{
            templateUrl:'./views/repository.html',
            controller:'repository'
        })

        .when('/apps_add',{
            templateUrl:'/views/apps/add.html',
            controller:'AppsAddController'
        })
        .when('/deploy',{
            templateUrl:'/views/apps/deploy.html',
            controller:'DeployController'
        })

        .otherwise({redirectTo:'/'});
}]);