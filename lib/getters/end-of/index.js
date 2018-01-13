/**
 * @file lib/end-of/index.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../../assert')
const getEndOfImplementations = {
  month: require('./month')
}

module.exports = function getEndOf (date, unit) {
  assert(date)
  const getEndOfFrom = getEndOfImplementations[unit]

  if (!getEndOfFrom) {
    throw new Error(`Unexpected unit given to getEndOf: ${unit}`)
  }

  return getEndOfFrom(date)
}
