var app = angular.module('github-api');

app.service('mainService', function($http, $q){

  var id = "myCLientID";
  var sec = "mySecretKeyThing";
  var param = "?client_id=" + id + "&client_secret=" + sec;

  this.getUser = function(username){
  	var deferred = $q.defer();
  		$http({
  		method: 'GET',
  		url: 'https://api.github.com/users/' + username
  	}).then(function(res){
  		console.log(res)
  		deferred.resolve(res);
  	})
  		return deferred.promise
  }

});//app.controller