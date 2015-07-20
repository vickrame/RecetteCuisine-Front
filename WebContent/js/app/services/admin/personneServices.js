'use strict';

var personneService = angular.module('personneService',['ngResource']);

personneService.factory('personneService', [ '',
		function($resource) {
		} ]);

personneService.service('personneServiceAPI', function($http,
		$location) {

	var root =$location.protocol() + "://" + $location.host() + ":"
	+ $location.port() + '/bcode-camel/';
	
	
	var api = {
		all : root+"personne"+"/all",
		detail : root +"personne",
		createOrUpdate : root+"personne" 
	};
	
	/*
	 * fonction de recherche
	 */
	this.load = function() {
		console.log("appel au backend pour la recherche des personnes");
		return $http.get(api.all).success(function() {
		}).error(function() {
		});
	};

	/*
	 * fonction de recherche
	 */
	this.detail = function(email) {
		console.log("appel au backend pour la recherche d une personne");
		return $http.get(api.detail+"/"+email).success(function() {
		}).error(function() {
		});
	};
	
	this.ajout = function(personne) {
		console.log("appel au backend pour l ajout de personne");
		return $http.post(api.createOrUpdate, personne).success(function() {
		}).error(function() {
		});
	};	

	this.modifier = function(personne) {
		console.log("appel au backend pour la modification de personne");
		return $http.put(api.createOrUpdate, personne).success(function() {
		}).error(function() {
		});
	};	
});
