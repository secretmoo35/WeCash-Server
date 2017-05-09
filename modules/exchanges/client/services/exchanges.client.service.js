// Exchanges service used to communicate Exchanges REST endpoints
(function () {
  'use strict';

  angular
    .module('exchanges')
    .factory('ExchangesService', ExchangesService);

  ExchangesService.$inject = ['$resource'];

  function ExchangesService($resource) {
    return $resource('api/exchanges/:exchangeId', {
      exchangeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
