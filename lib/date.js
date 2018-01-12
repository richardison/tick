/**
 * @file lib/date.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

function toDate (value) {
  // numbers should be attempted to be casted to a
  // date object, just in case it's a negative or something
  if (typeof value === 'number') {
    return value
  }

  // strings can be passed to the engine
  if (typeof value === 'string') {
    return +new Date(value)
  }

  // undefined means get now
  if (value === undefined) {
    return Date.now()
  }

  // dates can be used
  if (value instanceof Date) {
    return +value
  }

  // anything else is unacceptable
  throw new Error(`Unexpected type given to .date(): ${typeof value}`)
}

module.exports = function date (value) {
  const vdate = toDate(value)

  if (isNaN(vdate)) {
    throw new Error(`Failed to cast unexpected value to date: ${value}`)
  }

  return vdate
}
