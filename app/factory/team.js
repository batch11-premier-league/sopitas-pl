(function () {
	'use strict';

	angular
		.module('sopitasApp')
		.factory('apiTeam', apiTeam)
        .factory('apiTabla', apiTabla)
        .factory('apiLineup', apiLineup)
        .factory('apiListGames', apiListGames)
        .factory('apiAlerts', apiAlerts)
        .factory('apiLiveGames', apiLiveGames)
        .factory('apiLivestream', apiLivestream)
        .factory('apiLastResults', apiLastResults)
        .factory('apiAudioRepeat', apiAudioRepeat)

	apiTeam.$inject = ["$resource"];
    function apiTeam($resource){   	
    	var app_id = 'mshndevmkt';
    	var hsh = '823fa80840a88fb26ecb56eaf68250e5';
    	return $resource("http://api.talksport.com/api/team/?method=getItem&team_id=1&hsh="+hsh+"&app_id="+app_id);
        // return $resource("http://www.talksport.com/api/team/?method=getItem&team_id="+team_id+"&hsh="+hsh+"&app_id="+app_id);
    }

    apiTabla.$inject = ["$resource"];
    function apiTabla($resource){
    	var app_id = 'mshndevmkt';
    	var hsh = '87cff7f9245a84e5e0be934c6e7b837c';
        return $resource("http://api.talksport.com/api/tournament/?method=getTable&sport_id=1&tournament_id=8&season_id=2016&hsh="+hsh+"&app_id="+app_id+"&format=jsonp");
        //return $resource("http://api.talksport.com/api/team/?method=getItem&team_id=1&hsh=823fa80840a88fb26ecb56eaf68250e5&app_id=mshndevmkt");
        //return $resource("http://www.talksport.com/api/team/?method=getItem&team_id="+team_id+"&hsh="+hsh+"&app_id="+app_id);
    }

    apiLineup.$inject = ["$resource"];
    function apiLineup($resource){
    	var hsh = '823fa80840a88fb26ecb56eaf68250e5';// match id
        return $resource("http://talksport.com/api/team/?method=getItems&season_id=2016&tournament_id=8&hsh=204a2b292b4f62737accf9e564a17f7e&app_id=mshndevmkt&format=jsonp");
        //return $resource("http://api.talksport.com/api/team/?method=getItem&team_id=1&hsh=823fa80840a88fb26ecb56eaf68250e5&app_id=mshndevmkt");
        //return $resource("http://www.talksport.com/api/team/?method=getItem&team_id="+team_id+"&hsh="+hsh+"&app_id="+app_id);
    }

    apiListGames.$inject = ["$resource"];
    function apiListGames($resource){
    	return $resource('http://talksport.com/api/fixture/?method=getList&sport_id=1&tournament_id=8&season_id=2016&hsh=255310244028f29f0d79b2581a4450cc&app_id=mshndevmkt&format=jsonp')
    }

    apiLiveGames.$inject = ["$resource"];
    function apiLiveGames($resource){
        var date = new Date();
        var year = date.getFullYear();
        var mm = date.getMonth()+1;
        var dd = date.getDate();
        var today = year+'-'+mm+'-'+dd;
        return $resource('http://api.talksport.com/api/fixture/?method=getList&fixture_date='+today+'&sport_id=1&tournament_id=8&season_id=2016&hsh=255310244028f29f0d79b2581a4450cc&app_id=mshndevmkt&format=jsonp')
    }

    apiLastResults.$inject = ['$resource'];
    function apiLastResults($resource){
        return $resource('http://talksport.com/api/fixture/?method=getResults&sport_id=1&tournament_id=8&season_id=2016&hsh=c178aa4d845d75c676574e370b2d8f0c&app_id=mshndevmkt&day_limit=14&format=jsonp')
    }

    apiLivestream.$inject = ['$resource'];
    function apiLivestream ($resource) {
        return $resource('http://talksport.com/api/audio/?method=getLiveStream&opta_id=:optaId&lang=es&hsh=38bdf407e9915b72785b0412fc21b418&app_id=mshndevmkt&format=jsonp', { optaId : '@_opta_id' })
    }  

    apiAudioRepeat.$inject = ['$resource'];
    function apiAudioRepeat ($resource) {
        return $resource('http://talksport.com/api/audio/?method=getFull&opta_id=:optaId&lang=es&hsh=9d5f6a17d1851a1080d0565171f17329&app_id=mshndevmkt&format=jsonp', { optaId : '@_opta_id' })
    }

    apiAlerts.$inject = ['$resource'];
    function apiAlerts ($resource) {
    	return $resource('http://talksport.com/api/fixture/?method=getItem&fixture_id=58479688&hsh=823fa80840a88fb26ecb56eaf68250e5&app_id=mshndevmkt&format=jsonp')
    }

})()