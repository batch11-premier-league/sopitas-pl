( function () {
	'use script';

	var home = {
		templateUrl: './app/home/home.html',
		controller: homeCtrl
	};

	angular
		.module('sopitasApp')
		.component("home", home);

	function homeCtrl() {
		var home = this;
	}

})()