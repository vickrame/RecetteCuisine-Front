'use strict';

var referentielService = angular.module('referentielService',['ngResource']);

referentielService.factory('referentielService', [ '',
		function($resource) {
		} ]);

referentielService.service('ReferentielServiceAPI', function($http,
		$location) {

	var root =$location.protocol() + "://" + $location.host() + ":"+ $location.port() + '/bcode-camel/';
	
	
	var api = {
		allPays : root+"referentiel/pays/all",
		getPays : root+"referentiel/pays",
		paysCreateOrUpdate :root+"referentiel/pays" ,

		allRole : root + "referentiel/roles/all",
		getRole : root+"referentiel/roles",
		roleCreateOrUpdate :root+"referentiel/roles" ,
		
		allCategorie : root+"referentiel/categorie/all", 
		getCategorie : root+"referentiel/categorie",
		categoriecreateOrUpdate : root+"referentiel/categorie" 
	};

	
	this.loadPays = function(){
		console.log("Appel a la couche permettant d'initialiser la liste des pays");
		return $http.get(api.allPays).success(function() { // chaque appel http doit traiter le cas du secces et de l'erreur
		}).error(function() {
		});
	}
	
	this.loadRole = function(){
		console.log("Appel a la couche permettant d'initialiser la liste des roles");
		return $http.get(api.allRole).success(function() { // 
		}).error(function() {
		});
	}
	
	this.loadCategorie = function(){
		console.log("Appel a la couche permettant d'initialiser la liste des pays");
//		return $http.get(api.allPays).success(function() { // 
//		}).error(function() {
//		});
	}
	
	// model = DTO
	// cible
	this.createOrUpdate= function(model,cible, flagModified){
		if(cible == 'pays'){
			if(!flagModified){
				return $http.post(api.paysCreateOrUpdate,model).success(function() {
				}).error(function() {
				});
			}else if(flagModified){
				return $http.put(api.paysCreateOrUpdate,model).success(function() {
				}).error(function() {
				});
			}
		}else if(cible == 'role'){
			if(!flagModified){
				return $http.post(api.roleCreateOrUpdate,model).success(function() {
				}).error(function() {
				});
			}else if(flagModified){
				return $http.put(api.roleCreateOrUpdate,model).success(function() {
				}).error(function() {
				});
			}
		}else if(cible == 'categorie'){
			if(!flagModified){
				return $http.post(api.categorieCreateOrUpdate,model).success(function() {
				}).error(function() {
				});
			}else if(flagModified){
				return $http.put(api.categorieCreateOrUpdate,model).success(function() {
				}).error(function() {
				});			
			}
		}		
	}
	
	
	this.detail= function(model,cible){
		if(cible == 'pays'){
				return $http.get(api.getPays+"/"+model).success(function() {
				}).error(function() {
				});
		}else if(cible == 'role'){
				return $http.get(api.getRole+"/"+model).success(function(){
				}).error(function(){
					
				});
		}else if(cible == 'categorie'){
				return $http.get(api.getCategorie+"/"+model).success(function(){
					
				}).error(function(){
					
				});
		}		
	}	
});