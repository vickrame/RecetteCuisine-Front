'use strict';

// le controleur fait le pont entre la page HTML et la couche service.
// pour rappel seule couche service appel le backend.

recetteCuisine.controller('personneControlleur',['$scope','adminServiceAPI',function($scope,adminServiceAPI){
	
	
	$scope.personne = {
			nom : "",
			prenom: "",
			email: ""
	};
	
	
	$scope.listePersonne =[];
	$scope.init = true;
	$scope.isModified = false;
	
	$scope.pageCreationUser="./pages/admin/utilisateur/creationUtilisateur.html"; 
		
	$scope.rechercher = function(){
		$scope.listePersonne =[]; // on force la reintialisation
		adminServiceAPI.load().then( function(response){
			$scope.listePersonne  = response.data;
		});
	}
	
	$scope.creer = function(){
		$scope.init = false;
		$scope.isModified = false;
		$scope.personne.nom ="";
		$scope.personne.prenom = "";
		$scope.personne.email = "";
	}

	$scope.retour = function(){
		$scope.init = true;
		$scope.isModified = false;

	}
	
	$scope.modifier = function(index){
		console.log("appel a la fonctionnalite de modification pour l'index "+ index )
		$scope.init = false;
		$scope.isModified = true;
		var email = $scope.listePersonne[index].email;
		adminServiceAPI.detail(email).then(function (response){
			$scope.personne.email = response.data.email;
			$scope.personne.nom = response.data.nom;
			$scope.personne.prenom = response.data.prenom;
		});
		
	}

	
	$scope.ajouter = function(){

		if($scope.isModified){
			console.log("Methode d'ajout utilisateur");
			adminServiceAPI.modifier($scope.personne);
		}else{
			console.log("Methode du controlleur pour modifier utilisateur");
			adminServiceAPI.ajout($scope.personne);

		}

		$scope.rechercher();
		$scope.init = true;
	}
	
}]);
