/**
 * @file lib/start-of/month.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const $ = require('../../constants')

module.exports = function getStartOfMonth (date) {
  return Math.floor(date / $.Month) * $.Month
}
