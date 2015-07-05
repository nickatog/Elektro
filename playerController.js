angular
.module('elektroApp', [])
.controller('playerController',
function ($scope) {
	$scope.players = [];
	
	$scope.startingMoney = 50;
	
	$scope.visibleAddMoneyIndex = -1;
	$scope.addMoneyAmount = 0;
	
	$scope.addPlayerFormButtonHide = false;
	$scope.addPlayerFormVisible = false;
	
	$scope.newPlayerName = '';
	
	$scope.toggleAddPlayerForm =
		function() {
			$scope.addPlayerFormButtonHide = true;
			$scope.addPlayerFormVisible = true;
		};
	
	$scope.addMoneyValue =
		function(index, player) {
			if (index != $scope.visibleAddMoneyIndex) {
				$scope.addMoneyAmount = 0;
				
				$scope.visibleAddMoneyIndex = index;
			} else {
				player.money += parseInt($scope.addMoneyAmount);
				$scope.addMoneyAmount = 0;
				
				$scope.visibleAddMoneyIndex = -1;
			}
		};
	
	$scope.addPlayer =
		function() {
			$scope.players.push({ name: $scope.newPlayerName, money: $scope.startingMoney });
			
			$scope.addPlayerFormButtonHide = false;
			$scope.addPlayerFormVisible = false;
			
			$scope.newPlayerName = '';
			
			$scope.addMoneyAmount = 0;
			
			$scope.visibleAddMoneyIndex = -1;
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
			
			$scope.addMoneyAmount = 0;
			
			$scope.visibleAddMoneyIndex = -1;
		};
});
