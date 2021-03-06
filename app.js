(function() {
	var app = angular.module('store',['store-products']);

	app.controller('StoreController', function($scope, $http){
	//	var store = this;   /* to recover data from the http request */
		$scope.products = [];
 		delete $http.defaults.headers.common['X-Requested-With'];
		$http.get('products.json').success(function(data){
			$scope.products = data;
		});
	});

	app.controller('ReviewController', function(){
		this.review = {};	
		this.addReview = function(product) {			
			product.reviews.push(this.review);
			this.review = {};	
		};
	});

})();