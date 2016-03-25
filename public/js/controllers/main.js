angular.module('orderController', [])

	// inject the Order service factory into our controller
	.controller('mainController', ['$scope','$http','Orders', function($scope, $http, Orders) {
		$scope.formData = {};
		$scope.loading = true;

		var menu = {
    'foodList': [{
        'name': 'Burger',
        'price': '7'
    }, {
        'name': 'Sour Soup',
        'price': '4.5'
    }, {
        'name': 'Salad',
        'price': '6'
    }],
    'valueSelected': {
        'name': 'Salad',
        'price': '6'
    }
}

		$scope.selectedValue = menu['valueSelected'];
		$scope.foodList = menu['foodList'];

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

			var order = {};
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.name != undefined) {
				$scope.loading = true;

				for(var i=0; i < menu.foodList.length; i++) {
					if(menu.foodList[i]['name'] == $scope.formData.name) {
						order = menu.foodList[i];
						break;
					}

				}
				// call the create function from our service (returns a promise object)
				Orders.create(order)

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
