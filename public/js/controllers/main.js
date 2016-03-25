angular.module('orderController', [])

	// inject the Order service factory into our controller
	.controller('mainController', ['$scope','$http','Orders', function($scope, $http, Orders) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all orders and show them
		// use the service to get all the orders
		Orders.get()
			.success(function(data) {
				$scope.orders = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createOrder = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.name != undefined) {
				$scope.loading = true;
				console.log('order name: '+$scope.formData);
				// call the create function from our service (returns a promise object)
				Orders.create($scope.formData)

					// if successful creation, call our get function to get all the new orders
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.orders = data; // assign our new list of orders
					});
			}
		};

		// DELETE ==================================================================
		// delete a order after checking it
		$scope.deleteOrder = function(id) {
			$scope.loading = true;

			Orders.delete(id)
				// if successful creation, call our get function to get all the new orders
				.success(function(data) {
					$scope.loading = false;
					$scope.orders = data; // assign our new list of orders
				});
		};
	}]);
