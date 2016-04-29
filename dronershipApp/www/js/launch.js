myApp.controller('LaunchCtrl', function($scope, $rootScope) {
	$scope.backgroundStyle = "clear";

	$scope.icon = "";

	$rootScope.$on("changeLbackground", function() {
		switch($rootScope.launchStatus) {
			case "Not in a No-Fly Zone. Clear for takeoff!":
				$scope.backgroundStyle = "clear";
				$scope.icon = "ion-checkmark-circled";
				$scope.iconColor = "dark";
				break;

			case "In No-Fly Zone. No-go." || "Weather says No-Go.":
				$scope.backgroundStyle = "no-go";
				$scope.icon = "ion-close-circled";
				$scope.iconColor = "light";
				break;
			case "Not in a No-Fly Zone. But very risky.":
				$scope.backgroundStyle = "very-risky";
				$scope.icon = "ion-alert-circled";
				$scope.iconColor = "light";
				break;
			case "Not in a No-Fly Zone. But a little risky.":
				$scope.backgroundStyle = "little-risky";
				$scope.icon = "ion-alert-circled";
				$scope.iconColor = "dark";
				break;
		}
	})

})
