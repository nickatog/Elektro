angular
.module('elektroApp', [])
.controller('playerController',
function ($scope) {
	$scope.players = [];
	
	$scope.addPlayerFormButtonHide = false;
	$scope.addPlayerFormVisible = false;
	
	$scope.newPlayerName = '';
	
	$scope.toggleAddPlayerForm =
		function() {
			$scope.addPlayerFormButtonHide = true;
			$scope.addPlayerFormVisible = true;
		};
	
	$scope.addPlayer =
		function() {
			$scope.players.push({ name: $scope.newPlayerName, money: 0 });
			
			$scope.addPlayerFormButtonHide = false;
			$scope.addPlayerFormVisible = false;
			
			$scope.newPlayerName = '';
		};
	
	$scope.addPlayerCancel =
		function() {
			$scope.addPlayerFormButtonHide = false;
			$scope.addPlayerFormVisible = false;
			
			$scope.newPlayerName = '';
		};
});
