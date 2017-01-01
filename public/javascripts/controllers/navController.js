app.controller('NavCtrl', ['$scope', 'auth', function($scope, auth){
  // debugger;   
  // var a = auth.currentUser();
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser;
  $scope.logOut = auth.logOut;
  $scope.logIn = auth.logIn;

}]);