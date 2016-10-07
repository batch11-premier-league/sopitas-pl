(function () {
	'use strict';

	angular
		.module('sopitasApp')
		.factory('apiTeam', apiTeam)
        .factory('apiTabla', apiTabla)
        .factory('apiLineup', apiLineup);

	apiTeam.$inject = ["$resource"];

	var team_id = 1;
	
	

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
        return $resource("http://talksport.com/api/team/?method=getItems&season_id=2016&tournament_id=8&hsh=204a2b292b4f62737accf9e564a17f7e&app_id=mshndevmkt");
        //return $resource("http://api.talksport.com/api/team/?method=getItem&team_id=1&hsh=823fa80840a88fb26ecb56eaf68250e5&app_id=mshndevmkt");
        //return $resource("http://www.talksport.com/api/team/?method=getItem&team_id="+team_id+"&hsh="+hsh+"&app_id="+app_id);
    }

})()