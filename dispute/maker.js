//var makerURL="https://maker.ifttt.com/trigger/Elite/with/key/kc5QT0DaSbPGw6Kva6132jsGZq1CCgav41xoq_krImr"
var makerURL="https://maker.ifttt.com/trigger/Contact/with/key/kc5QT0DaSbPGw6Kva6132jsGZq1CCgav41xoq_krImr"

function submitIt(){
	var EventName= $("#EventName").val();
	// var OccurredAt= $("#OccurredAt").val();
	var sendoff={
		"value1": EventName,
		//"value2": OccurredAt,
	}
	$.post(makerURL,sendoff);
	$("#EventName").val("");
	// $("#OccurredAt").val("")
}