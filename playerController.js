angular
.module('elektroApp', ['ngCookies'])
.controller('playerController', ['$scope', '$cookies', function ($scope, $cookies) {
	$scope.players = [];
	var cachedPlayers = $cookies.getObject('players');
	if (cachedPlayers != undefined && cachedPlayers != null) {
		$scope.players = cachedPlayers;
	}
	
	$scope.startingMoney = 0;
	
	$scope.visibleAddMoneyIndex = -1;
	$scope.addMoneyAmount = 0;
	
	$scope.addPlayerFormButtonHide = false;
	$scope.addPlayerFormVisible = false;
	
	$scope.newPlayerName = '';
	
	$scope.toggleAddPlayerForm = function() {
		$scope.addPlayerFormButtonHide = true;
		$scope.addPlayerFormVisible = true;
	};
	
	$scope.addMoneyValue = function(index, player) {
		if (index != $scope.visibleAddMoneyIndex) {
			$scope.addMoneyAmount = 0;
			
			$scope.visibleAddMoneyIndex = index;
		} else {
			var money = parseInt($scope.addMoneyAmount)
			if (!isNaN(money)) {
				player.money += parseInt($scope.addMoneyAmount);
			}
			$cookies.putObject('players', $scope.players);
			
			$scope.addMoneyAmount = 0;
			
			$scope.visibleAddMoneyIndex = -1;
		}
	};
	
	$scope.addPlayer = function() {
		$scope.players.push({ name: $scope.newPlayerName, money: $scope.startingMoney });
		$cookies.putObject('players', $scope.players);
		
		$scope.addPlayerFormButtonHide = false;
		$scope.addPlayerFormVisible = false;
		
		$scope.newPlayerName = '';
		
		$scope.addMoneyAmount = 0;
		
		$scope.visibleAddMoneyIndex = -1;
	};
	
	$scope.addPlayerCancel = function() {
		$scope.addPlayerFormButtonHide = false;
		$scope.addPlayerFormVisible = false;
		
		$scope.newPlayerName = '';
	};
	
	$scope.removePlayer = function(player) {
		$scope.players.splice($scope.players.indexOf(player), 1);
		$cookies.putObject('players', $scope.players);
		
		$scope.addMoneyAmount = 0;
		
		$scope.visibleAddMoneyIndex = -1;
	};
}])
.directive('focusOnShow', function($timeout) {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            if ($attr.ngShow){
                $scope.$watch($attr.ngShow, function(newValue){
                    if(newValue){
                        $timeout(function(){
                            $element[0].focus();
							$element[0].select();
                        }, 0);
                    }
                })      
            }
            if ($attr.ngHide){
                $scope.$watch($attr.ngHide, function(newValue){
                    if(!newValue){
                        $timeout(function(){
                            $element[0].focus();
							$element[0].select();
                        }, 0);
                    }
                })      
            }

        }
    };
})
.directive('confirmClick', [function(){
	return {
	  priority: -1,
	  restrict: 'A',
	  link: function(scope, element, attrs){
		element.bind('click', function(e){
		  var message = attrs.confirmClick;
		  if(message && !confirm(message)){
			e.stopImmediatePropagation();
			e.preventDefault();
		  }
		});
	  }
	};
}]);
