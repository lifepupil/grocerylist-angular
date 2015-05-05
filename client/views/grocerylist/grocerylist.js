'use strict';


angular.module('poseidon')
.controller('GroceryCtrl', function($scope, $window, Item) {

	Item.all()
	.then(function(response) {
		console.log('all items here', response.data);
		$scope.items = response.data.items;
	});

	$scope.addItem = function(item) {
		Item.add(item)
		.then(function(response) {
			$scope.items.push(response.data);
		})
	};

	$scope.cameraOn = function() {
		$window.Webcam.attach('#camera');
	};

	$scope.cameraOff = function() {
		$window.Webcam.reset();
	};

	$scope.takePhoto = function() {
		$window.Webcam.snap(function(dataUrl){
			$scope.item.photo = dataUrl;
		});
	};
});
