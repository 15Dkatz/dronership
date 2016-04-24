// myApp.controller('DroneCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform, $http, $rootScope) {


//   	$scope.test = "testing $scope, $scope works| MAP EXAMPLE";

//   	$scope.long;
//   	$scope.lat;

//   	$scope.showInfo = false;

//   	// get Information method
//   	$scope.myDrone = {
//   		flightTime: 0,
//   		weight: 0,
//   		operatingRange: 0
//   	};

//   	$scope.postPrefix = "";

//   	$scope.calculateLaunchStatus = function(flightTime, weight, operatingRange) {
//   		$scope.postPrefix = "Re-";
//   		$scope.showInfo = true;
//   		// unccomment grabLocation section for the location info
//   		// Grab Location **********
//   		ionic.Platform.ready(function(){
// 	    // Code goes here
//     	$ionicLoading.show({
//             template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
//         });
         
//         var posOptions = {
//             enableHighAccuracy: true,
//             timeout: 20000,
//             maximumAge: 0
//         };
 		
//  		$cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
//             var lat  = position.coords.latitude;
//             var long = position.coords.longitude;
//             var myLatlng = new google.maps.LatLng(lat, long);
//             var mapOptions = {
//                 center: myLatlng,
//                 zoom: 16,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             };          
             
//             var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
             
//             $scope.map = map;   
//             $ionicLoading.hide();           

//             console.log(lat, long, map);

//             // testing latitudes
//             $scope.lat = lat;
//             $scope.long = long;

//             $rootScope.latitude = $scope.lat;
//             $rootScope.longitude = $scope.long;

//             console.log("flightTime", flightTime, "weight", weight, "operatingRange", operatingRange);

//             // $scope.myDrone.flightTime = 0;
// 			if (flightTime!=undefined) {
// 				$scope.myDrone.flightTime = flightTime;
// 			}

// 			// $scope.myDrone.weight = 0;
// 			if (weight!=undefined) {
// 				$scope.myDrone.weight = weight;
// 			}
			
// 			// $scope.myDrone.operatingRange = 0;	
// 			if (operatingRange!=undefined) {
// 				$scope.myDrone.operatingRange = operatingRange;
// 			}




//             getWunderGround();

            
// 	        }, function(err) {
// 	            $ionicLoading.hide();
// 	            console.log(err);
// 	        });
	        
// 		})  


//   		$scope.calculateStatus();

//   	}


//   	$scope.data;
//   	// available data: *****
//   	// weather
//   	// temperature_string
//   	// relative_humidity
//   	// wind_string
//   	// wind_mph
//   	// wind_gust_mph
//   	// observation_location.full

//   	$scope.weather;
//   	$scope.wind_mph;
//   	$scope.wind_gust_mph;
//   	$scope.relative_humidity;
//   	$scope.temp_f;


//   	var getWunderGround = function() {

//   		// uncomment to call API! ******************
// 		var getString = 'http://api.wunderground.com/api/06dfbc32cb33068b/conditions/q/' + $scope.lat + ',' + $scope.long + '.json';

//     	$http({
// 	        method : "GET",
// 	        url : getString
// 	    }).then(function mySuccess(response) {
// 	        // $scope.myWelcome = response.data;
// 	        console.log(response.data);
// 	        $scope.data = response.data.current_observation;


// 	        $scope.weather = $scope.data.weather;
// 		  	$scope.wind_mph = $scope.data.wind_mph;
// 		  	$scope.wind_gust_mph = $scope.data.wind_gust_mph;
// 		  	$scope.relative_humidity = $scope.data.relative_humidity;
// 		  	$scope.temp_f = $scope.data.temp_f;
// 		  	console.log("weather", $scope.weather, "wind_mph", $scope.wind_mph, "gust", $scope.wind_gust_mph, "humidity", $scope.relative_humidity, "temperature", $scope.temp_f);

// 		  	$scope.calculateStatus();
// 	        // 

// 	    }, function myError(response) {
// 	        // $scope.myWelcome = response.statusText;
// 	        console.log(response.statusText);
// 	    });
// 	 	// ******************
	 	

// 	 	$rootScope.$broadcast('mapCentered');

// 	}

// 	$scope.status = 1;

// 	$scope.myDrone;

// 	$scope.showOtherDroneForm = false;

// 	$scope.selectedDrone = function(myDrone) {
// 		console.log("myDrone", myDrone);
// 		switch (myDrone) {
// 			// most common drones
// 			case "DJI Phantom 4":
// 				$scope.showOtherDroneForm = false;
// 				$scope.myDrone = {
// 					flightTime: 28, //minutes
// 					operatingRange: 5000, //operating range
// 					weight: 1380 //grams
// 				}

