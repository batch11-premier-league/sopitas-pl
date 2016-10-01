(function () {
	'use strict';

	var gamesList = {
		templateUrl: './app/component/games/games.html',
		controller: gamesListCtrl
	}

	angular
		.module('sopitasApp')
		.component('gamesList', gamesList);

	function gamesListCtrl () {


	// "matches": {
 //      "697085": {
 //        "h": "0",
 //        "a": "0",
 //        "hcode": "INV",
 //        "acode": "HIB",
 //        "url": "/football/scottish-premier-league/match/2014-03-12/inverness-caledonian-thistle-v-hibernian"
 //      },
 //      "697207": {
 //        "h": "0",
 //        "a": "1",
 //        "hcode": "DUM",
 //        "acode": "QOS",
 //        "url": "/football/scottish-division-1/match/2013-12-07/dumbarton-v-queen-of-the-south"
 //      },
 //      "697247": {
 //        "h": "1",
 //        "a": "1",
 //        "hcode": "DND",
 //        "acode": "ALL",
 //        "url": "/football/scottish-division-1/match/2014-02-01/dundee-v-alloa-athletic"
 //      },
 //      "697341": {
 //        "h": "3",
 //        "a": "4",
 //        "hcode": "ARB",
 //        "acode": "STE",
 //        "url": "/football/scottish-division-2/match/2013-09-21/arbroath-v-stenhousemuir"
 //      },
 //      "697388": {
 //        "h": "1",
 //        "a": "1",
 //        "hcode": "DUF",
 //        "acode": "FOR",
 //        "url": "/football/scottish-division-2/match/2013-12-07/dunfermline-athletic-v-forfar-athletic"
 //      },
 //      "697403": {
 //        "h": "0",
 //        "a": "1",
 //        "hcode": "BRC",
 //        "acode": "STE",
 //        "url": "/football/scottish-division-2/match/2013-12-28/brechin-city-v-stenhousemuir"
 //      },
 //      "697455": {
 //        "h": "3",
 //        "a": "0",
 //        "hcode": "RAN",
 //        "acode": "ARD",
 //        "url": "/football/scottish-division-2/match/2014-03-12/rangers-v-airdrieonians"
 //      },
 //      "697480": {
 //        "h": "2",
 //        "a": "1",
 //        "hcode": "RAN",
 //        "acode": "AYR",
 //        "url": "/football/scottish-division-2/match/2014-04-22/rangers-v-ayr-united"
 //      },
 //      "754821": {
 //        "h": "1",
 //        "a": "0",
 //        "hcode": "ALL",
 //        "acode": "LVS",
 //        "url": "/football/scottish-division-1/match/2014-11-08/alloa-athletic-v-livingston"
 //      },
 //      "754822": {
 //        "h": "1",
 //        "a": "0",
 //        "hcode": "HRT",
 //        "acode": "RAI",
 //        "url": "/football/scottish-division-1/match/2014-11-08/hearts-v-raith-rovers"
 //      },
 //      "754999": {
 //        "h": "1",
 //        "a": "1",
 //        "hcode": "PHD",
 //        "acode": "DUF",
 //        "url": "/football/scottish-division-2/match/2014-11-08/peterhead-v-dunfermline-athletic"
 //      }
 //  }
	}

})()