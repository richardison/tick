/**
 * @file test/utils/constants.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const date = require('../../lib/date')

// misc
exports.TODAY = date('Thu Jan 11 2018 17:49:21 GMT-0500 (EST)')
exports.TOMORROW = date('Fri Jan 12 2018 17:49:21 GMT-0500 (EST)')

// Jan 1
exports.START_OF_JAN_2017 = date('Mon Jan 01 2018 17:49:21 GMT-0500 (EST)')
exports.START_OF_START_OF_JAN_2017 = date('Mon Jan 01 2018 00:00:00 GMT-0500 (EST)')
exports.END_OF_START_OF_JAN_2017 = date('Mon Jan 01 2018 23:59:59 GMT-0500 (EST)')

// Jan 31
exports.END_OF_JAN_2017 = date('Wed Jan 31 2018 17:49:21 GMT-0500 (EST)')
exports.START_OF_END_OF_JAN_2017 = date('Wed Jan 31 2018 00:00:00 GMT-0500 (EST)')
exports.END_OF_END_OF_JAN_2017 = date('Wed Jan 31 2018 23:59:59 GMT-0500 (EST)')

// Feb 1933
exports.FEB_1_1933 = date('Wed Feb 01 1933 17:49:21 GMT-0500 (EST)')
exports.FEB_28_1933 = date('Tue Feb 28 1933 17:49:21 GMT-0500 (EST)')

// Feb 1980
exports.FEB_1_1980 = date('Fri Feb 1 1980 17:49:21 GMT-0500 (EST)')
exports.FEB_29_1980 = date('Fri Feb 29 1980 17:49:21 GMT-0500 (EST)')
