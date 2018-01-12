/**
 * @file test/utils/constants.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const date = require('../../lib/date')

exports.TODAY = date('Thu Jan 11 2018 19:49:21 GMT-0500 (EST)')
exports.TOMORROW = date('Fri Jan 12 2018 19:49:21 GMT-0500 (EST)')
exports.START_OF_JAN_2017 = date('Mon Jan 01 2018 19:49:21 GMT-0500 (EST)')
exports.START_OF_START_OF_JAN_2017 = date('Mon Jan 01 2018 00:00:00 GMT-0500 (EST)')
exports.END_OF_START_OF_JAN_2017 = date('Mon Jan 01 2018 23:59:59 GMT-0500 (EST)')
