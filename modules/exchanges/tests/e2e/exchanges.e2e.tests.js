'use strict';

describe('Exchanges E2E Tests:', function () {
  describe('Test Exchanges page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/exchanges');
      expect(element.all(by.repeater('exchange in exchanges')).count()).toEqual(0);
    });
  });
});
