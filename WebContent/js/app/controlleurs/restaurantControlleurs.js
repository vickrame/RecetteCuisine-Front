'use strict';

// le controleur fait le pont entre la page HTML et la couche service.
// pour rappel seule couche service appel le backend.

recetteCuisine.controller('restaurantControlleur',['$scope','rechercheRecetteServiceAPI',function($scope,rechercheRecetteServiceAPI){
	
	$scope.critere ={
		restaurent	: {
			nom: "Empty",
			categorie: 1
		},
		typeCuisine : {
			pays : "FR",
			region : ""
		}
	};
	
	// definiton des variables
	$scope.critere.std.nom=  "Empty";
	$scope.critere.std.typePlat= 0;
	$scope.critere.avancee.photo=  false;
	
	$scope.isCollapsed = false;
	
	$scope.rechercher = function(){
		console.log("valeur : " + !$scope.isCollapsed);
		rechercheRecetteServiceAPI.rechercher().then( function(response){
			console.log(response.data);			
		});
	}
	
	$scope.toogle = function(){
		console.log("valeur : " + !$scope.isCollapsed);
		$scope.isCollapsed = !$scope.isCollapsed
		console.log("valeur : " + !$scope.isCollapsed);
		return $scope.isCollapsed;
	}
	
}]);
