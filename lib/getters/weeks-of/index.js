/**
 * @file lib/weeks-of/index.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../../assert')
const getWeeksOfImplementation = {
  month: require('./month')
}

module.exports = function getWeeksOf (date, unit) {
  assert(date)
  const getWeeksOfFrom = getWeeksOfImplementation[unit]

  if (!getWeeksOfFrom) {
    throw new Error(`Unexpected unit given to getWeeksOf: ${unit}`)
  }

  return getWeeksOfFrom(date)
}
