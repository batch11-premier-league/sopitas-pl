(function () {
	'use strict';

	var liveGames = {
		templateUrl: './app/component/live-games/live-games.html',
		controller: liveGamesCtrl
	}

	angular
		.module('sopitasApp')
		.component('liveGames', liveGames);

	function liveGamesCtrl () {
		var liveGame = this;
	}
})()