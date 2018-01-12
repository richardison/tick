/**
 * @file lib/index.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

exports.getStartOf = require('./getters/start-of')
exports.getDayOfMonth = require('./getters/day-of-month')

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
