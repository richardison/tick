const test = require('ava')
const $ = require('../../utils/constants')
const Tick = require('../../../')

test('should get weekOfMonth from date', t => {
  t.is(Tick.getWeekOfMonth($.TODAY), 2, 'today is the second week of the month')
  t.is(Tick.getWeekOfMonth($.END_OF_JAN_2017), 5, 'end of jan is the fifth week of the month')
  t.is(Tick.getWeekOfMonth($.FEB_1_1980), 1, 'feb 1 is the first week of the month')
})
