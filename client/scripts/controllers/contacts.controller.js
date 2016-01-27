angular
  .module('Whatsapp')
  .controller('ContactsCtrl', contactsCtrl);

function contactsCtrl ($scope, $reactive, $cordovaContacts, $ionicPlatform) {
  $reactive(this).attach($scope);

  $ionicPlatform.ready(function() {
    $cordovaContacts.find({fields: ''})
    .then(function(allContacts) {
      this.contacts = allContacts;
    });
  }); 
}