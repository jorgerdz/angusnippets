app.controller('MainController', ['$scope', '$http',
    function MainController($scope, $http) {

      $scope.snippetsAvailable = [
            { title : "Here's the first snippet" },
          { title : "And another one" },
          { title : "One last one" }
      ];

      $scope.trigger = '@';

    }
]);