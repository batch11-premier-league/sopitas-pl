(function () {
	'use strict';

	angular
		.module('sopitasApp')
		.factory('apiTeam', apiTeam)
        .factory('apiTabla', apiTabla);

	apiTeam.$inject = ["$resource"];
    function apiTeam($resource){
    	var team_id = 1;
    	var app_id = 'mshndevmkt';
    	var hsh = '823fa80840a88fb26ecb56eaf68250e5';
    	return $resource("http://api.talksport.com/api/team/?method=getItem&team_id=1&hsh=823fa80840a88fb26ecb56eaf68250e5&app_id=mshndevmkt");
        // return $resource("http://www.talksport.com/api/team/?method=getItem&team_id="+team_id+"&hsh="+hsh+"&app_id="+app_id);
    }

        apiTabla.$inject = ["$resource"];
    function apiTabla($resource){
        var team_id = 1;
        var app_id = 'mshndevmkt';
        var hsh = '823fa80840a88fb26ecb56eaf68250e5';
        return $resource("http://api.talksport.com/api/tournament/?method=getTable&sport_id=1&tournament_id=8&season_id=2016&hsh=87cff7f9245a84e5e0be934c6e7b837c&app_id=mshndevmkt&format=jsonp");
        //return $resource("http://api.talksport.com/api/team/?method=getItem&team_id=1&hsh=823fa80840a88fb26ecb56eaf68250e5&app_id=mshndevmkt");
        //return $resource("http://www.talksport.com/api/team/?method=getItem&team_id="+team_id+"&hsh="+hsh+"&app_id="+app_id);
    }
})()