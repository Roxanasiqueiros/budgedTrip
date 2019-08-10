const GAPI_KEY = "wnPHFfAUjeylUG0GBPOAv0vHbBSdXRPT";


$(document).ready(function () {
    L.mapquest.key = GAPI_KEY
    let userLoc;
    // navigator.geolocation.getCurrentPosition((loc) => userLoc = loc);


    function coordsToAdress(coords) {
        const url =`https://www.mapquestapi.com/geocoding/v1/reverse?key=${GAPI_KEY}&location=${coords.coords.latitude},${coords.coords.longitude}`;
        console.log(coords);
        $.getJSON(url, function (response) {
            const addressObject = response.results[0].locations[0];
            const address = `${addressObject.street}, ${addressObject.adminArea5}, ${addressObject.adminArea3}`
            $("#from").val(address);
            console.log(coords);
            });
    }
    $("#my-location").click(function (event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(coordsToAdress);
    })

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




