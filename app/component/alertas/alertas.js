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

		apiAlerts.get().$promise.then(function(response) {
			alert.data = response.data.alerts;
            //alert.data = response.data.alerts.replace(/;/g, ',');
            console.log(alert.data);
            //console.log(alert.data.replace(/s:/g, 's').replace(/a:/g, 'a').replace(/i:/g, 'i'));
            // team.data.image_small = team.data.image_small.replace(/amp;/g, '');
            // team.data.image_medium = team.data.image_medium.replace(/amp;/g, '');
            // team.data.image_large = team.data.image_large.replace(/amp;/g, '');
            })

	}
})()