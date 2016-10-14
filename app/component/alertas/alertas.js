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
		alert.showAlert = showAlert;

		apiAlerts.get().$promise.then(function(response) {
			var data = PHPUnserialize.unserialize(response.data.alerts);
            for(var i in data) {
            	
            	data[i].alert_message = $sce.trustAsHtml(data[i].alert_message);
            	
            }
            alert.data = data;
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