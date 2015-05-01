'use strict';

angular.module('animalfarm')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('dogs', {url: '/dogs', templateUrl: '/views/dogs/dogs.html', abstract: true})
  .state('dogs.list', {url: '', templateUrl: '/views/dogs/dogs-list.html', controller: 'DogsListCtrl'})
  .state('dogs.new', {url: '/new', templateUrl: '/views/dogs/dogs-new.html', controller: 'DogsNewCtrl'})
  .state('dogs.show', {url: '/{dogId}', templateUrl: '/views/dogs/dogs-show.html', controller: 'DogsShowCtrl'});


});
