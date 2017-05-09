(function () {
  'use strict';

  describe('Exchanges Route Tests', function () {
    // Initialize global variables
    var $scope,
      ExchangesService;

    // We can start by loading the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function ($rootScope, _ExchangesService_) {
      // Set a new global scope
      $scope = $rootScope.$new();
      ExchangesService = _ExchangesService_;
    }));

    describe('Route Config', function () {
      describe('Main Route', function () {
        var mainstate;
        beforeEach(inject(function ($state) {
          mainstate = $state.get('exchanges');
        }));

        it('Should have the correct URL', function () {
          expect(mainstate.url).toEqual('/exchanges');
        });

        it('Should be abstract', function () {
          expect(mainstate.abstract).toBe(true);
        });

        it('Should have template', function () {
          expect(mainstate.template).toBe('<ui-view/>');
        });
      });

      describe('View Route', function () {
        var viewstate,
          ExchangesController,
          mockExchange;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          viewstate = $state.get('exchanges.view');
          $templateCache.put('modules/exchanges/client/views/view-exchange.client.view.html', '');

          // create mock Exchange
          mockExchange = new ExchangesService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Exchange Name'
          });

          // Initialize Controller
          ExchangesController = $controller('ExchangesController as vm', {
            $scope: $scope,
            exchangeResolve: mockExchange
          });
        }));

        it('Should have the correct URL', function () {
          expect(viewstate.url).toEqual('/:exchangeId');
        });

        it('Should have a resolve function', function () {
          expect(typeof viewstate.resolve).toEqual('object');
          expect(typeof viewstate.resolve.exchangeResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(viewstate, {
            exchangeId: 1
          })).toEqual('/exchanges/1');
        }));

        it('should attach an Exchange to the controller scope', function () {
          expect($scope.vm.exchange._id).toBe(mockExchange._id);
        });

        it('Should not be abstract', function () {
          expect(viewstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(viewstate.templateUrl).toBe('modules/exchanges/client/views/view-exchange.client.view.html');
        });
      });

      describe('Create Route', function () {
        var createstate,
          ExchangesController,
          mockExchange;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          createstate = $state.get('exchanges.create');
          $templateCache.put('modules/exchanges/client/views/form-exchange.client.view.html', '');

          // create mock Exchange
          mockExchange = new ExchangesService();

          // Initialize Controller
          ExchangesController = $controller('ExchangesController as vm', {
            $scope: $scope,
            exchangeResolve: mockExchange
          });
        }));

        it('Should have the correct URL', function () {
          expect(createstate.url).toEqual('/create');
        });

        it('Should have a resolve function', function () {
          expect(typeof createstate.resolve).toEqual('object');
          expect(typeof createstate.resolve.exchangeResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(createstate)).toEqual('/exchanges/create');
        }));

        it('should attach an Exchange to the controller scope', function () {
          expect($scope.vm.exchange._id).toBe(mockExchange._id);
          expect($scope.vm.exchange._id).toBe(undefined);
        });

        it('Should not be abstract', function () {
          expect(createstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(createstate.templateUrl).toBe('modules/exchanges/client/views/form-exchange.client.view.html');
        });
      });

      describe('Edit Route', function () {
        var editstate,
          ExchangesController,
          mockExchange;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          editstate = $state.get('exchanges.edit');
          $templateCache.put('modules/exchanges/client/views/form-exchange.client.view.html', '');

          // create mock Exchange
          mockExchange = new ExchangesService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Exchange Name'
          });

          // Initialize Controller
          ExchangesController = $controller('ExchangesController as vm', {
            $scope: $scope,
            exchangeResolve: mockExchange
          });
        }));

        it('Should have the correct URL', function () {
          expect(editstate.url).toEqual('/:exchangeId/edit');
        });

        it('Should have a resolve function', function () {
          expect(typeof editstate.resolve).toEqual('object');
          expect(typeof editstate.resolve.exchangeResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(editstate, {
            exchangeId: 1
          })).toEqual('/exchanges/1/edit');
        }));

        it('should attach an Exchange to the controller scope', function () {
          expect($scope.vm.exchange._id).toBe(mockExchange._id);
        });

        it('Should not be abstract', function () {
          expect(editstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(editstate.templateUrl).toBe('modules/exchanges/client/views/form-exchange.client.view.html');
        });

        xit('Should go to unauthorized route', function () {

        });
      });

    });
  });
}());
