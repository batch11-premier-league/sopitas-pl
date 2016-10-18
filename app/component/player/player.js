(function () {
	'use strict';

	var player = {
		templateUrl: './app/component/player/player.html',
		controller: playerCtrl
	}

	angular
		.module('sopitasApp')
		.component('player', player)

	playerCtrl.$inject = ['$timeout']
	function playerCtrl ($timeout) {
		var player = this;
		player.pushtapePlayer = new PushtapePlayer();

		player.play = false;
		var audio = new Audio('http://audio.talksport.com/ondemand/talkSPORT-Live-20161001-142122.mp3');

		player.playAudio = function() {
			if(!player.play){
		        player.play = true;
		        audio.play();
			}else{
				player.play = false;
		        audio.pause();
			}
	    };

	   

		soundManager.setup({
			debugMode: true,   // disable or enable debug output
			url: './assets/swf/',       // path to directory containing SM2 SWF
			useHighPerformance: true, // keep flash on screen, boost performance
			preferFlash: true, // for visualization effects (smoother scrubber)
			flashVersion: 9,
			wmode: 'transparent', // transparent SWF, if possible
			onready: function() {
				// Initialize pushtape player when SM2 is ready
				$timeout(function() {
					player.pushtapePlayer.init({
						playNext: true, // stop after one sound, or play through list until end
						autoPlay: false,  // start playing the first sound right away
						repeatAll: false, // repeat playlist after last track

					});


				}, 8000);

				
				
			},
			ontimeout: function() {
				// Could not start. Missing SWF? Flash blocked? Show an error, etc.?
				console.log('Error initializing the Pushtape player.');
			}  
		});
	}

})()