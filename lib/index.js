/**
 * @file lib/index.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

exports.getEndOf = require('./getters/end-of')
exports.getStartOf = require('./getters/start-of')

exports.getDayOfWeek = require('./getters/day-of/week')
exports.getDayOfMonth = require('./getters/day-of/month')
exports.getWeekOfMonth = require('./getters/week-of/month')

exports.getMonth = require('./getters/month')
exports.getYear = require('./getters/year')

exports.assert = require('./assert')
exports.date = require('./date')

// constants are defined in a separate file to avoid
// circular imports
const constants = require('./constants')

for (const key in constants) {
  if (constants.hasOwnProperty(key)) {
    exports[key] = constants[key]
  }
}
