const test = require('ava')
const Tick = require('../../../')
const $ = require('../../utils/constants')
const is = require('../../utils/date-is')

test(`should be able to get startOf month for ${$.TODAY}`, t => {
  is(
    t,
    Tick.getStartOf($.TODAY, 'month'),
    $.START_OF_JAN_2017,
    'start of this month should have been Jan 1 with same time'
  )
})
