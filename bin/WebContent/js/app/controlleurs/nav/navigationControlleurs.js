'use strict';


recetteCuisine.controller('navigationControlleur',['$scope',function($scope){
	
	$scope.templateUrlPage = "./pages/white.html";
	$scope.init=true;
	
	
	$scope.choixTemplate = function(identifiantOnglet){
		if(identifiantOnglet == 1){
			$scope.templateUrlPage = "./pages/white.html"; 		
		} else if(identifiantOnglet == 2){
			$scope.templateUrlPage = "./pages/ressources/recettes/template.html";
		} else if(identifiantOnglet == 3){
			$scope.templateUrlPage = "./pages/ressources/restaurant/template.html";
		}else if(identifiantOnglet == 4){
			$scope.templateUrlPage = "./pages/admin/template.html";
		}else{
			$scope.templateUrlPage = "./pages/acceuil.html";
		}
		
		console.log("$scope.templateUrlPage " + $scope.templateUrlPage);
	}
	
	
	$scope.choixTemplateRecette = function(identifiantOnglet){
		if(identifiantOnglet == 1){
			$scope.init =true;
		} else if(identifiantOnglet == 2){
			$scope.init = false;
		} else if(identifiantOnglet == 3){
			$scope.init =false;
		}else if(identifiantOnglet == 4){
			$scope.init =false;
		}else{
			$scope.init =true;
		}
		
		console.log($scope.init);
	}
	
	$scope.changeInit = function(){
		console.log("$scope.init "  + $scope.init);
		$scope.init = !$scope.init;
		console.log("$scope.init "  + $scope.init);
		return $scope.init;
	}
	
}]);