app.controller('apps', function($scope, $http) {

    /**
     * 获取应用列表
     * @param flag
     */
    $scope.requests = function(flag) {
        $http.post("requests").success(function(data){
            if (data.success) {
                $scope.records = data.content;
                if(flag){
                    MessageUtils.success('获取列表成功!');
                }
            }
        });
    };
    $scope.requests();

    /**
     * 部署应用
     * @param id
     */
    $scope.deploy = function(id) {
        //go deploy page

    };

});
