'use strict';

var tableRoutage = angular.module('tableRoutage',['ngRoute', 'ngResource']);


// on mettra que les onglets de niveau 2  
tableRoutage.config(function($routeProvider, $httpProvider){
	console.log("lancement de l' analyse url");
	$routeProvider.when(
			'/accueil',{
				templateUrl : './pages/acceuil.html',
				controller  :  'acceuilControlleurs'
			}
			);	
	$routeProvider.when(
			'/recherche',{
				templateUrl : './pages/ressources/recettes/rechercheRecette.html',
				controller  :  'rechercheControlleur'
			}
			);
	$routeProvider.when(
			'/avis',{
				templateUrl : './pages/ressources/recettes/view/avis.html',
				controller  :  'rechercheControlleur'
			}
			);
	$routeProvider.when(
			'/preparation',{
				templateUrl : './pages/ressources/recettes/rechercheRecette.html',
				controller  :  'rechercheControlleur'
			}
			);
	$routeProvider.when(
			'/recommendations',{
				templateUrl : './pages/ressources/recettes/recommendation.html',
				controller  :  'recommendationControlleur'
		}
		);
//	$routeProvider.when(
//			'/admin',{
//				templateUrl : './pages/admin/template.html',
//				controller  :  'adminControlleur'
//			});
	$routeProvider.when(
			'/users',{
				templateUrl : './pages/admin/utilisateur/users.html',
				controller  :  'personneControlleur'
			});
	$routeProvider.when(
			'/referentiels',{
				templateUrl : './pages/admin/ref/referentiels.html',
				controller  :  'referentielControlleur'
			});	
//	$routeProvider.otherwise(
//			{
//				templateUrl : './pages/acceuil.html'
//
//			});
	
});