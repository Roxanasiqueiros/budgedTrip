var food = "b15b650057a1d97cfef1447f76f3eaab";


function getLocation(location_search){
    console.log("getLocation");
    

    const url ="https://developers.zomato.com/api/v2.1/cities?q="+location_search+"&city_ids=10883&count=5";
 
 
    $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("user-key", 'b15b650057a1d97cfef1447f76f3eaab');
        },
        dataType: "json",
        url: url,
        success: function(data) {
            console.log("got location");
            var id = data.location_suggestions[0].id;
            console.log(id);
            getRestaurant(id);
                
                

        }

    });
}

function getRestaurant(id){
    console.log("getRestaurant");
    var restaurants = new Array();

    const url ="https://developers.zomato.com/api/v2.1/search?entity_id="+id+"&entity_type=city&cuisines=3";
 
    $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("user-key", 'b15b650057a1d97cfef1447f76f3eaab');
        },
        dataType: "json",
        url: url,
        success: function(data) {
            console.log("gotRestaurant");
            for (var i = 0; i < data.restaurants.length; i++){
                var restaurant = data.restaurants[i];
                restaurants.push(restaurant.restaurant.name);
                
                

            } 
            console.log(restaurants);
        }

    });
}
getLocation("Manhattan, New York City, USA");