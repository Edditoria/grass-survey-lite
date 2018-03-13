/**
  * @file Scripts to control UI elements.
  * Requires survey.js
  */

/**
  * Read from and write to html text boxes for dms-dec convertion
  */
var dmsToDec = function() {
	// read value from input fields
	var dmsInput = document.getElementById('dmsToDec-input').value;
	var dms = survey.validateDms(dmsInput); // return dms object
	var dec = survey.dmsToDec(dms);
	// write value to output field
	document.getElementById('dmsToDec-output').value = dec;
};

/**
  * Act as keypad. Insert DMS symbol.
  */
var keyInsertDmsSym = function(event, targetId) {
	console.log(event, targetId);
};

/**
  * Trigger button-click to dmsToDec()
  */
document.getElementById('dmsToDec-submit').onclick = dmsToDec;

/**
  * Trigger button-click to keyInsertDmsSym()
  */
document.getElementById('key-insert-dms-sym').addEventListener('click', function(event) {
	keyInsertDmsSym.call(this, event, 'dmsToDec-input');
}, false);
