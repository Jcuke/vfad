app.controller('DeployController', function ($scope, $http, $location) {

    $scope.appli = {"instances":"3","rackAffinity":["RACK_2"],"id":"test-0054","owners":["53@qq.com"],"requestType":"SERVICE","daemon":true};

    $scope.save = function(){
        $http.post("requests_add", $scope.appli).success(function(data){
            if (data.success) {
                $scope.content = data.content;
                MessageUtils.success('创建成功!');
            }else{
                MessageUtils.error(data.message);
            }
        }).error(function () {
            MessageUtils.error("系统错误, 保存失败");
        });
    }

});
