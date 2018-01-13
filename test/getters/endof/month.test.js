const test = require('ava')
const Tick = require('../../../')
const $ = require('../../utils/constants')
const is = require('../../utils/date-is')

test(`should be able to get endOf month for ${$.TODAY}`, t => {
  is(
    t,
    Tick.getEndOf($.TODAY, 'month'),
    $.END_OF_JAN_2017,
    'end of this month should have been Jan 31 with same time'
  )
})

test(`should be able to get endOf month for February (1933 and 1980)`, t => {
  is(
    t,
    Tick.getEndOf($.FEB_1_1933, 'month'),
    $.FEB_28_1933,
    'February 1933 had 28 days'
  )

  is(
    t,
    Tick.getEndOf($.FEB_1_1980, 'month'),
    $.FEB_29_1980,
    'February 1933 had 29 days'
  )
})
