(function(){
    angular.module('app', []);

    angular.module('app').controller('AppCtrl', function($scope, $window){
        $scope.newName = '';
        $scope.newNumber = '';
        $scope.contacts = [];

        $scope.addContact = addContact;

        if($window.localStorage.length){
            $scope.contacts = JSON.parse($window.localStorage.getItem('contacts'));
        }

        function addContact() {
            var newContact = {
                name: $scope.newName,
                number: $scope.newNumber
            };
            if(newContact.name && newContact.number) {
                $scope.contacts.unshift(newContact);
                $window.localStorage.setItem('contacts', JSON.stringify($scope.contacts));
            }
        }

    });

})();
