(function() {
    'use strict';

    var liveGames = {
        templateUrl: './app/component/live-games/live-games.html',
        controller: liveGamesCtrl
    }

    angular
        .module('sopitasApp')
        .component('liveGames', liveGames);

    liveGamesCtrl.$inject = ['apiLiveGames', 'apiLivestream', 'apiLastResults', 'apiAudioRepeat', '$timeout','$interval','desktopNotification']

    function liveGamesCtrl(apiLiveGames, apiLivestream, apiLastResults, apiAudioRepeat, $timeout, $interval, desktopNotification) {
        var games = this;
        games.live = [];
        games.full = [];
        games.next = [];
        games.db = null;
        var interval = null
        games.showAlert = showAlert;
        games.writeGamesData = writeGamesData;
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

        var countUpdates = 0;
        var alertRef = firebase.database().ref('games/1');
        var messageNotification = null
        var gameUpdate = null
        alertRef.on('value', function(snapshot) {
            if(countUpdates === 0){
            	countUpdates++
            	messageNotification = 'Gracias por escucharnos, disfruta los partidos en vivo'
            }else{
            	gameUpdate = snapshot.val()
            	messageNotification = gameUpdate.sHomeTeams+' '+gameUpdate.home_score+' - '+gameUpdate.away_score+' '+gameUpdate.AwayTeam
            }
            console.log(snapshot.val())
            // gameUpdate.away_score
            // gameUpdate.home_score
            games.showAlert()
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
	            	var countForRandomLive = 0; // es para agregar algunos como si estuvieran en vivo
	                angular.forEach(games.full, function(game) {
	                    countForRandomLive++
	                    apiAudioRepeat.get({ optaId: game.opta_id }).$promise.then(function(response) {
	                        game.audio = response.data[0].enclosure_url;
	                        if(0 < countForRandomLive < 3) 
	                        	games.live.push(game);
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

        function showAlert () {
			desktopNotification.requestPermission().then(function (permission) {
				  // User allowed the notification
				  desktopNotification.show('Bienvenidos', {
				  	icon: './img/sopitas-icon.png',
				    body: messageNotification,
				    onClick: function () {
				      // Handle click event
				    }
				  });
				
            });
		}


    }
})()
