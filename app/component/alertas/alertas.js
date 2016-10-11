(function () {
	'use strict';

	var alertas = {
		templateUrl: './app/component/alertas/alertas.html',
		controller: alertasCtrl
	}

	angular
		.module('sopitasApp')
		.component('alertas', alertas);

	alertasCtrl.$inject = ['apiAlerts']
	function alertasCtrl (apiAlerts) {
		var alert = this;
		alert.details = [];

		apiAlerts.get().$promise.then(function(response) {
			var data = PHPUnserialize.unserialize(response.data.alerts);
            //alert.data = response.data.alerts.replace(/;/g, ',');
            console.log(data);
            for(var i in data) {
            	
            	alert.details.push(PHPUnserialize.unserialize(data[i].detail));
            	
            }
            console.log(alert.details);
            //console.log(PHPUnserialize.unserialize(alert.data));
            //console.log(alert.data.replace(/s:/g, 's').replace(/a:/g, 'a').replace(/i:/g, 'i'));
            // team.data.image_small = team.data.image_small.replace(/amp;/g, '');
            // team.data.image_medium = team.data.image_medium.replace(/amp;/g, '');
            // team.data.image_large = team.data.image_large.replace(/amp;/g, '');
            })

	}
})()