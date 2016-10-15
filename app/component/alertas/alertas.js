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
		alert.showAlert = showAlert;

		apiAlerts.get().$promise.then(function(response) {
			// console.log(response.data);
			// console.log('equipos');
			alert.local=response.data.home_team;
            alert.visit=response.data.away_team;
			var data = PHPUnserialize.unserialize(response.data.alerts);
            for(var i in data) {            	
            	data[i].alert_message = $sce.trustAsHtml(data[i].alert_message);            	
            }
            alert.data = data;
            // console.log(alert.data);
            // console.log(alert.local);
            // console.log(alert.visit);
            // team.data.image_small = team.data.image_small.replace(/amp;/g, '');
            });

		function showAlert () {
			desktopNotification.requestPermission().then(function (permission) {
				  // User allowed the notification
				  desktopNotification.show('Hello', {
				    body: 'I am an HTML5 notification',
				    onClick: function () {
				      // Handle click event
				    }
				  });
				
            });
		}

		
	}
})()