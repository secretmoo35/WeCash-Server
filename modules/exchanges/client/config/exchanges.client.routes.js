(function () {
  'use strict';

  angular
    .module('exchanges')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('exchanges', {
        abstract: true,
        url: '/exchanges',
        template: '<ui-view/>'
      })
      .state('exchanges.list', {
        url: '',
        templateUrl: 'modules/exchanges/client/views/list-exchanges.client.view.html',
        controller: 'ExchangesListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Exchanges List'
        }
      })
      .state('exchanges.create', {
        url: '/create',
        templateUrl: 'modules/exchanges/client/views/form-exchange.client.view.html',
        controller: 'ExchangesController',
        controllerAs: 'vm',
        resolve: {
          exchangeResolve: newExchange
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Exchanges Create'
        }
      })
      .state('exchanges.edit', {
        url: '/:exchangeId/edit',
        templateUrl: 'modules/exchanges/client/views/form-exchange.client.view.html',
        controller: 'ExchangesController',
        controllerAs: 'vm',
        resolve: {
          exchangeResolve: getExchange
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Exchange {{ exchangeResolve.name }}'
        }
      })
      .state('exchanges.view', {
        url: '/:exchangeId',
        templateUrl: 'modules/exchanges/client/views/view-exchange.client.view.html',
        controller: 'ExchangesController',
        controllerAs: 'vm',
        resolve: {
          exchangeResolve: getExchange
        },
        data: {
          pageTitle: 'Exchange {{ exchangeResolve.name }}'
        }
      });
  }

  getExchange.$inject = ['$stateParams', 'ExchangesService'];

  function getExchange($stateParams, ExchangesService) {
    return ExchangesService.get({
      exchangeId: $stateParams.exchangeId
    }).$promise;
  }

  newExchange.$inject = ['ExchangesService'];

  function newExchange(ExchangesService) {
    return new ExchangesService();
  }
}());
