/**
 * @file lib/getters/day-of/week.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../../assert')
const { Days } = require('../../constants')

function getDayOfWeek (date) {
  assert(date)
  return new Date(date).getDay()
}

function getDayOfWeekAsString (date) {
  return Days[getDayOfWeek(date)]
}

module.exports = getDayOfWeek
module.exports.asString = getDayOfWeekAsString
