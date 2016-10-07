(function () {
	'use strict';

	var lineUp = {
		templateUrl: './app/component/lineup/lineup.html',
		controller: lineupCtrl
	}

	angular
		.module('sopitasApp')
		.component('lineUp', lineUp);

	lineupCtrl.$inject = ['apiLineup'];
	function lineupCtrl (apiLineup) {
		var alineacion = this;

        apiLineup.get().$promise.then(function(response) {
            alineacion.data = response.data;
            console.log(response.data);
            // team.data.image_small = team.data.image_small.replace(/amp;/g, '');
            // team.data.image_medium = team.data.image_medium.replace(/amp;/g, '');
            // team.data.image_large = team.data.image_large.replace(/amp;/g, '');
            })
	}
})()