const test = require('ava')
const Tick = require('../../')
const $ = require('../utils/constants')

test('should be able to figure out day of month for Jan 1', t => {
  t.is(Tick.getDayOfMonth($.START_OF_JAN_2017), 1, 'should be able to figure out day of month from mid-day')
  t.is(Tick.getDayOfMonth($.START_OF_START_OF_JAN_2017), 1, 'should be able to figure out day of month from start-day')
  t.is(Tick.getDayOfMonth($.END_OF_START_OF_JAN_2017), 1, 'should be able to figure out day of month from end-day')
})

test('should be able to figure out day of month for Jan 1', t => {
  t.is(Tick.getDayOfMonth($.TODAY), 11, 'today is the 11th')
  t.is(Tick.getDayOfMonth($.TOMORROW), 12, 'tomorrow is the 12th')
})
