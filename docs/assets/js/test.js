/**
  * @file Tests in console(s).
  */

console.log('Convert degrees-minutes-seconds to decimal degrees');
console.log('Let input is 12-34-56');
var input = { deg: '12', min: '34', sec: '56' };
var result = survey.dmsToDec(input);
console.log('Result: ' + result);
console.log('[done]');

/**
  * Compare value of deg, min and sec in input and expect one-by-one
  * @function compareDms
  * @param {Object} input - In format of: { deg: num, min: num, sec: num }
  * @param {Object} expect - In format of: { deg: num, min: num, sec: num }
  * @returns {boolean} - true if value of deg, min and sec are the same
  */
var compareDms = function(input, expect) {
	var result = true;
	var i, len;
	var items = ['deg', 'min', 'sec'];
	for (i = 0, len = items.length; i < len; i++) {
		item = items[i];
		result = (input[item] === expect[item] && result) ? true : false;
	}
	return result;
};

/**
  * Do test of survey.validateDms(), console.log() messages and return true or false
  * @function testValidateDms
  * @param {string} input
  * @param {Object} expect
  * @returns {Object} - In format of: { deg: num, min: num, sec: num }
  */
var testValidateDms = function(input, expect) {
	console.log('[test] survey.validateDms()');
	console.log('Input: ', input);
	var result = survey.validateDms(input);
	var pass = compareDms(result, expect)
	console.log('Pass: ', pass, ' Result: ', result, ' Expect: ', expect);
	console.log('[done]');
	return pass
};

testValidateDms('12\xb034\'56\"', { deg: 12, min: 34, sec: 56 });
testValidateDms('12-34-56', { deg: 12, min: 34, sec: 56 });
testValidateDms('12,34,56', { deg: 12, min: 34, sec: 56 });
// Test for decimal place
testValidateDms('358.99\xb058.9\'58.9\"', { deg: 358.99, min: 58.9, sec: 58.9 });
testValidateDms('360.99\xb00\'0\"', { deg: 360.99, min: 0, sec: 0 });
testValidateDms('0\xb0360.99\'0\"', { deg: 0, min: 360.99, sec: 0 });
testValidateDms('0\xb00\'360.99\"', { deg: 0, min: 0, sec: 360.99 });
testValidateDms('358.99,58.9,58.9', { deg: 358.99, min: 58.9, sec: 58.9 });
testValidateDms('0,360.99,0', { deg: 0, min: 360.99, sec: 0 });
testValidateDms('0,0,360.99', { deg: 0, min: 0, sec: 360.99 });
testValidateDms('358.99-58.9-58.9', { deg: 358.99, min: 58.9, sec: 58.9 });
testValidateDms('0-360.99-0', { deg: 0, min: 360.99, sec: 0 });
testValidateDms('0-0-360.99', { deg: 0, min: 0, sec: 360.99 });
