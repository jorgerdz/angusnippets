/**
 * angusnippets
 * Snippets directive for AngularJS
 * By Jorge Rodríguez
 * Based on the angucomplete directive by Daryl Rowland
 */

angular.module('angusnippets', [] )
    .directive('angusnippets', function ($timeout) {
    return {
        restrict: 'E',
        scope: {
            "id": "@id",
            "placeholder": "@placeholder",
            "selectedObject": "=selectedobject",
            "snippets": "=snippets",
            "keyCall": "@key",
            "inputClass": "@inputclass"
        },
        template: '<div class="angusnippets-holder"><input id="{{id}}_value" ng-model="inputStr" type="text" placeholder="{{placeholder}}" class="{{inputClass}}" onmouseup="this.select();" ng-focus="resetHideResults()" ng-blur="hideResults()" /><div id="{{id}}_dropdown" class="angusnippets-dropdown" ng-if="showDropdown"><div class="angusnippets-row" ng-repeat="result in snippets" ng-mousedown="selectResult(result)" ng-mouseover="hoverRow()" ng-class="{\'angusnippets-selected-row\': $index == currentIndex}"><div class="angusnippets-title">{{ result.title }}</div></div></div></div>',

        link: function($scope, elem, attrs) {
            $scope.currentIndex = null;
            $scope.searchTimer = null;
            $scope.hideTimer = null;
            $scope.pause = 500;
            $scope.inputStr = null;

            $scope.hideResults = function() {
                $scope.hideTimer = $timeout(function() {
                    $scope.showDropdown = false;
                }, $scope.pause);
            };

            $scope.resetHideResults = function() {
                if($scope.hideTimer) {
                    $timeout.cancel($scope.hideTimer);
                };
            };

            $scope.hoverRow = function(index) {
                $scope.currentIndex = index;
            }

            $scope.keyPressed = function(event) {
                if (!(event.which == 38 || event.which == 40 || event.which == 13)) {
                    if (!$scope.inputStr || $scope.inputStr == "" || $scope.inputStr[0] != $scope.keyCall) {
                        $scope.showDropdown = false;
                    } else if ($scope.inputStr[0] == $scope.keyCall) {
                        $scope.showDropdown = true;
                        $scope.currentIndex = -1;
                        $scope.$apply();
                    }
                } else {
                    event.preventDefault();
                }
            }

            $scope.selectResult = function(result) {
                $scope.inputStr = result.title;
                $scope.selectedObject = result;
                $scope.showDropdown = false;
                //$scope.$apply();
            }

            var inputField = elem.find('input');

            inputField.on('keyup', $scope.keyPressed);

            elem.on("keyup", function (event) {
                if(event.which === 40) {
                    if ($scope.snippets && ($scope.currentIndex + 1) < $scope.snippets.length) {
                        $scope.currentIndex ++;
                        $scope.$apply();
                        event.preventDefault;
                        event.stopPropagation();
                    }

                    $scope.$apply();
                } else if(event.which == 38) {
                    if ($scope.currentIndex >= 1) {
                        $scope.currentIndex --;
                        $scope.$apply();
                        event.preventDefault;
                        event.stopPropagation();
                    }

                } else if (event.which == 13) {
                    if ($scope.snippets && $scope.currentIndex >= 0 && $scope.currentIndex < $scope.snippets.length) {
                        $scope.selectResult($scope.snippets[$scope.currentIndex]);
                        $scope.$apply();
                        event.preventDefault;
                        event.stopPropagation();
                    } else {
                        $scope.snippets = [];
                        $scope.$apply();
                        event.preventDefault;
                        event.stopPropagation();
                    }

                } else if (event.which == 27) {
                    $scope.snippets = [];
                    $scope.showDropdown = false;
                    $scope.$apply();
                } else if (event.which == 8) {
                    $scope.selectedObject = null;
                    $scope.$apply();
                }
            });

        }
    };
});

