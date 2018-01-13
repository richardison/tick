const test = require('ava')
const Tick = require('../../')
const $ = require('../utils/constants')

test('should be able to figure out the year', t => {
  t.is(Tick.getYear($.TODAY), 2018, 'today, the year is 2018')
  t.is(Tick.getYear($.TOMORROW), 2018, 'tomorrow, the year will still be 2018')
})
