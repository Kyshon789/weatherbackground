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
        $("#box2").text(response['current_observation']['icon']);
        Getimagebytemperture(response['current_observation']['temp_f']);
        }
    })
    
}

        
// $("#button").click(function() {
//     var message = $("#search").val();
// });
// $("div").append("");

function Getimagebytemperture(temp) {
  if (temp < 70){
     changebackground("rain1");
     }else{
         changebackground("sunny1");
     }
     
 
}
function changebackground(image) { 
    $("body").css("background-image","url(pics/"+image +".jpg)");
    
}

//  backgroundChange
// function updatebackground (){
//         // document.getElementById("airPlane").src 
//             if(CURRENTENVIRONMENT.appearance=== "rain"){
//                 backgroundChange("rain1.jpg")
//             } else if(CURRENTENVIRONMENT.appearance=== "Sunny"){
//                 backgroundChange("sunny1.jpg")
//             } else if(CURRENTENVIRONMENT.appearance=== "Snow"){
//                 backgroundChange("snow1.jpg")
//             }  else if(CURRENTENVIRONMENT.appearance=== "Windy"){
//             backgroundChange("windy1.jpg")
//             } else if(CURRENTENVIRONMENT.appearance=== "stormy"){
//               backgroundChange("stormy.jpg")
//             }
// }
