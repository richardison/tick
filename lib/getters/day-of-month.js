/**
 * @file lib/getters/day-of-month.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const $ = require('../constants')

module.exports = function getDayOfMonth(date) {
  return +String(new Date(date)).split(' ')[2]
}
