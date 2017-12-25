function donationsController($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Look for a bike!';
    
    $http.get('/bikes')
        .success(function(data) {
            $scope.bikes = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.incrementUsers= function(id){
          $http.put('/bikes/' + id + '/users')
            .success(function(data) {
                $scope.bikes = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
          }

    $scope.delete = function(id) {
      if (confirm("Are you sure you want to delete?")) {
              console.log('Deleting id : ' + id);
        $http.delete('/bikes/' + id)
            .success(function(data) {
                $scope.bikes = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
          }
    };
  
  };
 module.exports = donationsController;
