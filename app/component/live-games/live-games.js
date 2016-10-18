(function() {
    'use strict';

    var liveGames = {
        templateUrl: './app/component/live-games/live-games.html',
        controller: liveGamesCtrl
    }

    angular
        .module('sopitasApp')
        .component('liveGames', liveGames);

    liveGamesCtrl.$inject = ['apiLiveGames', 'apiLivestream', 'apiLastResults', 'apiAudioRepeat', '$timeout','$interval']

    function liveGamesCtrl(apiLiveGames, apiLivestream, apiLastResults, apiAudioRepeat, $timeout, $interval) {
        var games = this;
        games.live = [];
        games.full = [];
        games.next = [];
        games.db = null;
        var interval = null
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBOEd731xsw1BDs0SiP_nu8rdxQoG63DSc",
            authDomain: "brilliant-torch-7697.firebaseapp.com",
            databaseURL: "https://brilliant-torch-7697.firebaseio.com",
            storageBucket: "brilliant-torch-7697.appspot.com",
            messagingSenderId: "1030875328300"
        };
        firebase.initializeApp(config);

        var db = firebase.database();

        function writeGamesData(games) {
            firebase.database().ref('games/').set(games);
        }

        var alertRef = firebase.database().ref('games/0');
        alertRef.on('value', function(snapshot) {
            console.log(snapshot.val());
        });

        getLastResults();
        startContinuosRequestForLiveGames();

        function startContinuosRequestForLiveGames () {
        	interval = $interval(getLiveMatches, 1000);
        }

        function stopLiveRequest () {
            if( interval !== undefined){
                $interval.cancel(interval);
                interval = undefined;
                console.log('Termine el intervalo');
            }        
        }

        var countInterval = 0

        function getLiveMatches() {
        	countInterval++
        	console.log('Intervalo: '+countInterval)
            apiLiveGames.get().$promise.then(function(response) {
                angular.forEach(data, function(game) {
                    if (game.match_status == 'LIVE' || game.match_status == 'HALF-TIME') {
                        games.live.push(game);

                    } else if (game.match_status == 'PRE-MATCH') {
                        games.next.push(game);
                    }
                })

                angular.forEach(games.live, function(game) {
                    apiLivestream.get({ optaId: game.opta_id }).$promise.then(function(response) {
                        game.audio = response.data.sHttpPath;
                    }, function(error) {
                        game.audio = false;
                    });
                })
            }, function(error) {
                stopLiveRequest()
                console.log('No encontre partidos en vivo');
            });
        }

        function getLastResults () {
	        apiLastResults.get().$promise.then(function(response) {
	            games.full = response.data;
	            writeGamesData(games.full);
	            if (games.full.length > 0) {
	                angular.forEach(games.full, function(game) {
	                    console.log(game.id);
	                    apiAudioRepeat.get({ optaId: game.opta_id }).$promise.then(function(response) {
	                        game.audio = response.data[0].enclosure_url;

	                    }, function(error) {
	                    	console.log(error);
	                        game.audio = false;
	                    });
	                })

	            }
	        }, function(error) {
                console.log('Error al buscar los últimos resultados');
            });
        }


    }
})()
