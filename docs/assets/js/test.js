/**
  * @file Tests in console(s).
  */

console.log('Convert degrees-minutes-seconds to decimal degrees');
console.log('Let input is 12-34-56');
var dms = { deg: '12', min: '34', sec: '56' };
var result = survey.dmsToDec(dms);
console.log('Result: ' + result);
console.log('[done]');
