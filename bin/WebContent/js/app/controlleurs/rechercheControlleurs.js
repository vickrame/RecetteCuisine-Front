'use strict';

// le controleur fait le pont entre la page HTML et la couche service.
// pour rappel seule couche service appel le backend.

recetteCuisine.controller('rechercheControlleur',['$scope','$controller','recetteServiceAPI',function($scope,$controller,recetteServiceAPI){
	
	
	var navigationModel = $scope.$new();
	$controller('navigationControlleur',{$scope : navigationModel });
	
	$scope.listeRecette=[];
	
	$scope.critere ={
		std	: {
			nom: "Empty",
			typePlat: 0
		},
		avancee : {
			photo : false
		}
	};
	
	$scope.recetteOnLoad ={
			idRecette:0,
			nombreCommentaire:0,
			nomRecette:"",
			pays:{
				idPays:0,
				codePays:"",
				libelle:""
			},
			personne:{
				commentaires:[],
				email:"",
				nom:"",
				prenom:""
			},
			imageBase64: "",
			commentaires: []
	};

	
	$scope.init =true;
	$scope.recetteSelected = false;
	$scope.flagAfficheListe = false;
	$scope.pageRecetteDefaut = "./pages/ressources/recettes/rechercherRecette.html";
	$scope.pageRecetteSelected = "./pages/ressources/recettes/view/detailRecette.html";	
	
	
	// definiton des variables
	$scope.critere.std.nom=  "Empty";
	$scope.critere.std.typePlat= 0;
	$scope.critere.avancee.photo=  false;
	
	$scope.isCollapsed = false;
	
	
	$scope.rechercherRecette = function(){
		
		recetteServiceAPI.rechercher().then( function(response){
			$scope.listeRecette=[];
			
			console.log(response.data);			
			_(response.data).forEach(function (entry){
				var recette ={};
				
				recette.idRecette = entry.idRecette;
				recette.libelle = entry.nomRecette;
				recette.pays = entry.pays.libelle;
				recette.nbreCommentaire = entry.nbreCommentaire;
				
				
				$scope.listeRecette.push(recette);
				
				$scope.flagAfficheListe = true;
				console.log("$scope.listeRecette : " + $scope.listeRecette);

			});
		});
		
	}

	$scope.detail = function(index){
		console.log("valeur index : " + index);
		var id = $scope.listeRecette[index].idRecette;
		recetteServiceAPI.detail(id).then( function(response){
			
			$scope.recetteOnLoad = response.data;
			console.log("$scope.recetteOnLoad " + $scope.recetteOnLoad);
//			console.log(response.data);			
//			response.data.idRecette;
//			response.data.nomRecette;
//			response.data.imageBase64;
//			
//			response.data.personne;
//			
//			response.data.pays
			
			
			$scope.recetteSelected = true;
			$scope.flagAfficheListe = false;
			
			navigationModel.changeInit();

		});
	}
	
	$scope.retour = function(){
			$scope.recetteSelected = false;
			$scope.flagAfficheListe = false;
	}		
	
	$scope.toogle = function(){
		console.log("valeur : " + !$scope.isCollapsed);
		$scope.isCollapsed = !$scope.isCollapsed
		console.log("valeur : " + !$scope.isCollapsed);
		return $scope.isCollapsed;
	}
	
}]);
