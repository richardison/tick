/**
 * @file lib/weeks-of/month.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../../assert')
const getWeekOfMonth = require('../week-of/month')
const getStartOfMonth = require('../start-of/month')
const getEndOfMonth = require('../end-of/month')

module.exports = function getWeeksOfMonth (date) {
  assert(date)
  const start = getStartOfMonth(date)
  const end = getEndOfMonth(date)

  return getWeekOfMonth(end) - getWeekOfMonth(start) + 1
}
