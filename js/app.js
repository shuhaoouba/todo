(function (window) {
	'use strict';

	angular.module('appModule',[]).
		controller("mainController",["$scope",function($scope){
			function id(){
				var id = Math.random();
				return id;
			};
			$scope.arr = {
				name:"",
				id:id(),
				complete:false
			};
			$scope.arrs = [
				{name:"上课",id:id(),complete:false},
				{name:"吃饭",id:id(),complete:true},
				{name:"睡觉",id:id(),complete:false}
			]
		}]);
	

})(window);
