(function () {
  'use strict';

  angular
    .module('exchanges')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Exchanges',
      state: 'exchanges',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'exchanges', {
      title: 'List Exchanges',
      state: 'exchanges.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'exchanges', {
      title: 'Create Exchange',
      state: 'exchanges.create',
      roles: ['user']
    });
  }
}());
