'use strict';

angular.module('clientApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        authenticate: 'admin'
      });
  });
