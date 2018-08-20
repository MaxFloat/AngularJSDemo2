app.controller('nameListController', function($scope){
    $scope.names = [];
    $scope.toNameList = function (nameString)
    {
        console.log(nameString)
        $scope.names = nameString.split(',');
    }
});