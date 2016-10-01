( function () {
	'use strict';

	angular
		.module('sopitasApp')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config ($routeProvider) {
		$routeProvider
			.when('/',
				{
					template: '<home></home>'
				})
			.otherwise({
				redirectTo : '/'
			});
	}
	
})();