'use strict';

var adminService = angular.module('adminService',['ngResource']);

adminService.factory('adminService', [ '',
		function($resource) {
		} ]);

adminService.service('adminServiceAPI', function($http,
		$location) {

	var root =$location.protocol() + "://" + $location.host() + ":"
	+ $location.port() + '/bcode-camel/';
	
	
	var api = {
		all : root+"personne"+"/all",
		detail : root +"personne",
		createOrUpdate : root+"personne",
		
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
	this.createOrUpdateAdmin= function(model,cible, flagModified){
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
	
	
	this.detailAdmin= function(model,cible){
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
