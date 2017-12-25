function donateController($scope, $location, $http) {
    
    $scope.formData = {};

    $scope.message = 'Donate a bike!';
    $scope.year = 2017;
    $scope.brand = '';
    $scope.goptions = [{name:'M', id:0},{name:'V',id:1}];
    $scope.formData.genderOptions = $scope.goptions[0];
    $scope.toptions = [{ name: 'Road bike', id: 0 }, { name: 'BMX', id: 1 }, { name: 'City bike', id: 2 },{ name: 'Mountain bike', id: 3 }];
    $scope.formData.bikeOptions = $scope.toptions[0];

    //Reset our formData fields
    $scope.formData.year = 2017;
    $scope.formData.brand='';
    $scope.formData.users = 0;

    $scope.addBike = function(){
        $scope.formData.type = $scope.formData.bikeOptions.name;
        $scope.formData.gender = $scope.formData.genderOptions.name;
        $http.post('/bikes', $scope.formData)
            .success(function(data) {
                $scope.bikes = data;
                $location.path('/donations');
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}

module.exports = donateController;
