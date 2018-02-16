// Scripts to control UI elements in bearings.html
// Requires calc.js

/**
  * Read from and write to html text boxes for dms-dec convertion
  */
var dmsToDec = function() {
	// read value from input fields
	var dms = {
		deg: document.getElementById('dmsToDec-input-deg').value,
		min: document.getElementById('dmsToDec-input-min').value,
		sec: document.getElementById('dmsToDec-input-sec').value
	};
	var dec = calc.dmsToDec(dms);
	// write value to output field
	document.getElementById('dmsToDec-output').value = dec;
};

/**
  * Trigger button-click to dmsToDec()
  */
document.getElementById('dmsToDec-submit').onclick = dmsToDec;
