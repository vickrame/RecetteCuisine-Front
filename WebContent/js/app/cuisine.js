'use strict';

//'tableRoutage','personneService','referentielService','recetteService'
var recetteCuisine = angular.module('recetteCuisine', ['ngRoute','adminService','tableRoutage','recetteServiceModule']);


////on mettra que les onglets de niveau 2  
//recetteCuisine.config(function($routeProvider, $httpProvider){
//	console.log("lancement de l' analyse url");
//	$routeProvider.when(
//			'/accueil',{
//				templateUrl : './pages/acceuil.html',
//				controller  :  'acceuilControlleurs'
//			}
//			);	
//	$routeProvider.when(
//			'/recherche',{
//				templateUrl : './pages/ressources/recettes/rechercheRecette.html',
//				controller  :  'rechercheControlleur'
//			}
//			);
//	
//	$routeProvider.when(
//			'/recette',{
//				templateUrl : './pages/ressources/recettes/view/detailRecette.html',
//				controller  :  'rechercheControlleur'
//			}
//			);	
//	$routeProvider.when(
//			'/preparation',{
//				templateUrl : './pages/ressources/recettes/rechercheRecette.html',
//				controller  :  'rechercheControlleur'
//			}
//			);
//	$routeProvider.when(
//			'/recommendations',{
//				templateUrl : './pages/ressources/recettes/recommendation.html',
//				controller  :  'recommendationControlleur'
//		}
//		);
////	$routeProvider.when(
////			'/admin',{
////				templateUrl : './pages/admin/template.html',
////				controller  :  'adminControlleur'
////			});
//	$routeProvider.when(
//			'/users',{
//				templateUrl : './pages/admin/utilisateur/users.html',
//				controller  :  'personneControlleur'
//			});
//	$routeProvider.when(
//			'/referentiels',{
//				templateUrl : './pages/admin/ref/referentiels.html',
//				controller  :  'referentielControlleur'
//			});	
////	$routeProvider.otherwise(
////			{
////				templateUrl : './pages/acceuil.html'
////
////			});
//	
//});
