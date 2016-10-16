(function () {
	'use strict';

	var tablasList = {
		templateUrl: './app/component/tabla/tabla.html',
		controller: tablasListCtrl
	}

	angular
		.module('sopitasApp')
		.component('tablasList', tablasList);

	tablasListCtrl.$inject = ['apiTabla']
	function tablasListCtrl (apiTabla) {
		var tabla = this;

        apiTabla.get().$promise.then(function(response) {
            console.log(response.data);
            tabla.data = response.data;
            // team.data.image_small = team.data.image_small.replace(/amp;/g, '');
            // team.data.image_medium = team.data.image_medium.replace(/amp;/g, '');
            // team.data.image_large = team.data.image_large.replace(/amp;/g, '');
            })
        
	}

})()