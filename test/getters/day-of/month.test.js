const test = require('ava')
const Tick = require('../../../')
const $ = require('../../utils/constants')

test('should be able to figure out day of month for Jan 1', t => {
  function assert (date) {
    const today = date
    const tomorrow = date + Tick.$.Day

    t.is(
      Tick.getDayOfMonth(today) + 1,
      Tick.getDayOfMonth(tomorrow),
      'tomorrow should be one more than today (not offset by a timezone)'
    )
  }

  assert($.START_OF_JAN_2017)
  assert($.START_OF_START_OF_JAN_2017)
  assert($.END_OF_START_OF_JAN_2017)
})

test('should be able to figure out day of month for Jan 1', t => {
  t.is(Tick.getDayOfMonth($.TODAY), 11, 'today is the 11th')
  t.is(Tick.getDayOfMonth($.TOMORROW), 12, 'tomorrow is the 12th')
})
