/**
 * @file lib/week-of/index.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../../assert')
const getWeekOfImplementations = {
  month: require('./month')
}

module.exports = function getWeekOf (date, unit) {
  assert(date)
  const getWeekOfFrom = getWeekOfImplementations[unit]

  if (!getWeekOfFrom) {
    throw new Error(`Unexpected unit given to getWeekOf: ${unit}`)
  }

  return getWeekOfFrom(date)
}
