//Setting reference
var database = firebase.database().ref();
var messagebase = firebase.database().ref().child("Messages");
var userbase = firebase.database().ref().child("Users");
var debates;
var prevmsgs;

function getUrlVars(){
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
        });
    return vars;
 }


var u = getUrlVars()["u"];
var usermsgs = firebase.database().ref().child("Messages").child(u);

$(document).ready(function(){
	getMessages();
});

messagebase.on("value", function (snapshot){
    prevmsgs = snapshot.val(); 
});


function getMessages(recvr){
	for (var user in prevmsgs) {
    	// skip loop if the property is from prototype
    	if (!prevmsgs.hasOwnProperty(user)) continue;
    	var row = prevmsgs[user];

    	for (var info in row) {

       		// skip loop if the property is from prototype
        	if(!row.hasOwnProperty(info)) continue;
        		var obj = row[info];

        		for(var p in obj){

        			if(!obj.hasOwnProperty(p)) continue;
        			console.log(p, obj[p]);
        			return false;
        	}
		}
     } 
}


usermsgs.on("child_added", function(dataRow){
    var row = dataRow.val();
    if(getMessages(row.Receiver)){
    	$("#messages").append("<p style = 'text-align:right'>" +row.Message + " + " + row.Receiver + "</p>");
    }
    else{
    	$("#messages").append("<p style = 'text-align:right'>" +row.Message + " - " + row.Receiver + "</p>");
    }
});


function send(){
	var msg = $("#write").val();
	var to = $("#receiver").val();
	if(!(msg=="" || to=="")){
		usermsgs.push({
			"Receiver": to,
			"Message": msg
		});
	
	}

	$("#write").val("");
}

