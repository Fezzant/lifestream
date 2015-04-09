<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
    </head>
    <body>
		<div class="appliance-control-panel">
			<!--Initialise the buttons in their "up" positions-->
			<div class="btn-power">
				<?php
					echo ("<img id='button_power' src='assets/img/appliances/appliance_01/powerUp.png' alt='off'/>");
				?>	
			</div>
			<div class="btn-programmeControl">
				<div class="btn-progSelect">
					<?php
						echo ("<img id='button_progSelect' src='assets/img/appliances/appliance_01/progSelectUp.png' alt='off'/>");
					?>
				</div>
				<div class="btn-progStart">
					<?php
						echo ("<img id='button_progStart' src='assets/img/appliances/appliance_01/progStartUp.png' alt='off'/>");
					?>
				</div>
			</div>

			<?php
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

			<!-- JQuery Script to load the washing machine status file every 250ms updating the contents of the status div -->
			<script src="jquery.min.js" type="text/javascript"></script>
			<script type="text/javascript">
			var timer = setInterval(function(){getStatus();},250);

			$(function() {
				getStatus();
			});
			 
			function getStatus() {
				$('div#status').load('washingMachineStatus.php');
			}
			</script>
			
			<div class="status-panel">
				<div class="status-textbox">
					<div id="status"></div>
				</div>
			</div>
			
		</div>
		<script src="assets/js/gpio.js"></script>
    </body>
</html>