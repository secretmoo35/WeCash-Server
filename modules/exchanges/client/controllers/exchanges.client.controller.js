(function () {
  'use strict';

  // Exchanges controller
  angular
    .module('exchanges')
    .controller('ExchangesController', ExchangesController);

  ExchangesController.$inject = ['$scope', '$state', '$window', 'Authentication', 'exchangeResolve'];

  function ExchangesController ($scope, $state, $window, Authentication, exchange) {
    var vm = this;

    vm.authentication = Authentication;
    vm.exchange = exchange;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Exchange
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.exchange.$remove($state.go('exchanges.list'));
      }
    }

    // Save Exchange
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.exchangeForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.exchange._id) {
        vm.exchange.$update(successCallback, errorCallback);
      } else {
        vm.exchange.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('exchanges.view', {
          exchangeId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
