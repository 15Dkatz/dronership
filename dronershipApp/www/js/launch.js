myApp.controller('LaunchCtrl', function($scope, $rootScope) {
	$scope.backgroundStyle = "clear";

	$scope.icon = "";

	$rootScope.$on("changeLbackground", function() {
		switch($rootScope.launchStatus) {
			case "Clear for takeoff!":
				$scope.backgroundStyle = "clear";
				$scope.icon = "ion-checkmark-circled";
				$scope.iconColor = "dark";
				break;

			case "No-Go":
				$scope.backgroundStyle = "no-go";
				$scope.icon = "ion-close-circled";
				$scope.iconColor = "light";
				break;
			case "Very risky":
				$scope.backgroundStyle = "very-risky";
				$scope.icon = "ion-alert-circled";
				$scope.iconColor = "light";
				break;
			case "A little risky":
				$scope.backgroundStyle = "little-risky";
				$scope.icon = "ion-alert-circled";
				$scope.iconColor = "dark";
				break;
		}
	})

})
