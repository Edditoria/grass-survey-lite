/**
  * @file Scripts to control UI elements.
  * Requires survey.js
  */

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
	var dec = survey.dmsToDec(dms);
	// write value to output field
	document.getElementById('dmsToDec-output').value = dec;
};

/**
  * Reset value in text boxes in dms-dec convertion
  */
var resetDmsToDec = function() {
	document.getElementById('dmsToDec-input-deg').value = '';
	document.getElementById('dmsToDec-input-min').value = '';
	document.getElementById('dmsToDec-input-sec').value = '';
	document.getElementById('dmsToDec-output').value = 0;
};

/**
  * Trigger button-click to dmsToDec()
  */
document.getElementById('dmsToDec-submit').onclick = dmsToDec;

/**
  * Trigger button-click to reset dms-dec form
  */
document.getElementById('dmsToDec-reset').onclick = resetDmsToDec;
