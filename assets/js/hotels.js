function getAuth(){
    console.log("getAuth");

    $.ajax({
        type: "POST",
        url:"https://test.api.amadeus.com/v1/security/oauth2/token",
        data:null,
        headers: { 
            "grant_type": "client_credentials",
            "client_id": "5ewWjS09UIXxx9usOWvnWqdSAYaPsbrK",
            "client_secret": "BZktsIUhuyjHJfcm",
            "content-type": "application/x-www-form-urlencoded"


        },
        complete: function(text){
            
                var accessToken = text.access_token;
                console.log("gotaccessToken: "+accessToken);
                getHotels(accessToken);
    

        }
    });
    

    /*
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://test.api.amadeus.com/v1/security/oauth2/token", true);
    xhttp.setRequestHeader("grant_type", "client_credentials");
    xhttp.setRequestHeader("client_id", "5ewWjS09UIXxx9usOWvnWqdSAYaPsbrK");
    xhttp.setRequestHeader("client_secret", "BZktsIUhuyjHJfcm");
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var accessToken = this.responseText.access_token;
            console.log("gotaccessToken");
            getHotels(accessToken);

            
        }
   };
   xhttp.send("");
   */
} 


function getHotels(accessToken) {
    console.log("getHotels");
    var price = Array();
    var location = Array();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             console.log("gotHotels");
             var hotelResponse = this.responseText;
             hotelResponse = JSON.parse(hotelResponse);
             console.log(hotelResponse);
             for (var i = 0; i < hotelResponse.data.length; i++){
                 var hotel = hotelResponse.data[i];
                 location.push(hotel.hotel.address.cityName);
                 price.push(hotel.offers.price.total);
                 console.log(hotel);

             }
         }
    };
    xhttp.open("GET", "https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=MAD", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Authorization","Bearer " + accessToken); 
    xhttp.send("");
}

getAuth();
