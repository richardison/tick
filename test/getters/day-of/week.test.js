const test = require('ava')
const Tick = require('../../../')
const $ = require('../../utils/constants')

test('should be able to get proper day for every day of the week', t => {
  t.is(Tick.getDayOfWeek($.SUNDAY), 0)
  t.is(Tick.getDayOfWeek($.MONDAY), 1)
  t.is(Tick.getDayOfWeek($.TUESDAY), 2)
  t.is(Tick.getDayOfWeek($.WEDNESDAY), 3)
  t.is(Tick.getDayOfWeek($.THURSDAY), 4)
  t.is(Tick.getDayOfWeek($.FRIDAY), 5)
  t.is(Tick.getDayOfWeek($.SATURDAY), 6)
})

test('should be able to get proper day for every day of the week (as string)', t => {
  t.is(Tick.getDayOfWeek.asString($.SUNDAY), 'Sunday')
  t.is(Tick.getDayOfWeek.asString($.MONDAY), 'Monday')
  t.is(Tick.getDayOfWeek.asString($.TUESDAY), 'Tuesday')
  t.is(Tick.getDayOfWeek.asString($.WEDNESDAY), 'Wednesday')
  t.is(Tick.getDayOfWeek.asString($.THURSDAY), 'Thursday')
  t.is(Tick.getDayOfWeek.asString($.FRIDAY), 'Friday')
  t.is(Tick.getDayOfWeek.asString($.SATURDAY), 'Saturday')
})

test('should be able to get proper day for every day of a generated week', t => {
  t.is(Tick.getDayOfWeek($.TODAY - (4 * Tick.$.Day)), 0)
  t.is(Tick.getDayOfWeek($.TODAY - (3 * Tick.$.Day)), 1)
  t.is(Tick.getDayOfWeek($.TODAY - (2 * Tick.$.Day)), 2)
  t.is(Tick.getDayOfWeek($.TODAY - (1 * Tick.$.Day)), 3)
  t.is(Tick.getDayOfWeek($.TODAY), 4) // since today is thursday
  t.is(Tick.getDayOfWeek($.TODAY + (1 * Tick.$.Day)), 5)
  t.is(Tick.getDayOfWeek($.TODAY + (2 * Tick.$.Day)), 6)
})

test('should be able to get proper day for every day of a generated week (as string)', t => {
  t.is(Tick.getDayOfWeek.asString($.TODAY - (4 * Tick.$.Day)), 'Sunday')
  t.is(Tick.getDayOfWeek.asString($.TODAY - (3 * Tick.$.Day)), 'Monday')
  t.is(Tick.getDayOfWeek.asString($.TODAY - (2 * Tick.$.Day)), 'Tuesday')
  t.is(Tick.getDayOfWeek.asString($.TODAY - (1 * Tick.$.Day)), 'Wednesday')
  t.is(Tick.getDayOfWeek.asString($.TODAY), 'Thursday') // since today is thursday
  t.is(Tick.getDayOfWeek.asString($.TODAY + (1 * Tick.$.Day)), 'Friday')
  t.is(Tick.getDayOfWeek.asString($.TODAY + (2 * Tick.$.Day)), 'Saturday')
})
