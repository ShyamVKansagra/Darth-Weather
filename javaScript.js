window.addEventListener('load', 
  	getLocation()
  , false);

function getLocation() {
	var x = document.getElementById("demo");
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
	console.log("something");
	var x = document.getElementById("demo");
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 

    var theUrl = "https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude;
    httpGetAsync(theUrl);
}

function httpGetAsync(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
            var weatherData = JSON.parse(xmlHttp.responseText);
        	console.log(weatherData["main"]["temp"]);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

