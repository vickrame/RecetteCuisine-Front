'use strict';

/**
 * Déclaration de l'application recetteCuisine
 * , ['ui.bootstrap']
 */

console.log("chargement des dépendances");


var recetteServiceModule = angular.module('recetteServiceModule', ['ngResource'] )
.service('recetteServiceAPI', function($http,
		$location) {

	//localise la backend
	var root = $location.protocol() + "://" + $location.host() + ":"+ $location.port() + '/bcode-camel/';

	// declaration des api disponible
	var api = {
		all : root + 'recette/all',
		detail : root + 'recette/detail'
	};

	/*
	 * fonction de recherche
	 */
	this.rechercher = function() {
		console.log("appel au backend");
		return $http.get(api.all).success(function() {
		}).error(function() {
		});
	};
	
	/*
	 * fonction permettant d'obtenir le detail
	 */
	this.detail = function(idRecette) {
		return $http.get(api.detail+'/'+idRecette).success(function(idRecette) {
		}).error(function() {
		});
	};
});