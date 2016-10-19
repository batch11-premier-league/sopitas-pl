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

		function chageFormatDate(dateStr) {
		    var parts = dateStr.split("-");
		    var newDate = parts.reverse().join('-');
		    return newDate
		}

        apiListGames.get().$promise.then(function(response) {
            var data = response.data;
            // team.data.image_small = team.data.image_small.replace(/amp;/g, '');
            // team.data.image_medium = team.data.image_medium.replace(/amp;/g, '');
            // team.data.image_large = team.data.image_large.replace(/amp;/g, '');
            
            games.listByDate = {};

			for (var i = 0; i < data.length; ++i) {
			    var obj = data[i];
			    var fechaParaAgrupar = chageFormatDate(obj.fixture_date);
			    //If a property for this DtmStamp does not exist yet, create
			    if (games.listByDate[fechaParaAgrupar] === undefined){
			        games.listByDate[fechaParaAgrupar] = []; 
			        games.listByDate[fechaParaAgrupar]
			        // games.listByDate[obj.fixture_date]
			    }
			    var game = {};

			    game.kick_off_gmt = new Date(obj.kick_off_gmt+' UTC');
			    game.sFullAwayTeam = obj.sFullAwayTeam;
			    game.sFullHomeTeam = obj.sFullHomeTeam;
			    games.listByDate[fechaParaAgrupar].push(game);
			}

			$timeout(function() {
				// lo ejecuto en timeout porque el DOM no renderea mis elementos en ng-repeat y no añade la clase active al primer elemento
				$('.collapsible').collapsible({
					accordion: true
				});
				
			}, 10);
            })
        
	}

})()