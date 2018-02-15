// This file contains all functions related to calcuations

var calc = {}; // group all forumla into one object to avoid duplicated namespace

/**
  * Convert degrees-minutes-seconds to decimal degrees
  * @param {Object} dms - expect { deg: 'ddd', min: 'mm', sec: 'ss' }
  * @returns {string} - a string consists of number from '0.0000' to '359.9999'
  */
calc.dmsToDec = function (dms) {
	// add '' as tail to convert number to string
	return +dms.deg + (+dms.min / 60) + (+dms.sec / 3600) + '';
};
