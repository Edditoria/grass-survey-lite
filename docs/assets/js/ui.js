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
  * Act as keypad. Append DMS symbol.
  * Will auto run dmsToDec() when all 3 symbol is presented.
  */
var keyInsertDmsSym = function(event, targetId) {
	targetEle = document.getElementById(targetId);
	targetVal = targetEle.value
	// find the last symbol and insert the next one
	if (targetVal.indexOf('\"') >= 0) {
		dmsToDec();
	} else if (targetVal.indexOf('\'') >= 0) {
		targetEle.value += '\"';
		dmsToDec();
	} else if (targetVal.indexOf(survey.degSym) >= 0) {
		targetEle.value += '\'';
	} else {
		targetEle.value += survey.degSym;
	}
	targetEle.focus();
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
