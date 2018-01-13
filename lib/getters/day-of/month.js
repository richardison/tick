/**
 * @file lib/getters/day-of/month.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../../assert')

module.exports = function getDayOfMonth (date) {
  assert(date)
  return new Date(date).getUTCDate()
}
