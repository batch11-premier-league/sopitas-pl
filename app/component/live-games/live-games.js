(function () {
	'use strict';

	var liveGames = {
		templateUrl: './app/component/live-games/live-games.html',
		controller: liveGamesCtrl
	}

	angular
		.module('sopitasApp')
		.component('liveGames', liveGames);

	liveGamesCtrl.$inject = ['apiLiveGames', 'apiLivestream','apiLastResults']
	function liveGamesCtrl (apiLiveGames, apiLivestream, apiLastResults) {
		var games = this;
		games.live = [];
		games.full = [];
		games.next = [];

		apiLiveGames.get().$promise.then(function(response) {
			// games.live = [];
			// games.full = [];
            var data = response.data;
            
            for(var i in data){
            	if(data[i].match_status == 'LIVE' || data[i].match_status == 'HALF-TIME'){
            		games.live.push(data[i]);

            	}else if(data[i].match_status == 'PRE-MATCH'){
            		games.next.push(data[i]);
            	}

            // 	apiLivestream.get().$promise.then(function(response) {
            }
            if(games.live.length > 0){
            	for(var i in games.live){
            		apiLivestream.get({ optaId: games.live[i].opta_id }).$promise.then(function(response) {
            			console.log(response.data);
            		});
            	}
            }
            console.log(games.live);	
    	});

    	apiLastResults.get().$promise.then(function(response) {  
    		games.full = response.data;
    	});  
	}
})()