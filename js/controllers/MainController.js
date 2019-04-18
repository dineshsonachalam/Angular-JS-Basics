app.controller('MainController', ['$scope', function($scope) { 
	//The $scope in an AngularJS is a built-in object, which contains application data and methods. 
	// You can create properties to a $scope object inside a controller function and assign a value or function to it. 
	// The $scope is glue between a controller and view (HTML).
  	$scope.list = ["Clean my room", "Go to the store", "Study Cracking the Coding Interview"]
  	
  	$scope.addItem = function() {
  		// addToDo is the ngModel - an input variable
  		// push an item to the list
  		$scope.list.push($scope.addToDo);
  	}
}]);