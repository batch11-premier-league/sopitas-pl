(function () {
	'use strict';

	var player = {
		templateUrl: './app/component/player/player.html',
		controller: playerCtrl
	}

	angular
		.module('sopitasApp')
		.component('player', player)

	function playerCtrl () {
		var player = this;

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
	}

})()