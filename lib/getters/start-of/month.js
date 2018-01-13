/**
 * @file lib/start-of/month.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const $ = require('../../constants')
const getDayOfMonth = require('../day-of-month')

module.exports = function getStartOfMonth (date) {
  const currentDay = getDayOfMonth(date)

  if (currentDay === 1) {
    return date
  }

  return date - ((currentDay - 1) * $.Day)
}
