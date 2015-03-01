'use strict';

describe('Controller: BookingsCtrl', function () {

  // load the controller's module
  beforeEach(module('timaxjsPrototypeClientApp'));

  var BookingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookingsCtrl = $controller('BookingsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
