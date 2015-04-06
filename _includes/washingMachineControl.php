<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
    </head>
 
    <body>
		<?php
		 //this php script generate the first page in function of the gpio's status
		 $status = array (0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		 for ($i = 0; $i < count($status); $i++) {
			//set the pin's mode to output and read them
			system("gpio mode ".$i." out");
			exec ("gpio read ".$i, $status[$i], $return );
			//if off
			if ($status[$i][0] == 0 ) {
			echo ("<img id='button_".$i."' src='assets/img/powerOff.png' alt='off'/>");
			}
			//if on
			if ($status[$i][0] == 1 ) {
			echo ("<img id='button_".$i."' src='assets/img/powerOn.png' alt='on'/>");
			}	 
		 }
		?>
	
		<script src="script.js"></script>
    </body>
</html>