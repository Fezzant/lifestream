<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
    </head>
    <body>
		<div style="width: 600px; height: 500px; background: #ccc;">
			<?php
			//Initialise the buttons in their "up" positions
			echo ("<img id='button_power' src='assets/img/powerUp.png' alt='off'/>");
			echo ("<img id='button_progSelect' src='assets/img/progSelectUp.png' alt='off'/>");
			echo ("<img id='button_progStart' src='assets/img/progStartUp.png' alt='off'/>");

			//Getting and using pin and status values.
			if (isset ($_GET["pin"]) && isset($_GET["status"]) ) {
				$pin = strip_tags($_GET["pin"]);
				$status = strip_tags($_GET["status"]);
				//Ensuring the values are numbers and within the pin limit of the pi.
				if ( (is_numeric($pin)) && (is_numeric($status)) && ($pin <= 40) && ($pin >= 0) && ($status == "0") || ($status == "1") ) {
					//Toggle the selected gpio pin on, wait 50ms, then off.
					system("gpio mode ".$pin." out");
					$status = "1";
					system("gpio write ".$pin." ".$status );
					exec ("gpio read ".$pin, $status, $return );
					echo ( $status[1] );
					usleep(50000);
					$status = "0";
					system("gpio write ".$pin." ".$status );
					exec ("gpio read ".$pin, $status, $return );
					echo ( $status[0] );
				}
			}
			?>			
			<?php
				//Retrieve the current washing machine status to be printed on screen.
					echo file_get_contents("../washingMachineStatus.html");
			?>		
		</div>
		<script src="assets/js/gpio.js"></script>
    </body>
</html>