$(document).ready(function() {
    $("#button").click(function() {
        var zipcode = $("#search").val();
        searchbyzipcode(zipcode);
    });
    // $.ajax({
    //     url: "https://api.wunderground.com/api/db98605a355b736f/geolookup/conditions/q/IA/Cedar_Rapids.json",
    //     dataType: "jsonp",
    //     success: function(parsed_json) {
    //         var location = parsed_json['location']['city'];
    //         var temp_f = parsed_json['current_observation']['temp_f'];
    //         alert("Current temperature in " + location + " is: " + temp_f);
    //         // $.ajax(requestUtl["location"]);
    //     }
    // });
});
function searchbyzipcode(zipcode) { 
    $.ajax({
        url:"https://api.wunderground.com/api/db98605a355b736f/geolookup/q/"+zipcode+ ".json",
        method: "GET",
        success: function(response){
            getforcast(response["location"]["city"],response["location"]["state"]);
        }
    })
}

function getforcast(city,state){
    $.ajax({
        url:"https://api.wunderground.com/api/db98605a355b736f/geolookup/conditions/q/"+state+"/"+city+".json",
        method:"GET",
        success: function(response){
            console.log(response)
        $("#box").text(response['current_observation']['temp_f']);
        $("#box2").text(response['current_observation']['weather']);
        // Getimagebytemperture(response['current_observation']['temp_f']);
        Getimagebyweather(response['current_observation']['weather'].toLowerCase());
        }
    })
    
}

        


function Getimagebyweather(weather) {
  if (weather === "sunny" ){
     changebackground("sunny1");
     }else if (weather === "Overcast"){
         changebackground("cloudy");
     }else if(weather === "mostly cloudy"){
   changebackground("cloudy");
     }else if (weather === "rain"){
    changebackground("rain1");}
 }

function changebackground(image) { 
    $("body").css("background-image","url(pics/"+image +".jpg)");
    
}
