angular.module('orderService', [])

	// super simple service
	// each function returns a promise object
	.factory('Orders', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/food');
			},
			create : function(orderData) {
				return $http.post('/api/food', orderData);
			},
			delete : function(id) {
				return $http.delete('/api/food/' + id);
			},
			calculate : function() {
				return $http.get('/api/total');
			}
		}
	}]);
