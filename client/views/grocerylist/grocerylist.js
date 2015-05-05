'use strict';


angular.module('poseidon')
.controller('GroceryCtrl', function($scope, $window, Item) {

	$scope.isEdit = false;

	Item.all()
	.then(function(response) {
		// console.log('all items here', response.data);
		$scope.items = response.data.items;
	});

	$scope.addItem = function(item) {
		Item.add(item)
		.then(function(response) {
			$scope.items.push(response.data);
			$scope.item = {};
		});
	};

	$scope.destroy = function(item){
		Item.destroy(item)
		.then(function(response){
			// console.log(response);
			var item = response.data;
			$window._.remove($scope.items, function(i) {
				return i._id === item._id;
			});
		});
	};

	$scope.edit = function(item){
		$scope.isEdit = true;
		$scope.item = item;
	};

	$scope.toggleComplete = function(item){
		console.log($scope.item);
		Item.edit(item)
		.then(function(response){
			$scope.item = response.data.item;
		})
	}

	$scope.updateItem = function(item) {
		console.log($scope.item);
		Item.edit($scope.item)
		.then(function(response) {
			// $scope.items
			$scope.item = response.data.item;
		});
		$scope.isEdit = false
	};

	$scope.cameraOn = function() {
		$window.Webcam.attach('#camera');
	};

	$scope.cameraOff = function() {
		$window.Webcam.reset();
	};

	$scope.takePhoto = function() {
		$window.Webcam.snap(function(dataUri){
			console.log($scope.item);
			$scope.item.photo = dataUri;
		});
	};
});
