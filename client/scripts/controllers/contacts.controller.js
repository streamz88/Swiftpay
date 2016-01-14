angular
  .module('Whatsapp')
  .controller('ContactsCtrl', contactsCtrl);

function contactsCtrl ($scope, $reactive, $cordovaContacts, $ionicPlatform, ionicMaterialMotion) {
  $reactive(this).attach($scope);

  $ionicPlatform.ready(function() {
    $cordovaContacts.find({fields: ''})
    .then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
      $scope.contacts = allContacts;
    });
  });

  // this.helpers({
  //   contacts() {
  //     return $scope.find();
  //   }
  // });
  ////////////
}