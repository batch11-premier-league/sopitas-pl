(function () {
	'use strict';

	angular
		.module('sopitasApp')
		.factory('apiTeam', apiTeam);

	apiTeam.$inject = ["$resource"];
    function apiTeam($resource){
    	var team_id = 1;
    	var app_id = 'mshndevmkt';
    	var hsh = '823fa80840a88fb26ecb56eaf68250e5';
    	return $resource("http://api.talksport.com/api/team/?method=getItem&team_id=1&hsh=823fa80840a88fb26ecb56eaf68250e5&app_id=mshndevmkt");
        // return $resource("http://www.talksport.com/api/team/?method=getItem&team_id="+team_id+"&hsh="+hsh+"&app_id="+app_id);
    }
})()