// 				break;
// 			case "AEE Toruk AP10":
// 				$scope.showOtherDroneForm = false;
// 				$scope.myDrone = {
// 					flightTime: 25, //minutes
// 					operatingRange: 500, //operating range
// 					weight: 1300 //grams
// 				}
// 				break;
// 			// Flypro-XEagle-Sport
// 			case "Flypro XEagle Sport":
// 				$scope.showOtherDroneForm = false;
// 				$scope.myDrone = {
// 					flightTime: 22,
// 					operatingRange: 300,
// 					weight: 1260

// 				}
// 				break;
// 			case "Autel Robotics X-Star Premium":
// 				$scope.showOtherDroneForm = false;
// 				$scope.myDrone = {
// 					flightTime: 25,
// 					operatingRange: 2000,
// 					weight: 1420

// 				}
// 				break;
// 			case "ProDrone Byrd Premium":
// 				$scope.showOtherDroneForm = false;
// 				$scope.myDrone = {
// 					flightTime: 29,
// 					operatingRange: 2000,
// 					weight: 1890

// 				}
// 				break;
// 			case "Not Listed":
// 				$scope.showOtherDroneForm = true;
// 				// default drone specs;
// 				$scope.myDrone = {
// 					// flightTime: 0, //minutes
// 					// operatingRange: 0, //operating range
// 					// weight: 0 //grams
// 				}

// 			default:
// 				break;


// 		}
// 		console.log("drone Object", $scope.myDrone);

// 	}

// 	$scope.flightTime;
// 	$scope.weight;
// 	$scope.operatingRange;


// 	$scope.calculateStatus = function() {
// 		var windMphLimit = 30;
// 		var windGustLimit = 30;
// 		var humidityLimit = 100;
// 		var humidityModifier = .05;

// 		$scope.status = 1;

// 		// Modify the following to implement test conditions **************
// 		// $scope.weather = "Partly Cloudy";
// 		// $scope.wind_mph = 1.8;
// 		// $scope.wind_gust_mph = "10.5";
// 		// $scope.relative_humidity = "64%";
// 		// $scope.temp_f = 63.1;
// 		// console.log("weather", $scope.weather, "wind_mph", $scope.wind_mph, "gust", $scope.wind_gust_mph, "humidity", $scope.relative_humidity, "temperature", $scope.temp_f);

// 		var windMphDanger = $scope.wind_mph/windMphLimit;
// 		$scope.status -= windMphDanger;
// 		// console.log("resulting Status", $scope.status);

// 		var windGustDanger = parseFloat($scope.wind_gust_mph)/windGustLimit;
// 		$scope.status -= windGustDanger;
// 		// console.log("resulting Status", $scope.status);

// 		var humidityDanger = (parseFloat($scope.relative_humidity)/humidityLimit)*humidityModifier;
// 		$scope.status -= humidityDanger;
// 		console.log("resulting Status", $scope.status);


// 		// DroneSpecs previously defined in $scope.calculateLaunchStatus
// 		// add more algorhythmic analysis based on drones ****
// 		// add plusses to the status/percentage based on droneSpecs
// 		var weightGoal = 10000; //grams
// 		var weightPlus = $scope.myDrone.weight/weightGoal //returns a number 0.0-1.0;
// 		$scope.status += weightPlus;
// 		console.log("resulting Status", $scope.status);


// 		if ($scope.status>.75) {
// 			console.log("Clear");
// 			$rootScope.launchStatus = "Clear for takeoff!";
// 		}
// 		else if ($scope.status>.5) {
// 			console.log("A little risky");
// 			$rootScope.launchStatus = "A little risky";	
// 		}
// 		else if ($scope.status>.25) {
// 			console.log("Very risky");	
// 			$rootScope.launchStatus = "Very risky";
// 		}
// 		else {
// 			console.log("No-go");
// 			$rootScope.launchStatus = "No-Go";	
// 		}

// 		$http.get("../geojson/reducedList.geo.json").success(function(data, status) {
//       	for(var i = 0; i < data.features.length; i++)
//       	{

//       		if (gju.pointInPolygon({"type":"Point","coordinates":[$scope.lat,$scope.long]},
//                {"type":"Polygon", "coordinates":data.features[i].geometry.coordinates})
//       			)
//       		{
//       			console.log("in the no fly zone");
//       			break;
//       		}

//       		else{ console.log("ok")}
      		
//       		// console.log(data.features[i].geometry.coordinates.toString())

//       	}

// 		$rootScope.$broadcast("changeLbackground");

// 	}


// $scope.testFunction = function(flightTime, weight, operatingRange) {
// 	// $scope.myDrone.weight = $scope.weight;
// 	console.log("f", flightTime, "w", weight, "or", operatingRange);
// }


// });


// // get geolocation going