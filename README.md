# Angular-JS-Basics

Step 1: Import the angular JS library in index.html:
```
<DOCTYPE html>
	<html>
	<head>
		<!--Import angular js library-->
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
	</head>
	<body>
	</body>
</html>
```
step 2: Define module called ToDoList:

**Module**:
- It defines an app, and acts as container for different part of app and for app controllers.
```
Path: js/app.js
// initialise a module called ToDoList
var app = angular.module('ToDoList', []);
```
Step 3: Connect app.js to your index.html
```
<DOCTYPE html>
	<html>
	<head>
		<!--Import angular js library-->
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
	</head>
	<body>
	</body>
</html>
```
Step 4: Create controller for your application that handles the data
```
Path:js/controllers/MainController.js
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
```
```
Path: index.html
<DOCTYPE html>
	<html>
	<head>
		<!--Import angular js library-->
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
	</head>
	<!--ng-app is the root element-->
	<body ng-app="ToDoList">
		<div ng-controller="MainController">
			<div ng-repeat="item in list">
				<li>{{item}}</li>
			</div>
			<input ng-model="addToDo">
			<button ng-click="addItem()">Add This To-Do</button>	
		</div>

		<!-- Import the ToDoList module -->
		<script type="text/javascript" src="js/app.js"></script>
		<!-- Import controllers -->
		<script type="text/javascript" src="js/controllers/MainController.js"></script>
	</body>
</html>
```

### Things to remember
```
<!-- How to Import Angular.js -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<!-- How to How to Initialize a Module -->
var app = angular.module('ModuleName', []);
<!-- How to Create a Controller -->
app.controller('ControllerName', ['$scope', function($scope) { 
  	$scope.text = "Value for Text Attribute in Scope"
  	$scope.method = function() { 
  	/* body of function */ }
}]);
<!-- What You Need To Import -->
1. angular framework
2. app.js (modules)
3. controller files
<!-- What You Need To Attach in index.html -->
1. application with ng-app
2. controller with ng-controller
```
###  Some Built-in Directives:

```
<!-- ng-repeat -->
// loop through a collection / array
<div ng-repeat= "color in colors">
	<li> ""color"" </li> // except with handlebars instead of quotes
</div>
<!-- ng-click -->
// execute a method or expression when element is clicked
<button ng-click="changeBackgroundColor()"></button>
<!-- ng-src -->
// use angular to set a source path for an image
<img ng-src="http://www.myblog.com/article/images/">
<!-- ng-href -->
// use angular to set the source for a link
<a ng-href="http://www.myblog.com/article">click here!</a>   
<!-- ng-model -->
// bind input elements to scope attributes
<input ng-model="name"></input>

```
