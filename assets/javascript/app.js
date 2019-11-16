var resortId = ["20", "25", "36", "77", "113", "120", "1673", "143", "181", "197", "220", "240", "329", 
"330", "1435", "372", "425", "445", "456", "482", "507", "511"]

var resortZip = 80435;
$("#test").on("click", function() {
    
    var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + resortZip + ",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6"

    // Ajax call using the open weather api
    $.ajax({
        url: openWeatherQueryURL,
        method: "GET"
    })
    .then(function(response) {
        var weatherArray = (response.list);
        console.log(weatherArray[5]);
        console.log(weatherArray[5].main.temp);
        console.log(weatherArray[5].wind.speed);
        console.log(weatherArray[5].weather[0].description);
    })
}) 

/* Arapahoe Basin 20, Aspen Snowmass 25, Aspen Highlands 25, Aspen Mountain 25, Beaver Creek 36, Breckenridge 77, Buttermilk 25, 
Copper 113, Crested Butte 120, echo mountain 1673, Eldora 143, GRANBY NO RESULT, Howelson 181, Keystone 197, Loveland 220, 
Monarch Mtn 240, PowderHorn 329, Purgatory 330, Silverton 1435, Ski Cooper 372, Steamboat 425, Sunlight Mtn 445, Telluride 456, 
Vail 482, Winter Park 507, Wolf Creek 511,
*/

