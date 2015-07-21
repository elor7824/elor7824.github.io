/*

Configuration here !

Done by Dacal - Modded by Schnedi // don't remove this line motherfucker //

For weather code, go to http://weather.yahoo.com/ and search for your city. The correct zip code is in the URL (only numbers)

*/



var Clock = "12h";		  // choose between "12h" or "24h"

var lang = "en";		 // (fr) for french, (de) for german, (sp) for spanish, (it) for italian, (en) for english

var startonMonday = false;    // Set to "true" if you want the widget to start on Mon.





var gps = true; 	      // Requires MyLocation app

var locale = 2391279;	       // Yahoo Weather (used if gps set to false or myLocation.txt file not found)

var tempUnit = "f";	       // f for fahrenheit

var iconSet = "Klear"		// add your own set

var updateInterval = 60;       // in minutes





/*

Options below are for specific situations.

*/



var UseCityGPS = false;        // If your city is innacurate with Yahoo, you can try to use the GPS localization (if available).

var UseNeighborhood = false;	// If your city is inaccurate with GPS localization, you can try to use the neighborhood (or state).

