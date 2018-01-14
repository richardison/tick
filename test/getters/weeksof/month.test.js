const test = require('ava')
const $ = require('../../utils/constants')
const Tick = require('../../../')

test('should get weeksOfMonth from date', t => {
  t.is(Tick.getWeeksOfMonth($.TODAY), 5, 'January 2018 has 5 weeks')
  t.is(Tick.getWeeksOfMonth($.FEB_1_1933), 4, 'Feb 1933 has 4 weeks')
})
