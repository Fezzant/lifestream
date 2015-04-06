//JavaScript, use pictures as buttons, sends and receives values to/from the Rpi
//These are all the buttons
var button_0 = document.getElementById("button_0");
var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");
var button_4 = document.getElementById("button_4");
var button_5 = document.getElementById("button_5");
var button_6 = document.getElementById("button_6");
var button_7 = document.getElementById("button_7");
var button_8 = document.getElementById("button_8");
var button_9 = document.getElementById("button_9");
var button_10 = document.getElementById("button_10");
var button_11 = document.getElementById("button_11");
var button_12 = document.getElementById("button_12");


//this function sends and receives the pin's status
function change_pin (pin, status) {
	//this is the http request
	var request = new XMLHttpRequest();
	request.open( "GET" , "gpio.php?pin=" + pin + "&status=" + status );
	request.send(null);
	//receiving information
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			return (parseInt(request.responseText));
		}
	//test if fail
		else if (request.readyState == 4 && request.status == 500) {
			alert ("server error");
			return ("fail");
		}
	//else 
		else { return ("fail"); }
	}
}

//these are all the button's events, it just calls the change_pin function and updates the page in function of the return of it.
button_0.addEventListener("click", function () { 
	//if red
	if ( button_0.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 0, 0);
		if (new_status !== "fail") { 
			button_0.alt = "on"
			button_0.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_0.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 0, 1);
		if (new_status !== "fail") { 
			button_0.alt = "off"
			button_0.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_1.addEventListener("click", function () { 
	//if red
	if ( button_1.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 1, 0);
		if (new_status !== "fail") { 
			button_1.alt = "on"
			button_1.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_1.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 1, 1);
		if (new_status !== "fail") { 
			button_1.alt = "off"
			button_1.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_2.addEventListener("click", function () { 
	//if red
	if ( button_2.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 2, 0);
		if (new_status !== "fail") { 
			button_2.alt = "on"
			button_2.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_2.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 2, 1);
		if (new_status !== "fail") { 
			button_2.alt = "off"
			button_2.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_3.addEventListener("click", function () { 
	//if red
	if ( button_3.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 3, 0);
		if (new_status !== "fail") { 
			button_3.alt = "on"
			button_3.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_3.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 3, 1);
		if (new_status !== "fail") { 
			button_3.alt = "off"
			button_3.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_4.addEventListener("click", function () { 
	//if red
	if ( button_4.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 4, 0);
		if (new_status !== "fail") { 
			button_4.alt = "on"
			button_4.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_4.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 4, 1);
		if (new_status !== "fail") { 
			button_4.alt = "off"
			button_4.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_5.addEventListener("click", function () { 
	//if red
	if ( button_5.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 5, 0);
		if (new_status !== "fail") { 
			button_5.alt = "on"
			button_5.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_5.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 5, 1);
		if (new_status !== "fail") { 
			button_5.alt = "off"
			button_5.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_6.addEventListener("click", function () { 
	//if red
	if ( button_6.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 6, 0);
		if (new_status !== "fail") { 
			button_6.alt = "on"
			button_6.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_6.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 6, 1);
		if (new_status !== "fail") { 
			button_6.alt = "off"
			button_6.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_7.addEventListener("click", function () { 
	//if red
	if ( button_7.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 7, 0);
		if (new_status !== "fail") { 
			button_7.alt = "on"
			button_7.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_7.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 7, 1);
		if (new_status !== "fail") { 
			button_7.alt = "off"
			button_7.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_8.addEventListener("click", function () { 
	//if red
	if ( button_8.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 8, 0);
		if (new_status !== "fail") { 
			button_8.alt = "on"
			button_8.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_8.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 8, 1);
		if (new_status !== "fail") { 
			button_8.alt = "off"
			button_8.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_9.addEventListener("click", function () { 
	//if red
	if ( button_9.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 9, 0);
		if (new_status !== "fail") { 
			button_9.alt = "on"
			button_9.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_9.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 9, 1);
		if (new_status !== "fail") { 
			button_9.alt = "off"
			button_9.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_10.addEventListener("click", function () { 
	//if red
	if ( button_10.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 10, 0);
		if (new_status !== "fail") { 
			button_10.alt = "on"
			button_10.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_10.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 10, 1);
		if (new_status !== "fail") { 
			button_10.alt = "off"
			button_10.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_11.addEventListener("click", function () { 
	//if red
	if ( button_11.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 11, 0);
		if (new_status !== "fail") { 
			button_11.alt = "on"
			button_11.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_11.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 11, 1);
		if (new_status !== "fail") { 
			button_11.alt = "off"
			button_11.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );
	
button_12.addEventListener("click", function () { 
	//if red
	if ( button_12.alt === "off" ) {
		//use the function
		var new_status = change_pin ( 12, 0);
		if (new_status !== "fail") { 
			button_12.alt = "on"
			button_12.src = "assets/img/powerOn.png"; 
			return 0;
			}
		}
	//if green
	if ( button_12.alt === "on" ) {
		//use the function
		var new_status = change_pin ( 12, 1);
		if (new_status !== "fail") { 
			button_12.alt = "off"
			button_12.src = "assets/img/powerOff.png"; 
			return 0;
			}
		}
} );

	
