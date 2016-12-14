// Uber API Constants Note: Using an OAuth 2.0 bearer token would require our users to log in with their Uber accounts, and would grant us access to the User Activity and User Profile endpoints. So we need to do this for it to truly work. 
var uberClientId = "XXpsVFuuKCVJup4n2nXMC-4pdIT90srQ";
var uberServerToken = "RwqkAh95DAybZQoimqdoqeC-l3cNYwN749AjMqkh";

// create placeholder variables
var userLatitude;
var userLongitude;
var salonLatitude = 38.915286;
var salonLongitude = -77.031726;

navigator.geolocation.watchPosition(function(position) {
    console.log(position);
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
});

// Create variable to store timer
var timer;

navigator.geolocation.watchPosition(function(position) {
    // Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;

  // Create timer if needed
  // Once initialized, it will fire every 60 seconds as recommended by the Uber API
  // We only create the timer after we've gotten the user's location for the first time
  if (typeof timer === typeof undefined) {
    timer = setInterval(function() {
        getEstimatesForUserLocation(userLatitude, userLongitude);
    }, 60000);

    // Query Uber API if needed
    getEstimatesForUserLocation(userLatitude, userLongitude);
  }
});

function getEstimatesForUserLocation(latitude,longitude) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "Token " + uberServerToken
    },
    data: {
        start_latitude: latitude,
        start_longitude: longitude,
        end_latitude: salonLatitude,
        end_longitude: salonLongitude
    },
    success: function(result) {
        console.log(result);
        
        var data = result["prices"];
        console.log(data);
        if (typeof data != typeof undefined) {
          // Sort Uber products by time to the user's location
          data.sort(function(t0, t1) {
            return t0.duration - t1.duration;
          });

          // Update the Uber button with the shortest time
          var shortest = data[0];
          if (typeof shortest != typeof undefined) {
            console.log("Updating time estimate...");
            $("#time").html("IN " + Math.ceil(shortest.duration / 60.0) + " MIN");
          }
        }
    }
  });
}

$(".location a").click(function(event){
	// Redirect to Uber API via deep-linking to the mobile web-app
	var uberURL = "https://m.uber.com/sign-up?";

// Add parameters
uberURL += "client_id=" + uberClientId;
if (typeof userLatitude != typeof undefined) uberURL += "&" + "pickup_latitude=" + userLatitude;
if (typeof userLongitude != typeof undefined) uberURL += "&" + "pickup_longitude=" + userLongitude;
uberURL += "&" + "dropoff_latitude=" + partyLatitude;
uberURL += "&" + "dropoff_longitude=" + partyLongitude;
uberURL += "&" + "dropoff_nickname=" + "ImmortalBelovedDC";

// Redirect to Uber
window.location.href = uberURL;
});