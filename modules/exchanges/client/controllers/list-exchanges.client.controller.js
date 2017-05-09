(function () {
  'use strict';

  angular
    .module('exchanges')
    .controller('ExchangesListController', ExchangesListController);

  ExchangesListController.$inject = ['ExchangesService'];

  function ExchangesListController(ExchangesService) {
    var vm = this;

    vm.exchanges = ExchangesService.query();
  }
}());
