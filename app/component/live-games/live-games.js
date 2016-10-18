(function () {
	'use strict';

	var liveGames = {
		templateUrl: './app/component/live-games/live-games.html',
		controller: liveGamesCtrl
	}

	angular
		.module('sopitasApp')
		.component('liveGames', liveGames);

	liveGamesCtrl.$inject = ['apiLiveGames', 'apiLivestream','apiLastResults','apiAudioRepeat','$timeout']
	function liveGamesCtrl (apiLiveGames, apiLivestream, apiLastResults,apiAudioRepeat,$timeout) {
		var games = this;
		games.live = [];
		games.full = [];
		games.next = [];
		// games.playGameAudio = playGameAudio;
		// games.PushtapePlayer = PushtapePlayer;

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
            			games.live[i].audio = response.data.sHttpPath;
            		});
            	}
            }
    	});

    	apiLastResults.get().$promise.then(function(response) {  
    		games.full = response.data;
    		if(games.full.length > 0){
    			angular.forEach(games.full , function(game){
    				console.log(game.id);
    				apiAudioRepeat.get({ optaId: game.opta_id }).$promise.then(function(response) {
	            			game.audio = response.data[0].enclosure_url;
	            			
	            		}, function(error) {
						    game.audio = false;
						});
    			})
            	// for(var i in games.full){
            		// console.log(games.full[i]);
            		// console.log(games.full[i]);
	            		
					
            		
            	
            }
    	});  

	}
})()