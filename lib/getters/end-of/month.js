/**
 * @file lib/end-of/month.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const getYear = require('../year')
const getMonth = require('../month')
const $ = require('../../constants')
const assert = require('../../assert')
const getDayOfMonth = require('../day-of/month')

// build out a map at require-time to reduce actual
// calculation to a simple lookup
const Months = (function (months) {
  const Months = {}
  let hasThirtyOne = true

  for (const month of months) {
    if (hasThirtyOne) {
      Months[month] = 31
    } else {
      Months[month] = 30
    }

    hasThirtyOne = !hasThirtyOne
  }

  return Months
}(['January'].concat($.Months.slice(2)))) // skip February

// a single leap year is enough for reference
const SOME_LEAP_YEAR = 2020

function getLastDayOfMonth (date) {
  const month = getMonth.asString(date)
  const end = Months[month]

  if (end !== undefined) {
    return end
  }

  // otherwise, February
  const year = getYear(date)
  return (SOME_LEAP_YEAR - year) % 4 === 0 ? 29 : 28
}

function getEndOfMonth (date) {
  assert(date)

  const lastDay = getLastDayOfMonth(date)

  while (getDayOfMonth(date) !== lastDay) {
    date += $.$.Day
  }

  return date
}

module.exports = getEndOfMonth
