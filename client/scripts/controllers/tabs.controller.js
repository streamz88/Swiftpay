angular
  .module('Whatsapp')
  .controller('TabsCtrl', TabsCtrl);

function TabsCtrl($document, ionicMaterialInk, ionicMaterialMotion, $timeout) {
  ////////////

  $timeout(function(){
    ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
  },0);


}