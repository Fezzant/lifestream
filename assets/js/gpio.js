//The JavaScript using images as buttons to send and receive values to/from the Pi
var button_progSelect = document.getElementById("button_progSelect");
var button_progStart = document.getElementById("button_progStart");
var button_power = document.getElementById("button_power");

//This function sends and receives the pins' status.
function change_pin (pin, status) {
	//HTTP request.
	var request = new XMLHttpRequest();
	request.open( "GET" , "/appliances/appliance_01.php?pin=" + pin + "&status=" + status );
	request.send(null);
	//Receiving values.
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			return (parseInt(request.responseText));
		}
		else if (request.readyState == 4 && request.status == 500) {
			alert ("server error");
			return ("fail");
		}
		else { return ("fail"); }
	}
}

//These are the button events, they call the change_pin function and updates the page based on its' return value.
button_progSelect.addEventListener("mousedown", function () {
	var new_status = change_pin ( 8, 0);
	if (new_status !== "fail") { 
		button_progSelect.alt = "on";
		button_progSelect.src = "assets/img/appliances/appliance_01/progSelectDown.png";
		return 0;
	}
} );
button_progSelect.addEventListener("mouseup", function () {
	button_progSelect.alt = "off";
	button_progSelect.src = "assets/img/appliances/appliance_01/progSelectUp.png";
	return 0;
} );

button_progStart.addEventListener("mousedown", function () {
	var new_status = change_pin ( 9, 0);
	if (new_status !== "fail") { 
		button_progStart.alt = "on";
		button_progStart.src = "assets/img/appliances/appliance_01/progStartDown.png";
		return 0;
	}
} );
button_progStart.addEventListener("mouseup", function () {
	button_progStart.alt = "off";
	button_progStart.src = "assets/img/appliances/appliance_01/progStartUp.png";
	return 0;
} );

button_power.addEventListener("mousedown", function () {
	var new_status = change_pin ( 12, 0);
	if (new_status !== "fail") { 
		button_power.alt = "on";
		button_power.src = "assets/img/appliances/appliance_01/powerDown.png";
		return 0;
	}
} );
button_power.addEventListener("mouseup", function () {
	button_power.alt = "off";
	button_power.src = "assets/img/appliances/appliance_01/powerUp.png";
	return 0;
} );