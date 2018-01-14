/**
 * @file lib/weeks-of/month.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../../assert')
const getDayOfMonth = require('../day-of/month')

module.exports = function getWeekOfMonth (date) {
  assert(date)
  return Math.ceil(getDayOfMonth(date) / 7)
}
