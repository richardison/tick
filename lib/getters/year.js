/**
 * @file lib/getters/year.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const assert = require('../assert')

function getYear (date) {
  assert(date)
  return new Date(date).getUTCFullYear()
}

module.exports = getYear
