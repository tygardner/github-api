var app = angular.module('github-api');

app.controller('homeCtrl', function($scope, mainService){

	$scope.getUserData = function(){
		mainService.getUser($scope.searchText).then(function(res){
			$scope.user = res.data;
		})
	}

	


})//end app.service