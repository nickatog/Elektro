angular
.module('elektroApp', [])
.controller('playerController',
function ($scope) {
	$scope.players = [];
	
	$scope.startingMoney = 50;
	
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
			$scope.players.push({ name: $scope.newPlayerName, money: $scope.startingMoney });
			
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
	
	$scope.removePlayer =
		function(player) {
			$scope.players.splice($scope.players.indexOf(player), 1);
		};
});
