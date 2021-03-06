(function () {
	'use strict';

	var alertas = {
		templateUrl: './app/component/alertas/alertas.html',
		controller: alertasCtrl
	}

	angular
		.module('sopitasApp')
		.component('alertas', alertas);

	alertasCtrl.$inject = ['apiAlerts','$sce','desktopNotification']
	function alertasCtrl (apiAlerts, $sce, desktopNotification) {
		var alert = this;
		alert.alertas = [];
		alert.local=0;
		alert.visit=0;

		apiAlerts.get().$promise.then(function(response) {
			alert.local=response.data.home_team;
            alert.visit=response.data.away_team;
			var data = PHPUnserialize.unserialize(response.data.alerts);
            for(var i in data) {            	
            	data[i].alert_message = $sce.trustAsHtml(data[i].alert_message);            	
            }
            alert.data = data;
            // team.data.image_small = team.data.image_small.replace(/amp;/g, '');
            });

		

		
	}
})()