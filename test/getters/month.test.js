const test = require('ava')
const Tick = require('../../')
const $ = require('../utils/constants')

test('should be able to figure out the month of year', t => {
  t.is(Tick.getMonth($.TODAY), 0, 'today, the month is 0')
  t.is(Tick.getMonth($.TOMORROW), 0, 'tomorrow, the month will still be 0')
})

test('should be able to figure out the month of year', t => {
  t.is(Tick.getMonth.asString($.TODAY), 'January', 'today, the month is January')
  t.is(Tick.getMonth.asString($.TOMORROW), 'January', 'tomorrow, the month will still be January')
})
