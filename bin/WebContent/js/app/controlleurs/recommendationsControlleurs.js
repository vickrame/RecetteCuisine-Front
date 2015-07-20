'use strict';

// le controleur fait le pont entre la page HTML et la couche service.
// pour rappel seule couche service appel le backend.

recetteCuisine.controller('recommendationControlleur',['$scope','rechercheRecetteServiceAPI',function($scope,rechercheRecetteServiceAPI){
	
	// definiton des variables
	$scope.critere.std.nom=  "Empty";
	$scope.critere.std.typePlat= 0;
	$scope.critere.avancee.photo=  false;
	
	$scope.isCollapsed = false;
	
	rechercher = function(){
		console.log("valeur : " + !$scope.isCollapsed);
		rechercheRecetteServiceAPI.rechercher().then( function(response){
			console.log(response.data);			
		});
	}
	
	toogle = function(){
		console.log("valeur : " + !$scope.isCollapsed);
		$scope.isCollapsed = !$scope.isCollapsed
		console.log("valeur : " + !$scope.isCollapsed);
		return $scope.isCollapsed;
	}
	
}]);
