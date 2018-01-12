/**
 * @file lib/assert.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const toDate = require('./date')

module.exports = function assert(value) {
  if (typeof value !== 'number') {
    throw new Error('Unexpected value given for date')
  }

  toDate(value)
}
