(function () {
	'use strict';

	var gamesList = {
		templateUrl: './app/component/games/games.html',
		controller: gamesListCtrl
	}

	angular
		.module('sopitasApp')
		.component('gamesList', gamesList);

	gamesListCtrl.$inject = ['apiTeam']
	function gamesListCtrl (apiTeam) {
		var team = this;

        apiTeam.get().$promise.then(function(response) {
            team.data = response.data;
            team.data.image_small = team.data.image_small.replace(/amp;/g, '');
            team.data.image_medium = team.data.image_medium.replace(/amp;/g, '');
            team.data.image_large = team.data.image_large.replace(/amp;/g, '');
            })
        
	}

})()