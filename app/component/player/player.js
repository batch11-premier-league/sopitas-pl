(function () {
	'use strict';

	var player = {
		templateUrl: './app/component/player/player.html',
		controller: playerCtrl
	}

	angular
		.module('sopitasApp')
		.component('player', player)

	function playerCtrl () {
		var player = this;
	}

})()