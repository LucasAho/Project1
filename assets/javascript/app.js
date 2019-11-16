var resortZip = 80241;
$("#test").on("click", function() {
    
    var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + resortZip + ",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6"

    // Ajax call using the open weather api
    $.ajax({
        url: openWeatherQueryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

    })
});