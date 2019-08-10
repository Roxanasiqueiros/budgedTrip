const GAPI_KEY = "wnPHFfAUjeylUG0GBPOAv0vHbBSdXRPT";


$(document).ready(function () {
    L.mapquest.key = GAPI_KEY
    let userLoc;
    // navigator.geolocation.getCurrentPosition((loc) => userLoc = loc);


    function addressToCoords(address) {
        const url = "http://open.mapquestapi.com/geocoding/v1/address?location=" + address + "&key=" + GAPI_KEY;
        console.log(url);
        $.getJSON(url, function (coords) {
            console.log(coords);
            });
    }


    $("#plan").click(function (event) {
        event.preventDefault();
        const from = $("#from").val();
        const to = $("#to").val();
        var map = L.mapquest.map('map', {
            center: [37.7749, -122.4194],
            layers: L.mapquest.tileLayer('map'),
            zoom: 13
          });
        L.mapquest.directions().route({
            start: from,
            end: to,
            options: {
              timeOverage: 25,
              maxRoutes: 3,
            }
          });
    });
})




