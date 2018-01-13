/**
 * @file lib/getters/month.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../assert')
const { Months } = require('../constants')

function getMonth (date) {
  assert(date)
  return new Date(date).getUTCMonth()
}

function getMonthString (date) {
  return Months[getMonth(date)]
}

module.exports = getMonth
module.exports.asString = getMonthString
