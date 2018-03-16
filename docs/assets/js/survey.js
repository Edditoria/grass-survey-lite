/**
  * @file Contains all forumla related to survey calcuations.
  */

var survey = {}; // group all forumla into one object to avoid duplicated namespace
survey.degSym = '\xb0'; // degree symbol in ascii

/**
  * @typedef {(Object|string)} DmsLike - Expect:
  * - An object { deg: num|str, min: num|str, sec: num|str }
  * - Or, a string in format of 'ddd°mm\'ss\"'
  * - Or, a tele-like string in format of 'ddd-mm-ss'
  * - Or, seperate by comma: 'ddd,mm,ss'
  */

/**
  * Validate then parse DMS (degrees-minutes-seconds) format smartly
  * @param {DmsLike} dms
  * @returns {Object} - In format of: { deg: num, min: num, sec: num }
  */
survey.validateDms = function(input) {
	var errorStr = '[Error] Invalid input in survey.parseDms()';
	var deg, min, sec;
	if (typeof input === 'string') {
		// regex of forgivable format ddd°mm'ss" (or ddd.dd°mmm.mm'sss.ss")
		var re1 = /^\d+(\.\d*){0,1}\xb0\d+(\.\d*){0,1}'\d+(\.\d*){0,1}"$/;
		// regex of forgivable format ddd-dd-dd or ddd,dd,dd (or ddd.dd-mmm.mm,sss.ss)
		var re2 = /^\d+(\.\d*){0,1}[\-,]\d+(\.\d*){0,1}[\-,]\d+(\.\d*){0,1}$/;
		if (re1.test(input) || re2.test(input)) {
			var inputArr = input.split(/[\xb0'"\-,]/); // regex; ['ddd', 'mm', 'ss']
			deg = +inputArr[0]; // number
			min = +inputArr[1]; // number
			sec = +inputArr[2]; // number
		} else {
			console.log(errorStr);
			return null;
		}
	} else {
			console.log(errorStr);
			return null;
	}
	return { deg: deg, min: min, sec: sec };
};

/**
  * Convert degrees-minutes-seconds to decimal degrees
  * @param {DmsLike} dms
  * @returns {number|string} - From 0 to 359.9999
  */
survey.dmsToDec = function(dms) {
	return +dms.deg + (+dms.min / 60) + (+dms.sec / 3600);
};
