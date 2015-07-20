'use strict';

// le controleur fait le pont entre la page HTML et la couche service.
// pour rappel seule couche service appel le backend.

recetteCuisine.controller('referentielControlleur',['$scope','adminServiceAPI',function($scope,adminServiceAPI){
	$scope.listeRole =[];
	$scope.listeCategorie =[];
	$scope.listePays =[];
	
	$scope.init = true;
	$scope.isModified = false;
	
	$scope.panelPays=false;
	$scope.panelRole=false;
	$scope.panelCategorie=false;
	
	$scope.pageCreation = './pages/admin/ref/creationReferentiel.html';
	
	$scope.pays ={
			idPays:0,
			codePays: "",
			libelle: ""
	};
	
	
	$scope.role ={
			idRole:0,
			codeRole:"",
			libelle:""
	};
	
	$scope.categorie ={
			idCategorie:0,
			codeCategorie:"",
			libelle:""
	};
	
	$scope.initialisation = function(){
		$scope.listeRole =[];
		$scope.listeCategorie =[];
		$scope.listePays =[];
		console.log("Controlleur qui charge la liste des pays ");
		// la couche service traite deux cas possible donc 
		// il faut que le controlleur aussi aussi le mot clef then
		adminServiceAPI.loadPays().then(function(response){ 
			_(response.data).forEach(function(entry){
				console.log(entry);
				
				var pays= {
				};
				
				pays.code = entry.codePays;
				pays.libelle = entry.libelle;
				
				$scope.listePays.push(pays);
				
			})
//			$scope.listePays
		});
		console.log("Controlleur qui charge la liste des roles ");
		adminServiceAPI.loadRole().then(function(response){
			_(response.data).forEach(function (entry){
				console.log(entry);
				var role= {
				};
				
				role.code = entry.codeRole;
				role.libelle = entry.libelle;
				
				$scope.listeRole.push(role);				
			})
		});
		console.log("Controlleur qui charge la liste des categories ");
		adminServiceAPI.loadCategorie();
	}
	
	// changement de page
	$scope.creerPays = function(){
		$scope.init = false;
		$scope.isModified = false;
		$scope.panelPays= true;
	}

	$scope.creerRole = function(){
		$scope.init = false;
		$scope.isModified = false;
		$scope.panelRole= true;
	}
	
	$scope.creerCategorie = function(){
		$scope.init = false;
		$scope.isModified = false;
		$scope.panelCategorie= true;
	}
	
	$scope.retour = function(){
		$scope.init = true;
		$scope.isModified = false;
		$scope.panelPays= false;
		$scope.panelRole= false;
		$scope.panelCategorie= false;
	}	

	$scope.modifier = function(index,cible){
		console.log("appel a la fonctionnalite de modification pour l'index "+ index )
		$scope.init = false;
		$scope.isModified = true;
		
		var clefRecherche ="";
		
		if(cible == 'pays'){
			$scope.panelPays= true;
			clefRecherche = $scope.listePays[index].code;
		}else if(cible == 'role'){
			$scope.panelRole= true;	
			clefRecherche = $scope.listeRole[index].code;
		}else if(cible == 'categorie'){
			$scope.panelCategorie= true;
			clefRecherche = $scope.listeCategorie[index].code;
		}
		
		$scope.getDetail(clefRecherche,cible);
	}	
	
	// appel aux services
	
	// creation
	$scope.createOrUpdate = function(model, cible, flagModified ){
		console.log("Controlleur qui charge de la creation de pays " + model + " cible " + cible);
		adminServiceAPI.createOrUpdate(model,cible,flagModified).then(function(response){
			$scope.init=true;
			$scope.initialisation();			
		});

	}

	// detail entity
	$scope.getDetail = function(clefRecherche, cible ){
		console.log("Controlleur qui charge de la creation de pays");
		
//		globalServiceAPI.showPleaseWait();
//		dlg = $dialogs.error('This is my error message');
		
		adminServiceAPI.detail(clefRecherche, cible).then(function (response){
			if(cible == 'pays'){
				$scope.pays.libelle = response.data.libelle;
				$scope.pays.codePays = response.data.codePays;
				$scope.pays.idPays = response.data.idPays;
			}else if(cible == 'role'){
				$scope.role.libelle = response.data.libelle;
				$scope.role.codeRole = response.data.codeRole;
				$scope.role.idRole = response.data.idRole;				
			}else if(cible == 'categorie'){
				$scope.categorie.libelle = response.data.libelle;
				$scope.categorie.codeCategorie = response.data.codeCategorie;
				$scope.categorie.idCategorie = response.data.idCategorie;
			}	
		
		});	
//		globalServiceAPI.hidePleaseWait();	
	}
	
}]);