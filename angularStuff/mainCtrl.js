angular.module('routerApp').controller('mainCtrl',function($scope,$stateParams,$locations,myService){

  var id = $stateParams;

  mainService.getRecentProject(id);




});
