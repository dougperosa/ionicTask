// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('mainController', function($scope, $ionicPopup, $ionicListDelegate){
  /*$scope.mensagem = "Hello World!";

  $scope.lista = ['A','B','C','D'];

  $scope.newMensagem = function(novaMensagem){
    $scope.mensagem = novaMensagem;
  }*/

  var tasks = new getTasks();

  $scope.lista = tasks.itens;
  $scope.showMarked = false;
  $scope.removeStatus = false;

  function showPopup(item, novo){
    $scope.data = {};
    $scope.data.newTask = item.nome;

    $ionicPopup.show({
      title: "Nova Tarefa",
      scope: $scope,
      template: "<input type='text' placeholder='Tarefa' autofocus='true' ng-model='data.newTask'>",
      buttons: [
        {text: "Ok",
      onTap: function(e){
        item.nome = $scope.data.newTask;
        if (novo) {
          tasks.add(item);
        }
      }},
        {text: "Cancel"}
      ]
    });
    $ionicListDelegate.closeOptionButtons();
  };

  $scope.onMarkTask = function(item){
    console.log("Passou!");
    item.status = !item.status;
  };

  $scope.onHideItem = function(item){
    return item.status && !$scope.showMarked;
  };

  $scope.onRemoveItem = function(item){
    tasks.remove(item);
  };

  $scope.onItemAdd = function(){
    var item = {nome: "", status: false};
    showPopup(item, true);
  };

  $scope.onItemEdit = function(item){
    showPopup(item);
  };

  $scope.onClickRemove = function(){
    $scope.removeStatus = !$scope.removeStatus;
  };

});
