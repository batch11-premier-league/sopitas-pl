(function () {
	'use strict';

	var gamesList = {
		templateUrl: './app/component/next-games/next-games.html',
		controller: gamesListCtrl
	}

	angular
		.module('sopitasApp')
		.component('gamesList', gamesList);

	gamesListCtrl.$inject = ['apiListGames','$timeout']
	function gamesListCtrl (apiListGames, $timeout) {
		var games = this;

        apiListGames.get().$promise.then(function(response) {
            var data = response.data;
            // team.data.image_small = team.data.image_small.replace(/amp;/g, '');
            // team.data.image_medium = team.data.image_medium.replace(/amp;/g, '');
            // team.data.image_large = team.data.image_large.replace(/amp;/g, '');
            
            games.listByDate = {};

			for (var i = 0; i < data.length; ++i) {
			    var obj = data[i];

			    //If a property for this DtmStamp does not exist yet, create
			    if (games.listByDate[obj.fixture_date] === undefined){
			        games.listByDate[obj.fixture_date] = []; //Assign a new array with the first element of DtmStamp.
			        games.listByDate[obj.fixture_date]
			        // games.listByDate[obj.fixture_date]
			    }
			    var game = {};

			    game.kick_off_gmt = new Date(obj.kick_off_gmt+' UTC');
			    game.sFullAwayTeam = obj.sFullAwayTeam;
			    game.sFullHomeTeam = obj.sFullHomeTeam;
			    //x will always be the array corresponding to the current DtmStamp. Push a value the current value to it.
			    games.listByDate[obj.fixture_date].push(game);
			}

			$timeout(function() {

				$('.collapsible').collapsible({
					accordion: true
				});
			}, 10);
            })
        
	}

})()