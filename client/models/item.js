'use strict';


angular.module('poseidon')
.factory('Item', function($http, nodeUrl) {
	function Item() {
	}

	Item.all = function() {
		return $http.get(nodeUrl + '/items');
	};

	Item.add = function(item) {
		console.log('in add function in Item model');
		return $http.post(nodeUrl + '/items', item);
	}

	return Item;
});
