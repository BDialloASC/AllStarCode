
/*var url = "http://maps.googleapis.com/maps/api/staticmap?";
var center = "center=601+26th+St.+NYC";
var zoom = "zoom=16";
var scale = "scale=false";
var size = "size=600x300";
var maptype = "maptype=roadmap";
var format = "format=png";
var visref = "visual_refresh=true";
var markers = "markers=icon:http://orig05.deviantart.net/4dcb/f/2012/302/8/6/pikachu_sprite_by_pokedan1-d5j3am9.png%7Cshadow:true%7C601+26th+St.+NYC";

url+= center + "&" + zoom + "&" + scale + "&" + size + "&" + maptype + "&" + format + "&" + visref + "&" + markers;
//url = encodeURI(url);
*/

var url = "http://maps.googleapis.com/maps/api/staticmap?center=601+26th+St.+NYC&zoom=13&size=600x300";
var marker = "&markers=icon:";
var pika = "http://orig05.deviantart.net/4dcb/f/2012/302/8/6/pikachu_sprite_by_pokedan1-d5j3am9.png%7Cshadow:true%7C";
var rareth = "http://i.imgur.com/3SRMCzm.png%7Cshadow:true%7C";
var newPoke = "http://i.imgur.com/Q4Q2mUn.png%7Cshadow:true%7C";
var places = ["500 26th St. NYC","428 W 26th St NYC", "540 W 28th St NYC", "613 W 29th St NYC", "601 W 26th St NYC",
				"156 12th Ave","1304 Troy Avenue", "Brooklyn NY"];

for (var i = 0; i < places.length; i++) {
	url+= marker + pika + encodeURI(places[i]);
}


var htmlImg = document.createElement("img");
$("body").append(htmlImg);
$("img").attr("src",url);