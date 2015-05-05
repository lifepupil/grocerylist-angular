'use strict';


angular.module('poseidon')
.factory('Item', function($http, nodeUrl) {
	function Item() {
	}

	Item.edit = function(item){
		return $http.put(nodeUrl + '/items/' + item._id, item);
	};

	Item.all = function() {
		return $http.get(nodeUrl + '/items');
	};

	Item.add = function(item) {
		// console.log('in add function in Item model');
		return $http.post(nodeUrl + '/items', item);
	};

	Item.destroy = function(item){
		return $http.delete(nodeUrl + '/items/' + item._id);
	};

	return Item;
});
