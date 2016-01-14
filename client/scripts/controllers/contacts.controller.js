angular
  .module('Whatsapp')
  .controller('ContactsCtrl', contactsCtrl);

function contactsCtrl ($scope, $reactive, $cordovaContacts, $ionicPlatform) {
  $reactive(this).attach($scope);


  function getAllContacts () {
      $cordovaContacts.find([])
        .then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
          this.contacts = allContacts;
        });
  }

  $ionicPlatform.ready(function() {
    getAllContacts();
  });




  // this.helpers({
  //   contacts() {
  //     return $scope.find();
  //   }
  // });
  ////////////
}