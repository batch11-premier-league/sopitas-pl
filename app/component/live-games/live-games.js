(function () {
	'use strict';

	var liveGames = {
		templateUrl: './app/component/live-games/live-games.html',
		controller: liveGamesCtrl
	}

	angular
		.module('sopitasApp')
		.component('liveGames', liveGames);

	liveGamesCtrl.$inject = ['apiLiveGames', 'apiLivestream']
	function liveGamesCtrl (apiLiveGames, apiLivestream) {
		var games = this;
		games.live = null;
		games.fullGames = null;
		apiLiveGames.get().$promise.then(function(response) {
			games.live = [];
			games.full = [];
            var data = response.data;
            console.log(data.full);
            for(var i in data){
            	if(data[i].match_status == 'LIVE'){
            		games.live.push(data[i]);
            	}else{
            		games.full.push(data[i]);
            	}

            // 	apiLivestream.get().$promise.then(function(response) {
            }
    	});    
	}
})()