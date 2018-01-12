/**
 * @file lib/start-of/index.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../../assert')
const getStartOfImplementations = {
  month: require('./month')
}

module.exports = function getStartOf (date, unit) {
  assert(date)
  const getStartOfFrom = getStartOfImplementations[unit]

  if (!getStartOfFrom) {
    throw new Error(`Unexpected unit given to getStartOf: ${unit}`)
  }

  return getStartOfFrom(date)
}
